import * as React from 'react';
import { SizeState } from '../Store';

export interface TableProps {
    channelData: any,
    size: SizeState,
}
export class TableView extends React.Component<TableProps, {}> {
    constructor() {
        super();
    }
    render() {
        const { data } = this.props.channelData;

        if (Object.prototype.toString.call(data) !== '[object Array]') return <div></div>

        return (
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {data.length > 0 && data[0].map((hcell: any, idx: number) => (<th key={idx}>{hcell}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                    {data.length > 1 &&
                    data.slice(1).map((trow: any[], rownum: number) => 
                        <tr key={rownum}>
                            {
                                trow.map((cell: any, idx: number) => <td key={idx}>{cell}</td>)
                            }
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}