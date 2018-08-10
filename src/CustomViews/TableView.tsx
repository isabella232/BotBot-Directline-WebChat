import * as React from 'react';
import {TableFilterMenu, ColumnState, SortDirection} from './TableFilterMenu';
import {SizeState} from '../Store';
import {FormattedText} from '../FormattedText';
import * as Papa from 'papaparse';

const ExcelIcon = () => 
<svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" width="16" height="16">
  <g>
  <rect fill="#FFFFFF" height="17" width="11.5" x="12" y="3.5"/>
  <path d="M23.5,21h-10c-0.2763672,0-0.5-0.2236328-0.5-0.5s0.2236328-0.5,0.5-0.5H23V4h-9.5   C13.2236328,4,13,3.7763672,13,3.5S13.2236328,3,13.5,3h10C23.7763672,3,24,3.2236328,24,3.5v17   C24,20.7763672,23.7763672,21,23.5,21z" fill="#177848"/>
  <polygon fill="#177848" points="14,0 0,2.6086957 0,21.391304 14,24  "/>
  <polygon fill="#FFFFFF" opacity="0.2" points="0,2.6087036 0,2.8587036 14,0.25 14,0  "/>
  <rect fill="#177848" height="2" width="4" x="13" y="5"/>
  <rect fill="#177848" height="2" width="4" x="18" y="5"/>
  <rect fill="#177848" height="2" width="4" x="13" y="8"/>
  <rect fill="#177848" height="2" width="4" x="18" y="8"/>
  <rect fill="#177848" height="2" width="4" x="13" y="11"/>
  <rect fill="#177848" height="2" width="4" x="18" y="11"/>
  <rect fill="#177848" height="2" width="4" x="13" y="14"/>
  <rect fill="#177848" height="2" width="4" x="18" y="14"/>
  <rect fill="#177848" height="2" width="4" x="13" y="17"/>
  <rect fill="#177848" height="2" width="4" x="18" y="17"/>
  <polygon opacity="0.1" points="0,21.3912964 14,24 14,23.75 0,21.1412964  "/>
  <linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="9.5" x2="23.3536377" y1="7.5" y2="21.3536377">
  <stop offset="0" style={{stopColor:'#000000',stopOpacity:0.1}}/>
  <stop offset="1" style={{stopColor:'#000000',stopOpacity:0}}/>
  </linearGradient>
  <path d="M23.5,21c0.2763672,0,0.5-0.2236328,0.5-0.5V13L14,3v18H23.5z" fill="url(#SVGID_1_)"/>
  <polygon fill="#FFFFFF" points="7.357666,12.5 9.6552734,8.3642578 9.6262817,8.3481445 7.8796387,8.4729004 6.5,10.9562378    5.225647,8.6624756 3.5758667,8.7802734 5.642334,12.5 3.5758667,16.2197266 5.225647,16.3375244 6.5,14.0437622    7.8796387,16.5270996 9.6262817,16.6518555 9.6552734,16.6357422  "/>
  <linearGradient gradientTransform="matrix(60.9756088 0 0 60.9756088 20560.1210938 -26748.4140625)" gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="-337.1860046" x2="-336.9563904" y1="438.8707886" y2="438.8707886">
  <stop offset="0" style={{stopColor:"#FFFFFF"}}/>
  <stop offset="1" style={{stopColor:"#000000"}}/>
  </linearGradient>
  <path d="M14,0L0,2.6086957v18.782608L14,24V0z" fill="url(#SVGID_2_)" opacity="0.05"/>
  <linearGradient gradientUnits="userSpaceOnUse" id="SVGID_3_" x1="-1.5634501" x2="25.0453987" y1="5.9615331" y2="18.369442">
  <stop offset="0" style={{stopColor:"#FFFFFF",stopOpacity:0.2}}/>
  <stop offset="1" style={{stopColor:"#FFFFFF",stopOpacity:0}}/>
  </linearGradient><path d="M23.5,3H14V0L0,2.6087036v18.7825928L14,24v-3h9.5c0.2763672,0,0.5-0.2236328,0.5-0.5v-17   C24,3.2236328,23.7763672,3,23.5,3z" fill="url(#SVGID_3_)"/>
  </g>
</svg>

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
    // this.onContextMenu(null, idx, false)
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

  downloadCSV() {
    const {data} = this.props.channelData

    if (Object.prototype.toString.call(data) === '[object Array]'
        && data.length > 0) {
      const csvData = this.state.highlightIdx > -1
        ? data
          .map((row: any[]) => row.filter((_: any, colIdx: number) => colIdx !== this.state.highlightIdx))
        : data
      const unparsed = Papa.unparse(csvData)
      const filename = new Date().toLocaleTimeString() + '.csv'
      // Download
      const blob = new Blob([unparsed], {type: 'text/csv'});
      if(window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(blob, filename);
      }
      else {
          const elem = window.document.createElement('a');
          elem.href = window.URL.createObjectURL(blob);
          elem.download = filename;        
          document.body.appendChild(elem);
          elem.click();        
          document.body.removeChild(elem);
      }
    }
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
                  <div>
                    <FormattedText text={hcell} />
                    <button 
                      ref={(element: HTMLElement) => this.menuContainers[idx] = element}
                      onClick={(event: any) => this.onContextMenu(event, idx, true)}>
                      {columnStates[idx].filterValues && columnStates[idx].filterValues.length
                        ? (<svg width="8" height="8">
                            <g>
                              <path stroke="null" fill="#243A81" d="m3.07149,3.76966c0.08268,0.08997 0.12807,0.2075 0.12807,0.32909l0,3.58271c0,0.21562 0.26019,0.32505 0.4142,0.17346l0.99943,-1.14534c0.13374,-0.16049 0.2075,-0.23994 0.2075,-0.3988l0,-2.21123c0,-0.12158 0.0462,-0.23911 0.12807,-0.3291l2.86778,-3.11176c0.2148,-0.23344 0.04946,-0.61198 -0.2683,-0.61198l-7.07626,0c-0.31774,0 -0.48391,0.37773 -0.2683,0.61198l2.8678,3.11096l0,0l0.00001,0.00001z"/>
                            </g>
                          </svg>)
                        : '▾'}
                    </button>
                  </div>
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
        {fullLength > 10
        ? <div className={isExpanded ? '' : 'btn-overlay'}>
            <button type="button"
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
            </button>
            <button onClick={() => this.downloadCSV()}><ExcelIcon /> Download CSV</button>
         </div>
        : <button onClick={() => this.downloadCSV()}><ExcelIcon /> Download CSV</button>}
      </div>
    );
  }
}

function isArray(object: any) {
  return Object.prototype.toString.call(object) === '[object Array]'
}
