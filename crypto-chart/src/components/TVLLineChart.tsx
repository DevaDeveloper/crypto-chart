import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import ChartJS from "chart.js/auto";

ChartJS.register();

const TVLLineChart: FC<any> = ({ chartDataProps }) => {
  return (
    <Line
      data={chartDataProps}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "#fff",
            },
          },
        },
        scales: {
          y: {
            ticks: {
              color: "#4667a1",
              callback: (value) => {
                return `${value}`;
              },
            },
          },
          x: {
            ticks: {
              color: "#4667a0",
            },
          },
        },
      }}
    />
  );
};

export default TVLLineChart;
