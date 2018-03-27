import * as React from 'react';
import {SizeState} from '../Store';
import {FormattedText} from '../FormattedText';

const TABLE_LIMIT = 10;

export interface TableProps {
  channelData : any,
  size : SizeState
}

export interface TableState {
  expanded: boolean,
}

export class TableView extends React.Component < TableProps, TableState > {
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }

  componentWillReceiveProps(nextProps: TableProps) {
    if (nextProps.channelData !== this.props.channelData) {
      this.setState({expanded: false})
    }
  }

  render() {
    const {data} = this.props.channelData;

    if (Object.prototype.toString.call(data) !== '[object Array]') 
      return <div></div>

    const highlightIdx = data.length > 0
      ? data[0].findIndex((item : string) => item === '_highlight')
      : -1
    const rowsData = 
      data && data.length > 1
      ? data.length < TABLE_LIMIT || this.state.expanded
        ? data.slice(1)
        : data.slice(1, 1 + TABLE_LIMIT)
      : null
    // console.log(data)
    
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {data.length > 0 && data[0]
              .filter((hcell : string, idx : number) => !(idx === highlightIdx))
              .map((hcell : string, idx : number) => 
                <th key={idx}>{<FormattedText text={hcell} />}</th>)}
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
                    .filter((cell : any, idx : number) => !(idx === highlightIdx))
                    .map((cell : any, idx : number) => 
                      <td key={idx}>{<FormattedText text = {String(cell)} />}</td>)}
              </tr>)}
          </tbody>
        </table>
        {(data.length + 1 > TABLE_LIMIT && !this.state.expanded) && 
          <div className="fade-overlay">
            <button type="button" onClick={() => this.setState({expanded: true})}>Show More</button>
          </div>}
      </div>
    );
  }
}