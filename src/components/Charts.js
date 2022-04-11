import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
// import {
//   // main component
//   Chart,
//   // graphs
//   Bars,
//   Cloud,
//   Dots,
//   Labels,
//   Lines,
//   Pies,
//   RadialLines,
//   Ticks,
//   Title,
//   // wrappers
//   Layer,
//   Animate,
//   Transform,
//   Handlers,
//   // helpers
//   helpers,
//   DropShadow,
//   Gradient,
// } from "rumble-charts";

const Charts = () => {
  // const series = [
  //   {
  //     data: [1, 2, 3],
  //   },
  //   {
  //     data: [5, 7, 11],
  //   },
  //   {
  //     data: [13, 17, 19],
  //   },
  // ];

  // return (
  //   <>
  //     <Chart width={600} height={250} series={series} minY={0} maxY={20}>
  //       <Bars innerPadding={5} groupPadding={10} />
  //       <Lines />
  //       <Dots />
  //     </Chart>
  //     ;
  //   </>
  // );
  const data = [
    { name: "A", x: 12, y: 23, z: 122 },
    { name: "B", x: 22, y: 3, z: 73 },
    { name: "C", x: 13, y: 15, z: 32 },
    { name: "D", x: 44, y: 35, z: 23 },
    { name: "E", x: 35, y: 45, z: 20 },
    { name: "F", x: 62, y: 25, z: 29 },
    { name: "G", x: 37, y: 17, z: 61 },
    { name: "H", x: 28, y: 32, z: 45 },
    { name: "I", x: 19, y: 43, z: 93 },
  ];

  return (
    <BarChart width={500} height={500} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="x" stackId="a" fill="#8884d8" />
      <Bar dataKey="y" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
};

export default Charts;
