import React, { useEffect, useState } from "react";
import "./Table.scss";

import RabbitIcon from "../../assets/images/rabit.png";
import Gear from "../../assets/images/gear.svg";
import MiniLogo from "../../assets/images/mini-logo.svg";
import LeftArrow from "../../assets/images/left-arrow-icon.svg";
import GasIcon from "../../assets/images/gas-icon.svg";
import PinIcon from "../../assets/images/pin.svg";
import GreenArrowIcon from "../../assets/images/green-arrow.png";
import RedArrowIcon from "../../assets/images/red-arrow.png";
import QUIcon from "../../assets/images/qu.svg";
import InfoIcon from "../../assets/images/info.svg";

// ******************************************

import LogoCircle from "../../assets/images/logo-circle.svg";
import QIcon from "../../assets/images/q-icon.svg";
import SortIcon from "../../assets/images/sort.svg";
import SGrayIcon from "../../assets/images/search-gray.svg";
import UnionIcon from "../../assets/images/Union.svg";
import UBlueIcon from "../../assets/images/Union-blue.svg";

import HeartIcon from "../../assets/images/heart.svg";
import HFillIcon from "../../assets/images/heart-fill.svg";
import CommentIcon from "../../assets/images/comment.svg";
import CrossIcon from "../../assets/images/cross.svg";

import DBlueIcon from "../../assets/images/dark-blue.png";
import LCircleIcon from "../../assets/images/light-circle.png";
import YCircleIcon from "../../assets/images/yellow-cirlce.png";
import RabitIcon from "../../assets/images/rabit.png";
import MickeyIcon from "../../assets/images/mickey.png";
import BinanceIcon from "../../assets/images/binance.png";

//************************************** */

const CustomTable = (props) => {
  const [originalTableData, setOriginalTableData] = useState(props.data);

  const [pageSize, setPageSize] = useState(5);
  const [pageNo, setPageNo] = useState(0);

  let mod = originalTableData.length % pageSize;

  const [totalPage, setTotalPage] = useState(
    mod === 0
      ? parseInt(originalTableData.length / pageSize)
      : parseInt(originalTableData.length / pageSize) + 1
  );

  const [showTableData, setShowTableData] = useState(
    originalTableData.slice(0 * pageSize, 0 * pageSize + pageSize)
  );

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
          <a
            className="page-link"
            href="javascript:void(0);"
            onClick={(e) => {
              e.preventDefault();
              gotoPaginationPage(i);
            }}
          >
            {i + 1}
          </a>
        </li>
      );

      array.push(element);
    }
    return array;
  };

  const addTablePagination = () => {
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link page-no"
              tabIndex="-1"
              onClick={() => {
                gotoPaginationPage(pageNo - 1);
              }}
              disabled={pageNo === 0}
            >
              <i class="fas fa-chevron-left"></i>
            </button>
          </li>

          {getPaginationPages(totalPage)}
          <li className="page-item">
            <button
              className="page-link page-no"
              onClick={() => {
                gotoPaginationPage(pageNo + 1);
              }}
              disabled={pageNo === totalPage - 1}
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  if (props.type === "governance") {
    return (
      <>
        {" "}
        <div className="table-responsive">
          <table className="table table-borderless table-sm table-striped">
            <thead>
              <tr>
                <th width="250" scope="col">
                  ADDRESS
                </th>
                <th scope="col"></th>
                <th width="200" scope="col">
                  VOTES
                </th>
                <th width="200" scope="col">
                  VOTING POWER
                </th>
              </tr>
            </thead>
            <tbody>
              {showTableData.map((obj, idx) => {
                return (
                  <tr>
                    <td width="650" className="d-flex align-items-center">
                      <div className="">
                        <img src={RabbitIcon} alt="" />
                      </div>
                      <a href="/#" className="text-black f12 mb-0 ml-3">
                        {obj.address}
                        <i class="fas fa-external-link-square-alt fs-15 ml-3"></i>
                      </a>
                    </td>
                    <td className="text-green">
                      <img
                        className="mr-2"
                        src={
                          obj.color.isSuccess === "true"
                            ? GreenArrowIcon
                            : RedArrowIcon
                        }
                        alt=""
                      />
                      {obj.color.value}
                    </td>
                    <td>{obj.votes}</td>
                    <td>{obj.voting_power}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end">{addTablePagination()}</div>{" "}
      </>
    );
  }

  if (props.type === "governance_detail") {
    return (
      <>
        <div className="table-responsive">
          <table className="table table-borderless table-sm table-striped">
            <thead>
              <tr>
                <th width="250" scope="col">
                  ADDRESS
                </th>
                <th width="200" scope="col">
                  VOTE FOR
                </th>
                <th width="200" scope="col">
                  VOTES
                </th>
              </tr>
            </thead>
            <tbody>
              {showTableData.map((obj, idx) => {
                return (
                  <tr>
                    <td width="650" className="d-flex align-items-center">
                      <div className="">
                        <img src={RabbitIcon} alt="" />
                      </div>
                      <a href="/#" className="text-black f12 mb-0 ml-3">
                        {obj.address}
                        <i class="fas fa-external-link-square-alt fs-15 ml-3"></i>
                      </a>
                    </td>
                    <td>{obj.voteFor}</td>
                    <td>{obj.votes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end">{addTablePagination()}</div>
      </>
    );
  }

  if (props.type === "fund") {
    let tableHeaderCenter = {
      textAlign: "center",
    };
    return (
      <>
        <div className="table-responsive">
          <table className="table table-borderless data-center table-sm table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" width="50px">
                  RANK
                  <img alt="" className="ml-1 mr-2 d-block" src={QIcon} />
                </th>
                <th scope="col" width="50px">
                  SCORE
                  <img alt="" className="ml-1 mr-2 d-block" src={QIcon} />
                </th>
                <th scope="col">NETWORK</th>
                <th scope="col">POOL</th>
                <th scope="col">MANAGER</th>
                <th scope="col">
                  TOTAL VALUE
                  <br />
                  MANAGED
                </th>
                <th scope="col">
                  PERFORMANCE
                  <table className="table head-center table-borderless mb-0">
                    <thead>
                      <tr>
                        <th className="pl-0">1D</th>
                        <th>1W</th>
                        <th>1M</th>
                        <th>3M</th>
                        <th>6M</th>
                        <th>LIFETIME</th>
                      </tr>
                    </thead>
                  </table>
                </th>
                <th style={tableHeaderCenter}>
                  RISK FACTOR
                  <img alt="" className="d-block m-auto" src={QIcon} />
                </th>
              </tr>
            </thead>
            <tbody>
              {showTableData.map((obj, idx) => {
                return (
                  <tr>
                    <td>
                      <i
                        className={
                          obj.isStar === "true"
                            ? "fas fa-star text-yellow"
                            : "fas fa-star text-gray"
                        }
                      ></i>
                    </td>
                    <td>{obj.rank}</td>
                    <td>{obj.score}</td>
                    <td>
                      <img alt="" height="32" src={obj.network} />
                    </td>
                    <td>{obj.pool}</td>
                    <td className="d-flex align-items-center" scope="row">
                      <img
                        alt=""
                        className="mr-2"
                        height="33"
                        src={obj.manager.mainImg}
                      />
                      {obj.manager.text}
                      <img
                        alt=""
                        className="ml-1"
                        height="14"
                        src={obj.manager.subImg}
                      />
                    </td>
                    <td>{obj.totalValue}</td>
                    <td scope="col">
                      <table
                        className={
                          idx % 2 === 0
                            ? "table table-borderless table-green mb-0"
                            : "table table-borderless table-white mb-0"
                        }
                      >
                        <tbody>
                          {obj.performance.map((item) => {
                            return (
                              <tr>
                                <td className="pl-0 text-red">{item.oneDay}</td>
                                <td className="text-green">{item.oneWeek}</td>
                                <td className="text-red">{item.oneMonth}</td>
                                <td className="text-green">
                                  {item.threeMonth}
                                </td>
                                <td className="text-green">{item.sixMonth}</td>
                                <td className="text-green">{item.lifetime}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </td>
                    <td className="text-right text-yellow">{obj.riskFactor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end mt-3">
          {addTablePagination()}
        </div>
      </>
    );
  }
};

export default CustomTable;
