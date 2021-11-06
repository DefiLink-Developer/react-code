import "./Governance.scss";
import React, { useState } from "react";
import CustomChart from "../../../chart/Chart";

import Gear from "../../../../assets/images/gear.svg";
import MiniLogo from "../../../../assets/images/mini-logo.svg";
import LeftArrow from "../../../../assets/images/left-arrow-icon.svg";
import GasIcon from "../../../../assets/images/gas-icon.svg";
import PinIcon from "../../../../assets/images/pin.svg";
import GreenArrowIcon from "../../../../assets/images/green-arrow.png";
import RedArrowIcon from "../../../../assets/images/red-arrow.png";
import QUIcon from "../../../../assets/images/qu.svg";
import InfoIcon from "../../../../assets/images/info.svg";
import RabbitIcon from "../../../../assets/images/rabit.png";

import { dummyData } from "./dummyData";
import CustomTable from "../../../table/Table";
import Card from "./card/Card";
import { NavLink } from "react-router-dom";

const Governance = () => {
  const [isSettingShow, setIsSettingShow] = useState(false);
  return (
    <>
      <section className="inner-header">
        <h2 className="inner-heading">Governance</h2>
      </section>

      <div className="container">
        <section className="wonder-box-section inner-section-space mb-0">
          <div className="row">
            <div className="col-md-8 order-2 order-sm-1">
              <div className="row">
                <Card
                  chartColor="#FFD700"
                  chartType="radialBar"
                  chartData={[67]}
                  mainHeading="Swap Fee"
                  totalVotes="1465859.3631"
                  address="674"
                />
                <Card
                  chartColor="#4169e1"
                  chartType="radialBar"
                  chartData={[64]}
                  mainHeading="Referral Reward"
                  totalVotes="1465859.3631"
                  address="674"
                />

                <Card
                  chartColor="#4169e1"
                  chartType="radialBar"
                  chartData={[61]}
                  mainHeading="Referral Reward"
                  totalVotes="1465859.3631"
                  address="674"
                />

                <Card
                  chartColor="#4169e1"
                  chartType="radialBar"
                  chartData={[67]}
                  mainHeading="Planet Earth Fund"
                  totalVotes="1465859.3631"
                  address="674"
                />
                <Card
                  chartColor="#FFD700"
                  chartType="radialBar"
                  chartData={[67]}
                  mainHeading="Referral Reward"
                  totalVotes="1465859.3631"
                  address="674"
                />

                <Card
                  chartColor="#000"
                  chartType="radialBar"
                  chartData={[67]}
                  mainHeading="Insurance Fund"
                  totalVotes="1465859.3631"
                  address="674"
                />
              </div>
            </div>
            <div className="col-md-4 order-1 order-sm-2 ">
              {isSettingShow ? (
                <div className="card card-dark">
                  <div className="align-items-center card-header d-flex justify-content-between text-white">
                    <img
                      onClick={(e) => {
                        setIsSettingShow(false);
                      }}
                      className="cursor-pointer"
                      src={LeftArrow}
                      alt=""
                    />
                    <h3 className="heading-default text-white mb-0">
                      Settings
                    </h3>
                    <small className="">Rest</small>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center text-white mb-3">
                      <img className="mr-3" src={GasIcon} alt="" />
                      <h5 className="mb-0 fs-20 mr-2">Gas Price</h5>
                      <img src={PinIcon} alt="" />
                      <div className="ml-auto">
                        <select className="form-control form-control-sm custom-option no-appearance">
                          <option>High (20 Gwei)</option>
                          <option>Low (10 Gwei)</option>
                        </select>
                      </div>
                    </div>
                    <div class="card darker mt-2">
                      <ul
                        class="nav nav-pills setting-pills nav-justified p-2 no-wrap"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link"
                            data-toggle="pill"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            {" "}
                            25 <br /> Low
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link active"
                            data-toggle="pill"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            15 <br /> Medium
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link"
                            data-toggle="pill"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            {" "}
                            20 <br /> High
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <span
                            contentEditable="true"
                            class="nav-link editable"
                          >
                            {" "}
                            100%
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card card-dark mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="tabs-dark">
                        <ul
                          className="nav nav-pills"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              id="pills-home-tab"
                              data-toggle="pill"
                              href="#pills-home"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              Stake Token
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              id="pills-profile-tab"
                              data-toggle="pill"
                              href="#pills-profile"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              Unstake Token
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="dark-box"
                        onClick={(e) => {
                          setIsSettingShow(true);
                        }}
                      >
                        <img src={Gear} alt="" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between text-white mt-4">
                      <small className="fs-10">Enter Amount</small>
                      <small className="fs-10">Balance: 0</small>
                    </div>
                    <div className="card darker mt-2">
                      <div className="card-body">
                        <div className="d-flex align-items-center text-white mb-3">
                          <div className="table-circle light-blue-circle mr-3">
                            <img height="34" src={MiniLogo} alt="" />
                          </div>
                          <h5 className="mb-0">WNDR</h5>
                          <span className="fs-20 mx-3 text-muted">|</span>
                          <h5 contenteditable="true" className="mb-0 editable">
                            {" "}
                            1.0
                          </h5>
                          <div className="ml-auto">≈ $2.57</div>
                        </div>
                        <ul
                          className="nav nav-pills mb-3 token-btn nav-justified mt-35"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              data-toggle="pill"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="false"
                            >
                              {" "}
                              25%
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              data-toggle="pill"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="true"
                            >
                              50%
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              data-toggle="pill"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                            >
                              {" "}
                              75%
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              data-toggle="pill"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                            >
                              {" "}
                              100%
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary btn-block text-white mt-35">
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
              )}

              <div className="row mt-4 mb-sm-0 mb-4">
                <div className="col-md-6">
                  <small>Voting Addresses</small>
                  <h3 className="heading-default">9,035</h3>
                  <div className="small">
                    <img className="mr-2" src={GreenArrowIcon} alt="" />
                    <span className="text-green">+10.4% </span>
                    <span className="text-red">vs last week</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <small>Staked Tokens</small>
                  <h3 className="heading-default">9,521,141.098</h3>
                  <div className="small">
                    <img className="mr-2" src={GreenArrowIcon} alt="" />
                    <span className="text-green">-2.3% </span>
                    <span className="text-red">vs last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wonder-box-section inner-section-space mb-0">
          <div className="row">
            <div className="col-md-6">
              <h5 className="align-items-center d-flex graphic-medium">
                {" "}
                <img className="mr-2" src={QUIcon} alt="" />
                What is Governance
              </h5>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, pro primis nostro eloquentiam ei, et
                vix petentium eloquentiam. An mea libris scribentur. Te mei
                dolores torquatos mnesarchum, labore dignissim mnesarchu{" "}
                <a className="text-reset fw-bold text-underline" href="/#">
                  more
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="align-items-center d-flex graphic-medium">
                {" "}
                <img className="mr-2" src={InfoIcon} alt="" />
                How it Works
              </h5>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, pro primis nostro eloquentiam ei, et
                vix petentium eloquentiam. An mea libris scribentur. Te mei
                dolores torquatos mnesarchum, labore dignissim mnesarchum cu
                sit,{" "}
                <a className="text-reset fw-bold text-underline" href="/#">
                  more
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="wonder-box-section inner-section-space mb-0">
          <h5 className="graphic-bold mb-3">Top Addresses by Voting Power</h5>
          <div className="wonder-box shadow-sm">
            <div className="wonder-box-body mb-3">
              <CustomTable type="governance" data={dummyData} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Governance;
