import "./Chart.scss";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CustomChart = (props) => {
  const [chartOption, setChartOption] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    setChartOption({
      chart: {
        // height: 185,
        // width: 200,
        type: props.type,
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            total: {
              show: true,
              label: "Current Result",
            },
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: undefined,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "solid",
        colors: [props.color],
      },
      color: props.color,
      stroke: {
        dashArray: 4,
      },
      labels: ["Current Result"],
    });

    setChartSeries([67]);
  }, []);
  return (
    <>
      <Chart
        options={chartOption}
        series={chartSeries}
        type="radialBar"
        // height={185}
        // width={200}
      />
    </>
  );
};

export default CustomChart;
