import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

const Chart = (props) => {
  return (
    <Bar
      data={props.data}
      height={400}
      width={100}
      options={{
        maintainAspectRatio: false,
        scale: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 222,
          },
        },
      }}
    />
  );
};

export default Chart;
