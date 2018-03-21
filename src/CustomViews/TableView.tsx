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

    const optionRows = data.length > 0
      ? data[0].map((item : string, idx : number) => typeof(item) === 'string' && item.startsWith('_')
        ? idx
        : null).filter((item : string) => item) // remove null items
      : []
    const hightlightIdx = data.findIndex((item : string) => item === '_highlight')

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {data.length > 0 && data[0]
              .filter((hcell : string, idx : number) => !optionRows.includes(idx))
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
                  className={hightlightIdx && trow[hightlightIdx] 
                    ? 'highlighted' 
                    : ''}>
                  {trow.map((cell : any, idx : number) => 
                  <td key={idx}>{<FormattedText text = {cell} />}</td>)}
              </tr>)
              .filter((hcell : string, idx : number) => !optionRows.includes(idx))}
          </tbody>
        </table>
      </div>
    );
  }
}