import * as React from 'react';
import { SizeState } from '../Store';

export interface TableProps {
    channelData: any,
    size: SizeState,
}
class TableView extends React.Component<TableProps, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props.channelData;

        if (Object.prototype.toString.call(data) === '[object Array]') return <div></div>

        return (
            <div className="table-container">
                <table>
                    <tr>
                        {data.length > 0 && data[0].map((hcell, idx) => (<th key={idx}>{hcell}</th>))}
                    </tr>
                    {data.length > 1 &&
                    data.slice(1).map((trow, rownum) => 
                        <tr key={rownum}>
                            {
                                trow.map((cell, idx) => <td key={idx}>{cell}</td>)
                            }
                        </tr>
                    )}
                </table>
            </div>
        );
    }
}

export default TableView;