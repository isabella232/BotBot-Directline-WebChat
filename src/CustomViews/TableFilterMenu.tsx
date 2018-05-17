import * as React from 'react';
import { filter } from 'rxjs/operator/filter';
import { Column } from 'microsoft-adaptivecards';
import { TableProps } from './TableView';
import { Portal } from './Portal';

export enum SortDirection {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export interface ColumnState {
  contextOpened: boolean,
  filterValues?: string[],
  uniqueValues?: string[],
}

export interface TableFilterMenuProps {
  container: HTMLElement,
  sortDirection: SortDirection,
  columnState: ColumnState,
  onSortDirectionChanged: (newDirection: SortDirection) => void
  onColumnStateChanged: (newState: object) => void,
  onClose: () => void,
}

export interface TableFilterMenuState {
  position: Position,
  expanded: boolean,
  query: string,
  filteredValues: string[],
}

export interface Position {
  top: string,
  left: string,
}

export class TableFilterMenu extends React.Component<TableFilterMenuProps, TableFilterMenuState> {
  private dropDownContainer?: HTMLElement
  
  constructor(props: TableFilterMenuProps) {
    super(props)

    const {uniqueValues} = props.columnState

    this.dropDownContainer = null

    this.state = {
      expanded: true,
      position: this.getMenuPosition(props.container),
      query: '',
      filteredValues: uniqueValues
    }
  }

  windowClickHandler(event: any) {
    event.stopPropagation()
    this.props.onClose()
  }

  onStateChanged(newState: object, close: boolean = false) {
    const {onColumnStateChanged, onClose, columnState} = this.props
    // console.log('State changed', newState)
    onColumnStateChanged({...columnState, ...newState})
    if (close) {
      onClose()
    }
  }

  onFilterValueToggle(idx: number, value: boolean) {
    const {filterValues} = this.props.columnState
    const {filteredValues} = this.state
    const existingIdx: number = filterValues
      ? filterValues.indexOf(filteredValues[idx])
      : -1
    // console.log(idx, value, existingIdx)

    if (!value) {
      if (existingIdx === -1) {
        this.onStateChanged({
          filterValues: filterValues
            ? [...filterValues, filteredValues[idx]]
            : [filteredValues[idx]]
        })
      }
    }
    else {
      if (existingIdx > -1) {
        this.onStateChanged({
          filterValues: filterValues
            ? filterValues.filter((_: any, itemIdx: number) => itemIdx !== existingIdx)
            : []
        })
      }
    }
  }

  onFilterValueSelectAll() {
    const {filterValues} = this.props.columnState
    const {filteredValues} = this.state
    this.onStateChanged({
      filterValues: filterValues
        ? filterValues
          .filter((value: string) => filteredValues && filteredValues.indexOf(value) === -1)
        : [],
    })
  }

  onFilterValueClear() {
    const {filterValues} = this.props.columnState
    const {filteredValues} = this.state
    const newValues: string[] = filterValues
      ? [...filterValues, ...(filteredValues || [])]
      : filteredValues || []
    this.onStateChanged({
      filterValues: filterValues
        ? newValues
          .filter((value: string, idx: number) => newValues.indexOf(value) === idx)
        : newValues
    })
  }

  onSearchQueryChange(event: any) {
    const query: string = event.target.value.toLocaleLowerCase()
    const {uniqueValues} = this.props.columnState
    this.setState({
      query: event.target.value,
      filteredValues: uniqueValues
        .filter((value: string) => typeof(value) === 'string'
          && value.toLocaleLowerCase().indexOf(query) > -1)
    })
  }

  getMenuPosition(container: HTMLElement): Position {
    const rect: ClientRect = container && container.getBoundingClientRect
      ? container.getBoundingClientRect() : null
    return rect
      ? {
          top: `${rect.bottom}px`,
          left: `${rect.left}px`
        }
      : {
          top: '0px',
          left: '0px'
        }
  }

  componentWillReceiveProps(nextProps: TableFilterMenuProps) {
    if (nextProps.container !== this.props.container) {
      this.setState({position: this.getMenuPosition(nextProps.container)})
    }
    const {uniqueValues} = nextProps.columnState
    if (uniqueValues !== this.props.columnState.uniqueValues) {
      this.setState({
        filteredValues: uniqueValues,
        query: ''
      })
    }
    const {contextOpened} = nextProps.columnState
    if (contextOpened !== this.props.columnState.contextOpened) {
      this.setState({
        expanded: true,
        query: ''
      })
    }
  }
  
  render() {
    const {container, columnState, onSortDirectionChanged} = this.props
    const {filteredValues} = this.state

    if (!columnState.contextOpened) return null

    return (
      <Portal><div 
        onClick={(event: any) => this.windowClickHandler(event)}
        style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 200}}>
        <div
          style={this.state.position}
          className="table-dropdown" 
          ref={(element) => this.dropDownContainer = element}
          onClick={(event: any) => event.stopPropagation()}>
          <ul>
            <li onClick={() => onSortDirectionChanged(SortDirection.Ascending)}>Sort A → Z</li>
            <li onClick={() => onSortDirectionChanged(SortDirection.Descending)}>Sort Z → A</li>
            <li onClick={() => this.setState({expanded: !this.state.expanded})}>{this.state.expanded ? '▾' : '▸'} Filter by values...</li>
            {this.state.expanded && <div className="filter-values">
              <div>
                <div className="search-box">
                  <input 
                    type="search" 
                    onChange={(event: any) => this.onSearchQueryChange(event)} 
                    value={this.state.query} />
                  <div className="search-icon" />
                </div>
              </div>
              <div>
                <a href="javascript:void(0)" onClick={() => this.onFilterValueSelectAll()}>Select all</a> - 
                <a href="javascript:void(0)" onClick={() => this.onFilterValueClear()}>Clear</a>
              </div>
              <ul className="filter-values-list">
                {filteredValues && filteredValues
                  .map((value: string, idx: number) => {
                    const checked: boolean = columnState.filterValues
                      ? columnState.filterValues.indexOf(value) === -1
                      : true
                    return (
                      <li onClick={() => this.onFilterValueToggle(idx, !checked)}>
                        <label key={idx}>
                          <input 
                            type="checkbox" 
                            checked={checked}
                            onChange={() => this.onFilterValueToggle(idx, !checked)}
                            />
                          {value === "" ? "(Blanks)" : value}
                        </label>
                      </li>
                    )
                  })}
              </ul>
            </div>}
          </ul>
        </div>
      </div></Portal>
    )
  }
}