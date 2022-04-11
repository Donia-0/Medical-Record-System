import React from "react";
import * as ReactDOM from "react-dom";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import "hammerjs";

const Viewbloodpreasure = () => {
  const [firstSeries, secondSeries] = [
    [1, 2, 3, 5],
    [1, 2, 3, 5],
  ];

  const ChartContainer = () => (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem type="bar" gap={2} data={firstSeries} />
        <ChartSeriesItem type="bar" data={secondSeries} />
      </ChartSeries>
    </Chart>
  );

  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem type="bar" spacing={0} data={firstSeries} />
        <ChartSeriesItem type="bar" data={secondSeries} />
      </ChartSeries>
    </Chart>
  );
};

export default Viewbloodpreasure;
