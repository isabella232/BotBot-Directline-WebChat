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

export enum DropdownDirection {
  Upwards = 0,
  Downwards = 1,
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
  expanded: boolean,
  query: string,
  listValues?: string[],
  filterValues?: string[],
}

export class TableFilterMenu extends React.Component<TableFilterMenuProps, TableFilterMenuState> {
  private dropDownContainer?: HTMLElement
  
  constructor(props: TableFilterMenuProps) {
    super(props)

    const {uniqueValues, filterValues} = props.columnState

    this.dropDownContainer = null

    this.state = {
      expanded: true,
      query: '',
      listValues: uniqueValues,
      filterValues
    }
  }

  windowClickHandler(event: any) {
    event.stopPropagation()
    this.props.onClose()
  }

  onStateChanged(newState: object, close: boolean = false) {
    const {onColumnStateChanged, columnState} = this.props
    // console.log('State changed', newState)
    onColumnStateChanged({
      ...columnState, ...newState, contextOpened: !close
    })
  }

  onFilterValueToggle(idx: number, value: boolean) {
    const {filterValues} = this.state
    const {listValues} = this.state
    const existingIdx: number = filterValues
      ? filterValues.indexOf(listValues[idx])
      : -1
    // console.log(idx, value, existingIdx)

    if (!value) {
      if (existingIdx === -1) {
        this.setState({
          filterValues: filterValues
            ? [...filterValues, listValues[idx]]
            : [listValues[idx]]
        })
      }
    }
    else {
      if (existingIdx > -1) {
        this.setState({
          filterValues: filterValues
            ? filterValues.filter((_: any, itemIdx: number) => itemIdx !== existingIdx)
            : []
        })
      }
    }
  }

  onFilterValueSelectAll() {
    const {listValues, filterValues} = this.state
    this.setState({
      filterValues: filterValues
        ? filterValues
          .filter((value: string) => listValues && listValues.indexOf(value) === -1)
        : []
    })
  }

  onFilterValueClear() {
    const {listValues, filterValues} = this.state
    const newValues: string[] = filterValues
      ? [...filterValues, ...(listValues || [])]
      : listValues || []
    this.setState({
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
      listValues: uniqueValues
        .filter((value: string) => typeof(value) === 'string'
          && value.toLocaleLowerCase().indexOf(query) > -1)
    })
  }

  getMenuPosition(container: HTMLElement) {
    const rect: ClientRect = container && container.getBoundingClientRect
      ? container.getBoundingClientRect() : null
    
    if (rect) {
      const screenHeight = window.innerHeight || document.documentElement.offsetHeight;

      if (rect.top > ((screenHeight / 2) + rect.height)) {
        return {
          style: {
            bottom: `${screenHeight - rect.top}px`,
            left: `${rect.left}px`
          },
          direction: DropdownDirection.Upwards
        }
      }
      else {
        return {
          style: {
            top: `${rect.bottom}px`,
            left: `${rect.left}px`
          },
          direction: DropdownDirection.Downwards
        }
      }
    }

    // Default
    return {
      style: {
        top: '0px',
        left: '0px'
      },
      direction: DropdownDirection.Downwards
    }
  }

  componentWillReceiveProps(nextProps: TableFilterMenuProps) {
    const {uniqueValues, filterValues} = nextProps.columnState
    if (uniqueValues !== this.props.columnState.uniqueValues) {
      this.setState({
        listValues: uniqueValues,
        query: '',
        filterValues,
      })
    }
    const {contextOpened} = nextProps.columnState
    if (contextOpened !== this.props.columnState.contextOpened) {
      this.setState({
        expanded: true,
        query: '',
      })
    }
  }

  handleOKClick() {
    this.onStateChanged({
      filterValues: this.state.filterValues
    }, true)
  }

  handleCancelClick() {
    this.setState({
      filterValues: this.props.columnState.filterValues
    })
    this.props.onClose()
  }
  
  render() {
    const {container, columnState, onSortDirectionChanged} = this.props
    const {listValues, filterValues} = this.state
    const menuPosition = this.getMenuPosition(container)

    if (!columnState.contextOpened) return null

    return (
      <Portal><div 
        onClick={(event: any) => this.windowClickHandler(event)}
        style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 200}}>
        <div
          style={menuPosition.style}
          className={`table-dropdown ${menuPosition.direction == DropdownDirection.Upwards && 'animation-upwards'}`}
          ref={(element) => this.dropDownContainer = element}
          onClick={(event: any) => event.stopPropagation()}>
          <ul>
            <li className="no-highlight">{/*clearfix, also floats for IE compatibility*/}
              <span style={{float: "right"}}>
              <button title="Sort A → Z" className="icon-button"
                onClick={() => onSortDirectionChanged(SortDirection.Ascending)}>
                <svg width="14" height="14">
                <g>
                  <path stroke="null" fill="#243A81" d="m0.81915,4.3334l7.79855,0l0,-1.54776l-7.79855,0c-0.42739,0 -0.77386,0.3465 -0.77386,0.77386c0,0.42739 0.3465,0.77391 0.77386,0.77391l0,0.00001l0,-0.00001z"/>
                  <path stroke="null" fill="#243A81" d="m0.81915,7.43909l7.79855,0l0,-1.54776l-7.79855,0c-0.42739,0 -0.77386,0.3465 -0.77386,0.77391c0,0.4274 0.3465,0.77386 0.77386,0.77386l0,0.00001l0,-0.00001z"/>
                  <path stroke="null" fill="#243A81" d="m0.81915,8.99698l0,0.00005c-0.42739,0 -0.77386,0.34645 -0.77386,0.77386s0.3465,0.77386 0.77386,0.77386l5.41785,0c-0.06121,-0.18847 -0.09351,-0.38728 -0.09351,-0.59122c0,-0.3415 0.08955,-0.66906 0.2568,-0.95658l-5.58113,0l-0.00001,0.00001l0,0.00001l0,0.00001z"/>
                  <path stroke="null" fill="#243A81" d="m13.69132,9.26155c-0.38217,-0.38219 -1.00182,-0.38219 -1.38405,0l-0.80355,0.80355l0,-8.36465c0,-0.54052 -0.43815,-0.97864 -0.97867,-0.97864s-0.97867,0.43815 -0.97867,0.97864l0,8.36465l-0.80355,-0.80355c-0.38219,-0.38217 -1.00182,-0.38219 -1.38405,0c-0.38219,0.38219 -0.38219,1.00182 0,1.38405l2.47407,2.47405c0.38144,0.38157 1.00187,0.38287 1.38434,0l2.47407,-2.47405c0.38217,-0.38219 0.38219,-1.00182 0,-1.38405l0.00001,0l0.00001,0l0.00001,0l0.00001,0z"/>
                </g>
                </svg>
              </button>
              <button title="Sort Z → A" className="icon-button"
                onClick={() => onSortDirectionChanged(SortDirection.Descending)}>
                <svg width="14" height="14">
                  <g>
                    <path stroke="null" fill="#243A81" d="m0.81915,9.81l7.79855,0l0,1.55037l-7.79855,0c-0.42739,0 -0.77386,-0.34708 -0.77386,-0.77516c0,-0.42811 0.3465,-0.77521 0.77386,-0.77521l0,-0.00001l0,0.00001z"/>
                    <path stroke="null" fill="#243A81" d="m0.81915,6.69908l7.79855,0l0,1.55037l-7.79855,0c-0.42739,0 -0.77386,-0.34708 -0.77386,-0.77521c0,-0.42812 0.3465,-0.77516 0.77386,-0.77516l0,-0.00001l0,0.00001z"/>
                    <path stroke="null" fill="#243A81" d="m0.81915,5.13857l0,-0.00005c-0.42739,0 -0.77386,-0.34704 -0.77386,-0.77516s0.3465,-0.77516 0.77386,-0.77516l5.41785,0c-0.06121,0.18879 -0.09351,0.38793 -0.09351,0.59222c0,0.34207 0.08955,0.67019 0.2568,0.95819l-5.58113,0l-0.00001,-0.00001l0,-0.00001l0,-0.00001z"/>
                    <path stroke="null" fill="#243A81" d="m13.69132,4.87355c-0.38217,0.38284 -1.00182,0.38284 -1.38405,0l-0.80355,-0.8049l0,8.37872c0,0.54142 -0.43815,0.98029 -0.97867,0.98029s-0.97867,-0.43889 -0.97867,-0.98029l0,-8.37872l-0.80355,0.8049c-0.38219,0.38281 -1.00182,0.38284 -1.38405,0c-0.38219,-0.38284 -0.38219,-1.00351 0,-1.38638l2.47407,-2.47821c0.38144,-0.38222 1.00187,-0.38352 1.38434,0l2.47407,2.47821c0.38217,0.38284 0.38219,1.00351 0,1.38638l0.00001,0l0.00001,0l0.00001,0l0.00001,0z"/>
                  </g>
                </svg>
              </button>
              </span>
              <span style={{float: "left", margin: "5px 0"}}>Sort items</span>
            </li>
            {/* <li onClick={() => onSortDirectionChanged(SortDirection.Ascending)}>Sort A → Z</li>
            <li onClick={() => onSortDirectionChanged(SortDirection.Descending)}>Sort Z → A</li> */}
            <li onClick={() => this.setState({expanded: !this.state.expanded})}>{this.state.expanded ? '▾' : '▸'} Filter by values...</li>
            {this.state.expanded && <div className="filter-values">
              <div>
                <div className="search-box">
                  <input 
                    type="search" 
                    onChange={(event: any) => this.onSearchQueryChange(event)} 
                    value={this.state.query} />
                  <div className="search-icon">
                    <svg width="12" height="12">
                      <g>
                        <path stroke="null" fill="#243A81" d="m11.59488,10.88009l-2.83676,-2.95681c0.72938,-0.86895 1.12901,-1.96226 1.12901,-3.10045c0,-2.65927 -2.15885,-4.82283 -4.81233,-4.82283s-4.81233,2.16356 -4.81233,4.82283s2.15885,4.82283 4.81233,4.82283c0.99615,0 1.94544,-0.30111 2.75704,-0.87272l2.85831,2.97925c0.11947,0.12435 0.28016,0.19291 0.45236,0.19291c0.16299,0 0.31761,-0.06228 0.43499,-0.17551c0.2494,-0.24051 0.25735,-0.63934 0.01737,-0.8895zm-6.52007,-9.62196c1.96134,0 3.55694,1.59908 3.55694,3.5647s-1.5956,3.5647 -3.55694,3.5647s-3.55694,-1.59908 -3.55694,-3.5647s1.5956,-3.5647 3.55694,-3.5647z"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <ul className="filter-values-list">
                {listValues && listValues
                  .map((value: string, idx: number) => {
                    const checked: boolean = filterValues
                      ? filterValues.indexOf(value) === -1
                      : true
                    const toggleFunction = () => this.onFilterValueToggle(idx, !checked)
                    return (
                      <li key={idx} onClick={toggleFunction}>
                        <label onClick={toggleFunction}>
                          <input 
                            type="checkbox" 
                            checked={checked}
                            onChange={toggleFunction}
                            placeholder="Search items..."
                            />
                          {value === "" ? "(Blanks)" : value}
                        </label>
                      </li>
                    )
                  })}
              </ul>
              <div className="bottom">
                <a href="javascript:void(0)" onClick={() => this.onFilterValueSelectAll()}>Select all</a>{' − '}
                <a href="javascript:void(0)" onClick={() => this.onFilterValueClear()}>Clear</a>
              </div>
              <div>
                <button className="primary" onClick={() => this.handleOKClick()}>OK</button>
                <button onClick={() => this.handleCancelClick()}>Cancel</button>
              </div>
            </div>}
          </ul>
        </div>
      </div></Portal>
    )
  }
}