import * as React from 'react';
import { visualization } from './google-charts';
import { SizeState } from '../Store';

export interface ChartProps {
    channelData: any,
    size: SizeState,
}
export class ChartView extends React.Component<ChartProps, {}> {
    private root: HTMLDivElement;

    constructor() {
        super();
    }

    componentDidMount() {
        visualization().then(() => this.drawChart());
    }

    drawChart() {
        // console.log("Drawing chart");
        const google = window.google;
        const { data } = this.props.channelData;

        let chartData = [];
        let chartOptions = {}
        let chart = null;
        switch (this.props.channelData.name) {
            case "datachart.txn":
                chartData = new google.visualization.DataTable();
                chartData.addColumn('string', 'Product');
                chartData.addColumn('number', 'Total');
                chartData.addRows(data.map((item: any) => [item.product, item.total]))

                chartOptions = {
                    sliceVisibilityThreshold: 0,
                    width: 800,
                    height: 350,
                    colors: ['#1997cc', '#97cc19', '#cc193e', '#19cca8', '#cc1997', '#e9c949', '#18ce88', '#9e18ce', '#bfbfbf'],
                };

                chart = new google.visualization.PieChart(this.root);
                break;

            case "datachart.capmas":
                chartData = new google.visualization.DataTable();
                chartData.addColumn('string', 'Strategy');
                chartData.addColumn('number', 'Capital Request');
                chartData.addRows(data.map((item: any) => [item.strategy, item.capitalRequest]))
                
                chartOptions = {
                    width: 800,
                    height: 350,
                    bar: {groupWidth: "95%"},
                    colors: ['#1997cc'],
                    legend: { position: "none" },
                };

                chart = new google.visualization.ColumnChart(this.root);
                break;

            default:
                break;
        }

        if (chart) chart.draw(chartData, chartOptions);
    }
    render() {
        const { data } = this.props.channelData;

        return (
            <div ref={ div => this.root = div } className="chart-container">
            </div>
        )
    }
}