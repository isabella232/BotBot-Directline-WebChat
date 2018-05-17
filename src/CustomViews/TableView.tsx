import * as React from 'react';
import {TableFilterMenu, ColumnState, SortDirection} from './TableFilterMenu';
import {SizeState} from '../Store';
import {FormattedText} from '../FormattedText';
import { Column } from 'microsoft-adaptivecards';

export interface TableProps {
  channelData: any,
  size: SizeState
}

export interface TableState {
  expandState: ExpandState,
  columnStates?: ColumnState[],
  sortBy: number,
  sortDirection: SortDirection,
  highlightIdx: number,
}

export enum ExpandState {
  Collapsed = 0,
  Expand100 = 1,
  Expand1000 = 2,
  ShowAll = 3,
}

export class TableView extends React.Component < TableProps, TableState > {
  private menuContainers: HTMLElement[]
  
  constructor(props: TableProps) {
    super(props);
    this.state = this.deriveStateFromProps(props)
    this.menuContainers = this.state.columnStates
      ? this.state.columnStates.map((_: any) => null)
      : null
  }

  deriveStateFromProps(props: TableProps) {
    let columnStates: ColumnState[] = null, highlightIdx: number = -1
    const {data} = props.channelData

    if (Object.prototype.toString.call(data) === '[object Array]'
        && data.length > 0) {

      const rowData = data && data.length > 1
        ? data
            .slice(1)
            .map((row: any[]) => row.filter((_: any, colIdx: number) => colIdx !== highlightIdx))
        : null
      
      // Transpose
      const colData = data && data.length > 1
        ? rowData[0]
          .map((_: any, colIdx: number) => rowData.map((row: any[]) => row[colIdx]))
          .map((value: string) => value && typeof(value) === "string" ? value.trim() : value)
        : null
      
      // console.log(rowData)
      // console.log(colData)
      columnStates = data[0]
        .map((_: any, colIdx: number) => ({
          sortDirection: SortDirection.Unsorted,
          contextOpened: false,
          // Keep only unique values
          uniqueValues: colData
            ? colData[colIdx]
                .filter((value: any, idx: number) => colData[colIdx].indexOf(value) === idx)
                .sort(this.comparisonFunction)
            : null
        }))

      highlightIdx = data.length > 0 
        ? data[0].indexOf('_highlight')
        : -1
    }

    return {
      expandState: this.state && this.state.expandState || ExpandState.Collapsed,
      sortBy: -1,
      sortDirection: SortDirection.Unsorted,
      highlightIdx,
      columnStates,
    }
  }

  componentWillReceiveProps(nextProps: TableProps) {
    if (nextProps.channelData !== this.props.channelData) {
      const newState: TableState = this.deriveStateFromProps(nextProps)
      this.setState(newState)
      this.menuContainers = newState.columnStates
        ? this.state.columnStates.map((_: any) => null)
        : null
    }
  }

  onContextMenu(event: any, idx: number, open: boolean) {
    if (event) event.stopPropagation()
    const {columnStates} = this.state
    if (columnStates) {
      this.setState({
        columnStates: columnStates.map((value: ColumnState, colIdx: number) => {
          if (colIdx === idx) {
            return {...value, contextOpened: open}
          }
          else {
            return {...value, contextOpened: false}
          }
        })
      })
    }
  }

  onColumnStateChanged(idx: number, newState: object) {
    const {columnStates} = this.state
    // console.log('State change received', idx, newState)
    this.setState({
      columnStates: columnStates
        .map((value: ColumnState, colIdx: number) => colIdx === idx 
          ? newState as ColumnState 
          : value)
    })
  }

  onSortDirectionChanged(idx: number, newDirection: SortDirection) {
    this.onContextMenu(null, idx, false)
    this.setState({
      sortBy: idx,
      sortDirection: newDirection
    })
  }

  comparisonFunction(a: any, b: any, sortDirection: SortDirection = SortDirection.Ascending) {
    let comparison = 0
    if (typeof(a) === 'number' && typeof(b) === 'number') {
      comparison = a - b
    }
    else if (typeof(a) === 'string' && typeof(b) === 'string') {
      comparison = a.localeCompare(b)
    }
    else {
      if (a > b) {
        comparison = 1
      }
      else if (a < b) {
        comparison = -1
      }
    }

    return sortDirection === SortDirection.Descending
      ? -comparison
      : comparison
  }

  render() {
    const {data} = this.props.channelData
    const {expandState, highlightIdx, columnStates, sortBy, sortDirection} = this.state
    let tableLimit: number = 10
    let showMessage: string = 'Show Less'
    
    if (!isArray(data)) 
      return <div></div>
    
    let rowsData: any[] = data && data.length > 1
      ? data.slice(1)
      : null
    let isExpanded: boolean = false
    let fullLength = 0
    
    if (rowsData) {
      if (sortBy > -1 && sortDirection !== SortDirection.Unsorted) {
        rowsData = rowsData
          .sort((a: any[], b: any[]) => this.comparisonFunction(a[sortBy], b[sortBy], sortDirection))
      }

      if (columnStates.length) {
        for (let i: number = 0; i < columnStates.length; i++) {
          const filterValues = columnStates[i].filterValues
          if (filterValues && filterValues.length) {
            rowsData = rowsData
              .filter((row: any[]) => filterValues.indexOf(row[i]) === -1)
          }
        }
      }

      fullLength = rowsData.length
      isExpanded = fullLength <= 10 || this.state.expandState === ExpandState.ShowAll
      switch (expandState) {
        case ExpandState.Collapsed:
          tableLimit = 10; 
          showMessage = fullLength > 110 ? '+100 More Rows' : 'Show All'; break;
        case ExpandState.Expand100:
          tableLimit = 110; 
          showMessage = fullLength > 1110 ? '+1000 More Rows' : 'Show All'; break;
        case ExpandState.Expand1000:
          tableLimit = 1110; showMessage = 'Show All'; break;
        case ExpandState.ShowAll:
          tableLimit = 0; break;
        default:
          tableLimit = 10; break;
      }
      
      if (!isExpanded) {
        rowsData = rowsData.slice(0, tableLimit)
      }
    }
    
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {data.length && data[0]
              .map((hcell : string, idx : number) => 
                <th key={idx}>
                  <FormattedText text={hcell} />
                  <button 
                    ref={(element: HTMLElement) => this.menuContainers[idx] = element}
                    onClick={(event: any) => this.onContextMenu(event, idx, true)}>
                    {columnStates[idx].filterValues && columnStates[idx].filterValues.length
                      ? (<svg width="8" height="8">
                          <g>
                            <path stroke="null" fill="#243A81" id="svg_1" d="m3.07149,3.76966c0.08268,0.08997 0.12807,0.2075 0.12807,0.32909l0,3.58271c0,0.21562 0.26019,0.32505 0.4142,0.17346l0.99943,-1.14534c0.13374,-0.16049 0.2075,-0.23994 0.2075,-0.3988l0,-2.21123c0,-0.12158 0.0462,-0.23911 0.12807,-0.3291l2.86778,-3.11176c0.2148,-0.23344 0.04946,-0.61198 -0.2683,-0.61198l-7.07626,0c-0.31774,0 -0.48391,0.37773 -0.2683,0.61198l2.8678,3.11096l0,0l0.00001,0.00001z"/>
                          </g>
                        </svg>)
                      : '▾'}
                  </button>
                  <TableFilterMenu 
                    container={this.menuContainers[idx]}
                    columnState={columnStates[idx]}
                    sortDirection={idx === sortBy ? sortDirection : SortDirection.Unsorted}
                    onSortDirectionChanged={(newDirection: SortDirection) => this.onSortDirectionChanged(idx, newDirection)}
                    onColumnStateChanged={(newState: object) => this.onColumnStateChanged(idx, newState)}
                    onClose={() => this.onContextMenu(null, idx, false)}
                  />
                </th>)
              .filter((_ : any, idx : number) => !(idx === highlightIdx))}
            </tr>
          </thead>
          <tbody>
            {rowsData && rowsData
              .map((trow : any[], rownum : number) => 
                <tr 
                  key={rownum}
                  className={highlightIdx > -1 && trow[highlightIdx]
                    ? 'highlighted' 
                    : ''}>
                  {trow
                    .filter((_ : any, idx : number) => !(idx === highlightIdx))
                    .map((cell : any, idx : number) => 
                      <td key={idx}>{<FormattedText text = {String(cell)} />}</td>)}
              </tr>)}
          </tbody>
        </table>
        {!isExpanded && <div className="fade-overlay" />}
        {fullLength > 10 && 
        <button type="button" className={isExpanded ? '' : 'overlay'} 
          onClick={() => {
            let newState: ExpandState = ExpandState.Collapsed
            switch (expandState) {
              case ExpandState.Collapsed:
                newState = fullLength > 110 ? ExpandState.Expand100 : ExpandState.ShowAll
                break
              case ExpandState.Expand100:
                newState = fullLength > 1110 ? ExpandState.Expand1000 : ExpandState.ShowAll
                break
              case ExpandState.Expand1000:
                newState = ExpandState.ShowAll
                break
              case ExpandState.ShowAll:
                newState = ExpandState.Collapsed
              default:
                newState = ExpandState.Collapsed
            }
            this.setState({expandState: newState})
          }}>
          {showMessage}
        </button>}
      </div>
    );
  }
}

function isArray(object: any) {
  return Object.prototype.toString.call(object) === '[object Array]'
}
