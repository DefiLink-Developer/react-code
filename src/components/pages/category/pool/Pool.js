import "./Pool.scss";

import React, { useEffect, useState } from "react";

import SortImg from "../../../../assets/images/sort.svg";
import SearchImg from "../../../../assets/images/search.svg";
import MiniLogo from "../../../../assets/images/mini-logo.svg";
import MoveArrow from "../../../../assets/images/move-arrow.svg";
import DarkBlue from "../../../../assets/images/dark-blue.png";
import LightCircle from "../../../../assets/images/light-circle.png";
import { dummyData } from "./dummyData";
import { NavLink } from "react-router-dom";

const Pool = () => {
  let tableStyle = {
    width: "250px",
  };

  const [originalTableData, setOriginalTableData] = useState(dummyData);

  const [pageSize, setPageSize] = useState(5);
  const [pageNo, setPageNo] = useState(0);

  let mod = originalTableData.length % pageSize;

  const [totalPage, setTotalPage] = useState(
    mod === 0
      ? parseInt(originalTableData.length / pageSize)
      : parseInt(originalTableData.length / pageSize) + 1
  );

  const [showTableData, setShowTableData] = useState([]);

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
            href="/#"
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

  useEffect(() => {
    // setPageSize(5);
    // setTotalPage(getTotalPage());
    gotoPaginationPage(0);
  }, []);

  return (
    <>
      <section className="inner-header">
        <h2 className="inner-heading">Wonderland Staking Pools</h2>
      </section>
      <div className="align-items-center d-flex inner-filter py-3 py-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-2 col-lg-3 col-sm-6 mb-2 mb-lg-0 pr-2 d-sm-none">
              <div className="dropdown d-block d-sm-none">
                <div
                  className="sort-xs dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img height="18" src={SortImg} alt="" />
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to="">
                    Action
                  </NavLink>
                  <NavLink className="dropdown-item" to="">
                    Another action
                  </NavLink>
                  <NavLink className="dropdown-item" to="">
                    Something else here
                  </NavLink>
                </div>
              </div>

              <div className="d-none d-sm-block dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle filter-field"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by: Hot
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to="">
                    Action
                  </NavLink>
                  <NavLink className="dropdown-item" to="">
                    Another action
                  </NavLink>
                  <NavLink className="dropdown-item" to="">
                    Something else here
                  </NavLink>
                </div>
                <span className="filter-icon mr-2">
                  <img height="18" src={SortImg} alt="" />
                </span>
                <span className="align-items-center d-flex filter-arrow">
                  <i class="fas fa-sort-down"></i>
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-9 mb-2 mb-lg-0 pl-2">
              <div className="dropdown">
                <input
                  className="btn btn-secondary filter-field"
                  placeholder="Search farms"
                />
                <span className="filter-icon">
                  <img height="24" src={SearchImg} alt="" />
                </span>
              </div>
            </div>

            <div className="align-items-center col-1 col-lg-9 col-sm-12 d-flex flex-wrap justify-content-between justify-content-lg-end">
              <div className="accordion align-items-center d-flex mb-0 mr-4">
                <label className="mr-3 switch mb-0 d-none d-sm-block">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="text-white d-none d-sm-block">
                  Staked only
                </span>
              </div>
              <div className="accordion align-items-center d-flex mb-0 mr-4">
                <label className="mr-3 switch mb-0 d-none d-sm-block">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="text-white d-none d-sm-block">WNDR only</span>
              </div>

              <div
                className="btn-group btn-group-toggle filters filter-btns  d-flex"
                data-toggle="buttons"
              >
                <label className="btn btn-secondary active">
                  <input type="radio" name="options" id="option1" checked />{" "}
                  Active
                </label>
                <label className="btn btn-secondary">
                  <input type="radio" name="options" id="option2" /> Inactive
                </label>
              </div>

              <div className="dropdown d-sm-none">
                <NavLink
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  to=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <i class="fas fa-ellipsis-v text-black dots-click"></i>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-right p-3">
                  <div className="accordion align-items-center d-flex mb-3 justify-content-between">
                    <label className="mr-3 switch mb-0">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <span className="">Staked only</span>
                  </div>
                  <div
                    className="btn-group btn-group-toggle filter-btns ml-0 ml-lg-4"
                    data-toggle="buttons"
                  >
                    <button className="btn btn-secondary active">
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        autocomplete="off"
                        checked=""
                      />{" "}
                      Live
                    </button>
                    <button className="btn btn-secondary disabled btn-xs-second">
                      <input
                        type="radio"
                        name="options"
                        id="option2"
                        autocomplete="off"
                      />{" "}
                      Finished
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="wonder-box-section inner-section-space mb-0">
          <div className="wonder-box shadow-sm">
            <div className="wonder-box-body mb-3">
              <div className="table-responsive">
                <table className="table table-borderless table-sm table-striped v-center">
                  <thead>
                    <tr>
                      <th style={tableStyle} scope="col">
                        TOKEN
                      </th>
                      <th scope="col">APR</th>
                      <th scope="col">TOTAL STAKED</th>
                      <th scope="col">EARNEND</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {showTableData.map((obj, idx) => {
                      return (
                        <>
                          <tr
                            className="cursor-pointer"
                            data-toggle="collapse"
                            data-target={"#collapseExample" + idx}
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            <td
                              scope="row"
                              className="d-flex align-items-center"
                            >
                              <div className="table-circle light-blue-circle">
                                <img height="34" src={MiniLogo} alt="" />
                              </div>
                              <img className="mx-2" src={MoveArrow} alt="" />
                              <div
                                className={
                                  obj.token.isLight === "false"
                                    ? "table-circle dark-blue-circle mr-4"
                                    : "table-circle light-circle mr-4"
                                }
                              >
                                <img
                                  height={
                                    obj.token.isLight === "true" ? "40" : "34"
                                  }
                                  src={obj.token.mainImg}
                                  alt=""
                                />
                              </div>
                              {obj.token.value}
                            </td>
                            <td>{obj.apr}</td>
                            <td>{obj.totalStaked}</td>
                            <td>{obj.earned}</td>
                            <td className="text-right">
                              <button className="btn btn-outline-primary btn-deflink">
                                Connect Wallet
                              </button>
                            </td>
                          </tr>
                          <tr className="hide-row">
                            <td colspan="5">
                              <div
                                className="collapse collapseExample"
                                id={"collapseExample" + idx}
                              >
                                <div className="d-flex mb-3">
                                  <div className="col-3">Ends in: </div>
                                  <div>{obj.expandedData.endTime}</div>
                                </div>
                                <div className="d-flex  mb-3">
                                  <div className="col-3">Total Staked:</div>
                                  <div>{obj.expandedData.totalStaked}</div>
                                </div>
                                <div className="d-flex  mb-3">
                                  <div className="col-3">Stake:</div>
                                  <div>
                                    <span className="text-theme f15 mb-0">
                                      {obj.expandedData.stake}
                                      <i class="fas fa-external-link-square-alt ml-2"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex  mb-3">
                                  <div className="col-3">Staked Value:</div>
                                  <div>{obj.expandedData.stakedValue}</div>
                                </div>
                                <div className="d-flex">
                                  <div className="col-3">Earned Value:</div>
                                  <div>{obj.expandedData.earnedValue}</div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}

                    {/* <tr
                      className="cursor-pointer"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <td scope="row" className="d-flex align-items-center">
                        <div className="table-circle light-blue-circle">
                          <img height="34" src={MiniLogo} />
                        </div>
                        <img className="mx-2" src={MoveArrow} />
                        <div className="table-circle dark-blue-circle mr-4">
                          <img height="34" src={DarkBlue} />
                        </div>
                        WNDR
                      </td>
                      <td>89.75%</td>
                      <td>$2.31M </td>
                      <td>-</td>
                      <td className="text-right">
                        <button className="btn btn-outline-primary btn-deflink">
                          Connect Wallet
                        </button>
                      </td>
                    </tr>
                    <tr className="hide-row">
                      <td colspan="5">
                        <div className="collapse" id="collapseExample">
                          <div className="d-flex mb-3">
                            <div className="col-3">Ends in: </div>
                            <div>13d, 17h, 28m </div>
                          </div>
                          <div className="d-flex  mb-3">
                            <div className="col-3">Total Staked:</div>
                            <div>29,300,475.305</div>
                          </div>
                          <div className="d-flex  mb-3">
                            <div className="col-3">Stake:</div>
                            <div>
                              <span className="text-theme f15 mb-0">
                                WNDR
                                <i class="fas fa-external-link-square-alt ml-2"></i>
                              </span>
                            </div>
                          </div>
                          <div className="d-flex  mb-3">
                            <div className="col-3">Staked Value:</div>
                            <div>$0.00</div>
                          </div>
                          <div className="d-flex">
                            <div className="col-3">Earned Value:</div>
                            <div>$0.00</div>
                          </div>
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-end">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pool;
