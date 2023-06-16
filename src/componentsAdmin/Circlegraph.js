import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Circlegraph() {
  const [state] = useState({
    series: [44, 55, 13],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div id="chart">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="pie"
              width={400}
            />
          </div>
        </div>
        <div className="col-md-6">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            width={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Circlegraph;
