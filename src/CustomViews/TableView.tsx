import * as React from 'react';
import {SizeState} from '../Store';
import {FormattedText} from '../FormattedText';

export interface TableProps {
  channelData : any,
  size : SizeState
}
export class TableView extends React.Component < TableProps, {} > {
  constructor() {
    super();
  }
  render() {
    const {data} = this.props.channelData;

    if (Object.prototype.toString.call(data) !== '[object Array]') 
      return <div></div>

    const highlightIdx = data.length > 0
      ? data[0].findIndex((item : string) => item === '_highlight')
      : -1
    console.log(data)
    
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
            {data.length > 1 && data
              .slice(1)
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
      </div>
    );
  }
}