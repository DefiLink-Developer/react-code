import React, { useState } from "react";
import Chart from "react-google-charts";

const AreaChart = (props) => {
  debugger;
  const [data, setData] = useState(props.data);

  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="AreaChart"
      loader={
        <div className="chart-loader">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      }
      data={props.data}
      options={{
        title: "Hedge Funds",
        vAxis: {
          minValue: 0,
          gridlines: {
            color: "transparent",
          },
        },
        chartArea: { width: "100%", height: "100%" },
        legend: "none",
        colors: ["silver"],
      }}
    />
  );
};

export default AreaChart;
