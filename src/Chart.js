import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["red", "orange", "yellow", "lime", "cyan"],
    datasets: [
      {
        data: [2, 1, 3, 4, 5],
        backgroundColor: [
          "#e6194b",
          "#f58231",
          "#ffe119",
          "#bcf60c",
          "#3cb44b"
        ],
        hoverBackgroundColor: [
          "#191970",
          "#191970",
          "#191970",
          "#191970",
          "#191970"
        ]
      }
    ]
  };

  return (
    <div className="chart-container">
      <h4>Broken Links Bar Chart</h4>
      <br />
      <Bar
        data={data}
        width={100}
        height={100}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
};

export default Chart;
