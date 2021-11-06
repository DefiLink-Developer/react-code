import "./GovernanceDetail.scss";

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import BlueArrowIcon from "../../../../../assets/images/blue-arrow.svg";
import QUIcon from "../../../../../assets/images/qu.svg";
import RightLargeArrowIcon from "../../../../../assets/images/right-large-arrow.svg";
import RabbitIcon from "../../../../../assets/images/rabit.png";
import { dummyData } from "./dummyData";
import { NavLink } from "react-router-dom";
import CustomTable from "../../../../table/Table";

const GovernanceDetail = () => {
  let customStyle = {
    height: "216px",
  };

  //for chart options and data by mzk
  const [chartOption, setChartOption] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  const [originalTableData, setOriginalTableData] = useState(dummyData);
  const [showTableData, setShowTableData] = useState(originalTableData);

  const [pageSize, setPageSize] = useState(5);
  const [pageNo, setPageNo] = useState(0);

  const [totalPage, setTotalPage] = useState(0);

  const gotoPaginationPage = (pNo) => {
    let data = originalTableData.slice(
      pNo * pageSize,
      pNo * pageSize + pageSize
    );
    setPageNo(pNo);
    setShowTableData(data);
  };

  const getPaginationPages = (len) => {
    let array = [];
    for (let i = 0; i < len; i++) {
      const element = (
        <li className={pageNo === i ? "page-item active" : "page-item"}>
          <NavLink
            className="page-link"
            to=""
            onClick={(e) => {
              e.preventDefault();
              gotoPaginationPage(i);
            }}
          >
            {i + 1}
          </NavLink>
        </li>
      );

      array.push(element);
    }
    return array;
  };

  const getTotalPage = () => {
    debugger;
    let mod = originalTableData.length % pageSize;
    return mod === 0
      ? parseInt(originalTableData.length / pageSize)
      : parseInt(originalTableData.length / pageSize) + 1;
  };

  useEffect(() => {
    setChartOption({
      chart: {
        height: 185,
        width: 200,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
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
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Current Result"],
    });
    setChartSeries([51]);

    setOriginalTableData(dummyData);
    setPageSize(5);
    setTotalPage(getTotalPage());
    gotoPaginationPage(0);
  }, []);

  return (
    <>
      <section className="inner-header">
        <div className="container">
          <div className="d-flex align-items-center" style={customStyle}>
            <img className="cursor-pointer" src={BlueArrowIcon} alt="" />
            <h2 className="inner-heading">Voting For: Swap Fee</h2>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="wonder-box-section inner-section-space mb-0 pb-0">
          <div className="row">
            <div className="col-md-8 order-2 order-sm-1">
              <div className="card  mb-4">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="chart-card mr-3">
                      <Chart
                        options={chartOption}
                        series={chartSeries}
                        type="radialBar"
                        height={185}
                        width={200}
                      />
                    </div>
                    <div>
                      <small className="text-muted fs-16">Total Votes </small>
                      <h4 className="heading-default fs-20 pb-2">
                        1465859.3631{" "}
                      </h4>
                      <small className="text-muted fs-16 mt-4">
                        Addresses{" "}
                      </small>
                      <h4 className="heading-default fs-20">674 </h4>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="align-items-center d-flex graphic-medium mb-4 mt-5">
                {" "}
                <img className="mr-2" src={QUIcon} alt="" />
                What is Swap Fee
              </h5>
              <p className="text-normal">
                The swap fee is a fixed fee charged on each swap trade on the
                protocol.
              </p>
              <p className="text-normal">
                Votes are counted, and a parameter’s value is changed gradually
                during DecayTime after voting. Liquidity providers can change
                default values separately for each pool. They are determined by
                liquidity providers using a similar voting system. You can vote
                or change your vote at any time.
              </p>
            </div>
            <div className="col-md-4 order-1 order-sm-2 ">
              <div className="card card-dark mb-3">
                <div className="align-items-center card-header border-0 d-flex justify-content-between text-white pb-1">
                  <h3 className="heading-default text-white mb-0 fs-20">
                    Voting
                  </h3>
                  <small className="text-blue">Rest</small>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between py-2 px-3 rounded text-white value-card">
                    <div className="mr-3">
                      <small className="fs-10">Current Value</small>
                      <h4 className="fs-20 text-white">0.36%</h4>
                    </div>
                    <img src={RightLargeArrowIcon} alt="" />
                    <div>
                      <small className="fs-10">
                        New Value (applied in 24h)
                      </small>
                      <h4 className="fs-20 text-white">0.36%</h4>
                    </div>
                  </div>
                  <form className="mt-30">
                    <input
                      type="range"
                      className="form-control-range custom-control-range"
                      id="formControlRange"
                    />
                    <div className="d-flex text-white justify-content-between mt-3">
                      <small className="fs-10">0%</small>
                      <small className="fs-10">1%</small>
                    </div>
                  </form>
                  <div className="dark-input input-group mb-3 mt-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Custom value"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        %
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary btn-block text-white mt-30">
                    Connect Wallet
                  </button>
                  <div className="d-flex justify-content-between text-white mt-4">
                    <small>Voting Balance</small>
                    <small>--</small>
                  </div>
                  <div className="d-flex justify-content-between text-white mt-3">
                    <small>Voting Power</small>
                    <small>--</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wonder-box-section inner-section-space mb-0">
          <h5 className="graphic-bold mb-3">Votes</h5>
          <div className="wonder-box shadow-sm">
            <div className="wonder-box-body mb-3">
              <CustomTable type="governance_detail" data={dummyData} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GovernanceDetail;
