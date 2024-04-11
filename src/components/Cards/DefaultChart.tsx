import { AxisOptions, Chart } from 'react-charts';
import React from "react";

type MyDatum = { date: Date, stars: number };

function MyChart() {
    const data = [
        {
            label: 'React Charts',
            data: [
                { date: new Date('2024-04-01'), stars: 23467238 },
                { date: new Date('2024-04-02'), stars: 23467500 },
                { date: new Date('2024-04-03'), stars: 23467700 },
                { date: new Date('2024-04-04'), stars: 23467800 },
                { date: new Date('2024-04-05'), stars: 23468100 },
                { date: new Date('2024-04-06'), stars: 23468500 },
                { date: new Date('2024-04-07'), stars: 23468700 },
                { date: new Date('2024-04-08'), stars: 23468900 },
                { date: new Date('2024-04-09'), stars: 23469100 },
                { date: new Date('2024-04-10'), stars: 23469300 },
            ],
        },
    ];

    const primaryAxis = React.useMemo(
        (): AxisOptions<MyDatum> => ({
            getValue: datum => datum.date,
        }),
        []
    );

    const secondaryAxes = React.useMemo(
        (): AxisOptions<MyDatum>[] => [
            {
                getValue: datum => datum.stars,
            },
        ],
        []
    );

    return (
        <Chart
            options={{
                data,
                primaryAxis,
                secondaryAxes,
            }}
        />
    );
}
export default MyChart;
