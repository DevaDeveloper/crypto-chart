import React, { FC } from "react";
import { Bar } from "react-chartjs-2";
import ChartJS from "chart.js/auto";

ChartJS.register();

const BarChart: FC<any> = ({ chartDataProps }) => {
  return (
    <Bar
      data={chartDataProps}
      options={{
        scales: {
          x: {
            ticks: {
              color: "#fff",
            },
          },
          y: {
            ticks: {
              color: "#fff",
              callback: (value) => {
                return `${value}`;
              },
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
