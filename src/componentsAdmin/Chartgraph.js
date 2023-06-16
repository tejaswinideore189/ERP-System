import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Chartgraph.css";
import Circlegraph from "./Circlegraph";

function Chartgraph() {
  const [state] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      // {
      //   name: "series-1",
      //   data: [30, 40, 45, 50, 49, 60, 70, 91],
      // },
      // {
      //   name: "series-2",
      //   data: [35, 45, 50, 55, 89, 29, 69, 95],
      // },
      // {
      //   name: "series-3",
      //   data: [35, 45, 50, 55, 89, 29, 69, 95],
      // },
      {
        name: "series-4",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-5",
        data: [35, 45, 50, 55, 89, 29, 69, 95],
      },
    ],
  });
  return (
    <>
      <div class="container-fluid chart1">
        <div className="row">
          <div className="col-md-6">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="100%"
            />
          </div>
        </div>
      </div>
      <Circlegraph />
    </>
  );
}

export default Chartgraph;
