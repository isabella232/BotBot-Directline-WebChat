import * as React from 'react';
import {TableFilterMenu, ColumnState, SortDirection} from './TableFilterMenu';
import {SizeState} from '../Store';
import {FormattedText} from '../FormattedText';
import { Column } from 'microsoft-adaptivecards';

const TABLE_LIMIT = 10;

export interface TableProps {
  channelData: any,
  size: SizeState
}

export interface TableState {
  expanded: boolean,
  columnStates?: ColumnState[],
  sortBy: number,
  sortDirection: SortDirection,
  highlightIdx: number,
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
        ? data[0].findIndex((item : string) => item === '_highlight') 
        : -1
    }

    return {
      expanded: false,
      sortBy: -1,
      sortDirection: SortDirection.Unsorted,
      highlightIdx,
      columnStates
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
    const {highlightIdx, columnStates, sortBy, sortDirection} = this.state

    if (!isArray(data)) 
      return <div></div>
    
    let rowsData: any[] = data && data.length > 1
      ? data.slice(1)
      : null
    let isExpanded: boolean = false
    
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
              .filter((row: any[]) => filterValues.findIndex((v: any) => v === row[i]) === -1)
          }
        }
      }

      isExpanded = rowsData.length < TABLE_LIMIT || this.state.expanded
      if (!isExpanded) {
        rowsData = rowsData.slice(0, TABLE_LIMIT)
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
                    ▾
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
        {rowsData.length >= TABLE_LIMIT && <button type="button" className={isExpanded ? '' : 'overlay'} onClick={() => this.setState({expanded: !this.state.expanded})}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>}
      </div>
    );
  }
}

function isArray(object: any) {
  return Object.prototype.toString.call(object) === '[object Array]'
}
