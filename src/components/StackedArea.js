import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";

const StackedArea = () => {
  // Sample data
  const data = [
    { name: "A", x: 12, y: 23, z: 122 },
    { name: "B", x: 22, y: 3, z: 73 },
    { name: "C", x: 13, y: 15, z: 32 },
    { name: "D", x: 42, y: 35, z: 23 },
    { name: "E", x: 51, y: 45, z: 20 },
    { name: "F", x: 16, y: 25, z: 29 },
    { name: "G", x: 17, y: 17, z: 61 },
    { name: "H", x: 81, y: 32, z: 45 },
    { name: "I", x: 19, y: 43, z: 93 },
  ];

  return (
    <AreaChart width={1000} height={700} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Area
        type="monotone"
        dataKey="x"
        stackId="1"
        stroke="black"
        fill="black"
      />
      <Area type="monotone" dataKey="y" stackId="1" stroke="blue" fill="blue" />
      <Area
        type="monotone"
        dataKey="z"
        stackId="2"
        stroke="green"
        fill="green"
      />
    </AreaChart>
  );
};

export default StackedArea;
