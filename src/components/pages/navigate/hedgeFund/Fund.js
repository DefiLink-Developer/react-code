import "./Fund.scss";
import Card from "./card/Card";
import LogoCircle from "../../../../assets/images/logo-circle.svg";
import QIcon from "../../../../assets/images/q-icon.svg";
import SortIcon from "../../../../assets/images/sort.svg";
import SGrayIcon from "../../../../assets/images/search-gray.svg";
import UnionIcon from "../../../../assets/images/Union.svg";
import UBlueIcon from "../../../../assets/images/Union-blue.svg";

import HeartIcon from "../../../../assets/images/heart.svg";
import HFillIcon from "../../../../assets/images/heart-fill.svg";
import CommentIcon from "../../../../assets/images/comment.svg";
import CrossIcon from "../../../../assets/images/cross.svg";

import DBlueIcon from "../../../../assets/images/dark-blue.png";
import LCircleIcon from "../../../../assets/images/light-circle.png";
import YCircleIcon from "../../../../assets/images/yellow-cirlce.png";
import RabitIcon from "../../../../assets/images/rabit.png";
import MickeyIcon from "../../../../assets/images/mickey.png";
import BinanceIcon from "../../../../assets/images/binance.png";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { dummyData } from "./dummyData";
import CustomTable from "../../../table/Table";

const Fund = () => {
  let tableHeaderCenter = {
    textAlign: "center",
  };
  let modalZIndex = {
    zIndex: "1051",
  };
  const [isCreateFundShow, setIsCreateFundShow] = useState(false);

  return (
    <>
      <section className="inner-header">
        <h2 className="inner-heading">Hedge Funds</h2>
      </section>
      <div className="align-items-center d-flex inner-filter py-3 py-lg-0">
        <div className="container">
          <div className="justify-content-center d-flex">
            <div className="tabs-dark">
              <ul className="nav nav-pills bg-pink rounded" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    aria-controls="pills-home"
                    aria-selected="true"
                    className="nav-link active"
                    data-toggle="pill"
                    href="#pills-investors-tab"
                    id="for-investors-tab"
                    role="tab"
                  >
                    For Investors
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    aria-controls="pills-profile"
                    aria-selected="false"
                    class="nav-link"
                    data-toggle="pill"
                    href="#pills-fund-managers-tab"
                    id="fund-managers-tab"
                    role="tab"
                  >
                    For Fund Managers
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    aria-controls="pills-contact"
                    aria-selected="false"
                    class="nav-link"
                    data-toggle="pill"
                    href="#pills-investments-tab"
                    id="investments-tab"
                    role="tab"
                  >
                    My Investments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="pills-investors-tab"
          role="tabpanel"
          aria-labelledby="for-investors-tab"
        >
          <div class="container">
            <section class="wonder-box-section content-page-section pt-30 mb-0">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <h5 class="graphic-bold mb-0 fs-20">Featured Funds</h5>
                <button class="btn btn-outline-primary btn-header">
                  Connect Wallet
                </button>
              </div>
              <div class="row">
                <Card
                  key="0"
                  type="1"
                  mainHeading="Medium Yield Investment Account"
                  subHeading="Defi Wonderland"
                  value="$881.9K"
                  lifetime="+32,78%"
                  risk="1/5"
                />
                <Card
                  key="1"
                  type="1"
                  mainHeading="Medium Yield Investment Account"
                  subHeading="Defi Wonderland"
                  value="$881.9K"
                  lifetime="+32,78%"
                  risk="1/5"
                />
              </div>
            </section>
          </div>
          <div class="container">
            <section class="wonder-box-section content-page-section mb-0">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="graphic-bold">Top Funds</h5>
              </div>
              <div class="row">
                <Card
                  key="2"
                  type="2"
                  mainHeading="Medium Yield Investment Account"
                  subHeading="Defi Wonderland"
                  value="$881.9K"
                  lifetime="+32,78%"
                  risk="1/5"
                />
                <Card
                  key="3"
                  type="2"
                  mainHeading="Medium Yield Investment Account"
                  subHeading="Defi Wonderland"
                  value="$881.9K"
                  lifetime="+32,78%"
                  risk="1/5"
                />
                <Card
                  key="4"
                  type="2"
                  mainHeading="Medium Yield Investment Account"
                  subHeading="Defi Wonderland"
                  value="$881.9K"
                  lifetime="+32,78%"
                  risk="1/5"
                />
              </div>
            </section>
          </div>
          <div class="container">
            <section class="wonder-box-section content-page-section pt-30 mb-0">
              <div
                class="
                  d-sm-flex
                  align-items-center
                  justify-content-between
                  mb-3
                "
              >
                <h5 class="graphic-bold">Leaderboard</h5>
                <div>
                  <div class="d-sm-flex align-items-center transparent-inputs">
                    <div class="pr-sm-2 mb-sm-0 mb-2">
                      <div class="dropdown">
                        <button
                          aria-expanded="false"
                          aria-haspopup="true"
                          class="btn btn-secondary dropdown-toggle filter-field"
                          data-toggle="dropdown"
                          id="dropdownMenuButton"
                          type="button"
                        >
                          Network: All
                        </button>
                        <div
                          aria-labelledby="dropdownMenuButton"
                          class="dropdown-menu"
                        >
                          <NavLink class="dropdown-item" to="/">
                            Action
                          </NavLink>
                          <NavLink class="dropdown-item" to="/">
                            Another action
                          </NavLink>
                          <NavLink class="dropdown-item" to="/">
                            Something else here
                          </NavLink>
                        </div>
                        <span class="align-items-center d-flex filter-arrow">
                          <i class="fas fa-sort-down"></i>
                        </span>
                      </div>
                    </div>
                    <div class="mb-sm-0 mb-2">
                      <div class="tabs-dark">
                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <a
                              aria-controls="pills-home"
                              aria-selected="true"
                              class="nav-link active"
                              data-toggle="pill"
                              href="#pills-home"
                              id="pills-home-tab"
                              role="tab"
                            >
                              All
                            </a>
                          </li>
                          <li class="nav-item" role="presentation">
                            <a
                              aria-controls="pills-profile"
                              aria-selected="false"
                              class="nav-link"
                              data-toggle="pill"
                              href="#pills-profile"
                              id="pills-profile-tab"
                              role="tab"
                            >
                              Favirotes
                            </a>
                          </li>
                          <li class="nav-item" role="presentation">
                            <a
                              aria-controls="pills-contact"
                              aria-selected="false"
                              class="nav-link"
                              data-toggle="pill"
                              href="#pills-contact"
                              id="pills-contact-tab"
                              role="tab"
                            >
                              Trending
                            </a>
                          </li>
                          <li class="nav-item" role="presentation">
                            <a
                              aria-controls="pills-contact"
                              aria-selected="false"
                              class="nav-link"
                              data-toggle="pill"
                              href="#pills-contact"
                              id="pills-contact-tab"
                              role="tab"
                            >
                              Recent
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="pl-sm-2">
                      <div class="dropdown">
                        <input
                          class="btn btn-secondary filter-field pl-5"
                          placeholder="Search farms"
                        />
                        <span class="filter-icon">
                          <img alt="" height="21" src={SGrayIcon} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <CustomTable type="fund" data={dummyData} />
                </div>
              </div>
            </section>
          </div>
          <div class="container">
            <section class="wonder-box-section content-page-section pt-30 mb-0 pb-0">
              <div class="d-sm-flex align-items-center mb-3">
                <h5 class="graphic-bold mb-sm-0 mr-2 mr-sm-4">Public Posts</h5>
                <div
                  class="
                    accordion
                    align-items-center
                    d-flex
                    justify-content-between
                  "
                >
                  <label class="mr-3 switch mb-0">
                    <input type="checkbox" /> <span class="slider round"></span>
                  </label>
                  <span class="">Show only my invested funds</span>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <Card
                    key="5"
                    type="3"
                    mainHeading="Binance Coin"
                    mainImg="binance"
                    value="$881.9K Value"
                    valuePercent="-8%"
                    isLike="true"
                    totalLikes="2"
                    time="2 hrs ago"
                    isUnion="true"
                  />
                  <Card
                    key="6"
                    type="3"
                    mainHeading="GMS"
                    mainImg="gms"
                    value="$881.9K Value"
                    valuePercent="-8%"
                    isLike="false"
                    totalLikes="2"
                    time="2 hrs ago"
                    isUnion="false"
                  />
                  <Card
                    key="7"
                    type="3"
                    mainHeading="Nocratos"
                    mainImg="nocratos"
                    value="$881.9K Value"
                    valuePercent="-8%"
                    isLike="false"
                    totalLikes="2"
                    time="2 hrs ago"
                    isUnion="false"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <Card
                    key="8"
                    type="3"
                    mainHeading="Binance Coin"
                    mainImg="binance"
                    value="$881.9K Value"
                    valuePercent="-8%"
                    isLike="true"
                    totalLikes="2"
                    time="2 hrs ago"
                    isUnion="true"
                  />
                  <Card
                    key="9"
                    type="3"
                    mainHeading="Nocratos"
                    mainImg="nocratos"
                    value="$881.9K Value"
                    valuePercent="-8%"
                    isLike="false"
                    totalLikes="2"
                    time="2 hrs ago"
                    isUnion="false"
                  />
                  <Card
                    key="10"
                    type="3"
                    mainHeading="GMS"
                    mainImg="gms"
                    value="$881.9K Value"
                    valuePercent="-8%"
                    isLike="false"
                    totalLikes="2"
                    time="2 hrs ago"
                    isUnion="true"
                  />
                </div>
              </div>
            </section>
          </div>
          <div class="text-center">
            <button class="btn btn-load-more">Load More</button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-fund-managers-tab"
          role="tabpanel"
          aria-labelledby="fund-managers-tab"
        >
          {!isCreateFundShow ? (
            <div class="d-flex justify-content-center">
              <div class="col-md-5">
                <div class="connect-box shadow-sm p-3 p-sm-5 my-10">
                  <h3>Connect your wallet</h3>
                  <p class="text-normal">
                    Lorum ipsum dolor sir emet Lorum ipsum dolor sir eme dolor
                    sir emet Lorum
                  </p>
                  <div class="text-center">
                    <a
                      href="/#"
                      class="
                      align-content-center
                      btn btn-outline-primary
                      d-inline-flex
                      align-items-center
                      mb-4 mb-sm-0
                      mt-4
                      px-5
                    "
                      onClick={(e) => {
                        setIsCreateFundShow(true);
                        e.preventDefault();
                      }}
                    >
                      Connect Wallet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="py-50">
              <div class="container">
                <h5 class="graphic-bold mb-3 fs-20">Create your Fund</h5>

                <div class="tab-content">
                  <div
                    class="tab-pane fade"
                    id="Investors"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    1
                  </div>
                  <div
                    class="tab-pane fade show active"
                    id="Fund-Managers"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="tabs-scroll">

                    <ul
                      class="nav nav-tabs create-nav-tabs bg-white mb-3 no-wrap nav-justified"
                      id="myTab"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          data-toggle="tab"
                          href="#Basics"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          <i class="far fa-stop-circle"></i> Basics
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-toggle="tab"
                          href="#Fees"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <i class="far fa-stop-circle"></i> Fees (optional)
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-toggle="tab"
                          href="#Deposits"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          <i class="far fa-stop-circle"></i> Deposits (optional)
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-toggle="tab"
                          href="#Redemptions"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          <i class="far fa-stop-circle"></i> Redemptions
                          (optional)
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-toggle="tab"
                          href="#Settings"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <i class="far fa-stop-circle"></i> Settings (optional)
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-toggle="tab"
                          href="#Review"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          <i class="far fa-stop-circle"></i> Review
                        </a>
                      </li>
                    </ul>
                    </div>
                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="Basics"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div class="card card-default hedge-card p-2 p-sm-5">
                          <div class="card-body">
                            <h2 class="fw-bold">Basics</h2>
                            <p>
                              Basic vault settings.
                              <b>
                                Basic Settings cannot be chabged after creation.
                              </b>
                            </p>
                            <div class="form-group">
                              <label>Name</label>
                              <input
                                type="text"
                                class="form-control hedge-field"
                                name=""
                              />
                            </div>
                            <div class="form-group mb-2">
                              <label>Denomination Asset</label>
                              <div class="dropdown">
                                <div
                                  class="dropdown-toggle hedge-field"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                ></div>
                                <div
                                  class="dropdown-menu w-100"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <a class="dropdown-item" href="#">
                                    BNB
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a class="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </div>
                                <span class="filter-icon mr-2">
                                  <img
                                    height="18"
                                    class="mr-2"
                                    src={BinanceIcon}
                                  />
                                  <span class="text-black fw-bold mt-1 d-inline-block">
                                    MNB
                                  </span>
                                </span>
                                <span class="align-items-center d-flex down-arrow">
                                  <i class="fas fa-sort-down"></i>
                                </span>
                              </div>
                            </div>
                            <p class="text-normal text-black">
                              The denimination asset is the asset in which
                              depositors deposit into your vault and in which
                              the vault’s share price and the performance are
                              measured.
                            </p>
                            <button class="btn btn-secondary float-right btn-small">
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="Fees"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div class="card card-default hedge-card p-2 p-sm-5">
                          <div class="card-body">
                            <h2 class="fw-bold mb-4">Fees (Optional)</h2>
                            <p class="mb-4 text-normal text-black">
                              There are several types of fees that can be
                              charged. please read each description carefully.
                              All fees are paid in shares of the vault.
                              <b>
                                Fee Settings cannot be changed after creation.
                              </b>
                            </p>

                            <div class="accordion align-items-center d-flex mb-4">
                              <label class="mr-3 switch mb-0 d-none d-sm-block">
                                <input type="checkbox" />
                                <span class="slider round"></span>{" "}
                              </label>
                              <span class="fw-bold">
                                Charge Management Fee{" "}
                                <i class="fa fa-question-circle"></i>
                              </span>
                            </div>
                            <div class="col-space mb-5">
                              <p class="mb-3 text-normal text-black">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centurie
                              </p>
                              <div class="form-group">
                                <label>Management Fee Rate</label>
                                <input
                                  type="text"
                                  class="form-control hedge-field"
                                  value="1%"
                                />
                              </div>
                            </div>

                            <div class="accordion align-items-center d-flex mb-4">
                              <label class="mr-3 switch mb-0 d-none d-sm-block">
                                <input type="checkbox" />
                                <span class="slider round"></span>{" "}
                              </label>
                              <span class="fw-bold">
                                Charge Performance Fee{" "}
                                <i class="fa fa-question-circle"></i>
                              </span>
                            </div>

                            <div class="col-space mb-5">
                              <p class="mb-3 text-normal text-black">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                              </p>
                              <div class="row">
                                <div class="col-sm-6">
                                  <div class="form-group">
                                    <label>Performance Fee Rate</label>
                                    <input
                                      type="text"
                                      class="form-control hedge-field"
                                      value="10%"
                                    />
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="form-group">
                                    <label>Crystallization Period</label>
                                    <input
                                      type="text"
                                      class="form-control hedge-field"
                                      value="365 Days"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="accordion align-items-center d-flex mb-3">
                              <label class="mr-3 switch mb-0 d-none d-sm-block">
                                <input type="checkbox" />
                                <span class="slider round"></span>{" "}
                              </label>
                              <span class="fw-bold">
                                Charge Entrance Fee{" "}
                                <i class="fa fa-question-circle"></i>
                              </span>
                            </div>
                            <div class="col-space mb-5">
                              <p class="mb-3 text-normal text-black">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy
                              </p>
                              <div class="form-group">
                                <label>Entrance Fee Rate</label>
                                <input
                                  type="text"
                                  class="form-control hedge-field"
                                  value="10%"
                                />
                              </div>
                              <div class="form-group">
                                <label>Entrance Fee Allocated to</label>
                                <input
                                  type="text"
                                  class="form-control hedge-field"
                                  value="Manager"
                                />
                              </div>
                            </div>

                            <div class="d-flex justify-content-end mt-4">
                              <button class="btn btn-outline-gray btn-small text-muted">
                                Back
                              </button>
                              <button class="btn btn-secondary ml-3 btn-small">
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="Deposits"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div class="card card-default hedge-card p-2 p-sm-5">
                          <div class="card-body">
                            <h2 class="fw-bold mb-4">Deposit (Optional)</h2>
                            <p class="mb-4 text-normal text-black">
                              Deposits can be subject to restriction, such as
                              who is allowed to deposit, and what amounts they
                              can deposit.
                              <b>
                                Deposit Settings can be changed at any time.
                              </b>
                            </p>

                            <div class="accordion align-items-center d-flex mb-4">
                              <label class="mr-3 switch mb-0 d-none d-sm-block">
                                <input type="checkbox" />
                                <span class="slider round"></span>{" "}
                              </label>
                              <span class="fw-bold">
                                Limit who can deposit{" "}
                                <i class="fa fa-question-circle"></i>
                              </span>
                            </div>
                            <div class="col-space mb-5">
                              <p class="mb-3 text-normal text-black">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centurie
                              </p>
                              <div class="form-group mb-2">
                                <label>Depositor Whitelist</label>
                                <input
                                  type="email"
                                  class="form-control hedge-field"
                                  placeholder="Enter address
							  "
                                />
                              </div>
                              <button class="btn btn-secondary mb-4 btn-small">
                                Add Manager Wallet
                              </button>
                            </div>

                            <div class="accordion align-items-center d-flex mb-4">
                              <label class="mr-3 switch mb-0 d-none d-sm-block">
                                <input type="checkbox" />
                                <span class="slider round"></span>{" "}
                              </label>
                              <span class="fw-bold">
                                Limit deposit amount{" "}
                                <i class="fa fa-question-circle"></i>
                              </span>
                            </div>

                            <div class="col-space mb-5">
                              <p class="mb-3 text-normal text-black">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                              </p>

                              <div class="row align-items-center mb-3">
                                <div class="col-auto align-self-end">
                                  <div
                                    class="
                                    accordion
                                    align-items-center
                                    d-flex
                                    mb-4
                                  "
                                  >
                                    <label class="mr-3 switch mb-0 d-none d-sm-block">
                                      <input type="checkbox" />
                                      <span class="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="form-group">
                                    <label>Minimun Deposit Amount</label>
                                    <input
                                      type="text"
                                      class="form-control hedge-field"
                                      placeholder="0 DAI"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row align-items-center">
                                <div class="col-auto align-self-end">
                                  <div
                                    class="
                                    accordion
                                    align-items-center
                                    d-flex
                                    mb-4
                                  "
                                  >
                                    <label class="mr-3 switch mb-0 d-none d-sm-block">
                                      <input type="checkbox" />
                                      <span class="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                                <div class="col-md-10">
                                  <div class="form-group">
                                    <label>Maximum Deposit Amount</label>
                                    <input
                                      type="text"
                                      class="form-control hedge-field"
                                      placeholder="0 DAI"
                                    />
                                  </div>
                                </div>
                              </div>

                              <hr class="my-5" />

                              <div class="accordion align-items-center d-flex mb-4">
                                <label class="mr-3 switch mb-0 d-none d-sm-block">
                                  <input type="checkbox" />
                                  <span class="slider round"></span>{" "}
                                </label>
                                <span class="fw-bold">
                                  Reject all deposits{" "}
                                  <i class="fa fa-question-circle"></i>
                                </span>
                              </div>
                            </div>

                            <div class="d-flex justify-content-end mt-4">
                              <button class="btn btn-outline-gray btn-small text-muted">
                                Back
                              </button>
                              <button class="btn btn-secondary ml-3 btn-small">
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="Redemptions"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="card card-default hedge-card p-2 p-sm-5">
                          <div className="card-body">
                            <h2 className="fw-bold mb-4">
                              Redemption (optional)
                            </h2>
                            <p className="text-normal text-black">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries,
                            </p>
                            <p className="text-normal text-black">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries,
                            </p>
                            <div className="accordion align-items-center d-flex mb-4">
                              <label className="mr-3 switch mb-0 d-none d-sm-block">
                                <input type="checkbox" />
                                <span className="slider round"></span>{" "}
                              </label>
                              <span className="fw-bold">
                                Provide a Gauranteed Withdrawl Window{" "}
                                <i class="fa fa-question-circle"></i>
                              </span>
                            </div>

                            <div className="col-space mb-5">
                              <div className="form-group">
                                <label>Withdrwal start time</label>
                                <div className="dropdown">
                                  <div
                                    className="dropdown-toggle hedge-field"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="dropdown-value">
                                      00:00
                                    </span>
                                  </div>
                                  <div
                                    className="dropdown-menu w-100"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <a className="dropdown-item" href="#">
                                      BNB
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </div>

                                  <span className="align-items-center d-flex down-arrow">
                                    <i class="fas fa-sort-down"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="form-group">
                                <label>Duration</label>
                                <input
                                  type="text"
                                  value="60 minutes
								"
                                  className="form-control hedge-field"
                                  name=""
                                />
                              </div>
                            </div>

                            <button className="btn btn-secondary float-right btn-small">
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Settings"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="card card-default hedge-card p-2 p-sm-5">
                          <div className="card-body">
                            <h2 className="fw-bold mb-4">
                              Settings (optional)
                            </h2>
                            <p className="text-normal text-black">
                              When an unknown printer took a
                              <b>
                                galley of type and scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries,
                              </b>
                            </p>

                            <p className="text-normal text-black">
                              <b>Flash Loan Protection</b>
                            </p>
                            <p className="text-normal text-black">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy
                            </p>

                            <div className="form-group">
                              <label>Timelock shares for</label>
                              <input
                                type="text"
                                value="24 hours"
                                className="form-control hedge-field"
                                name=""
                              />
                            </div>

                            <p className="text-normal text-black mt-4 mb-3">
                              <b>Risk Managemnet Policies</b>
                            </p>
                            <p className="text-normal text-black">
                              No policies Yet
                            </p>
                            <button
                              className="btn btn-outline-primary btn-small text-blue"
                              data-toggle="modal"
                              data-target="#add-policy-popup"
                            >
                              + Add a Policy (optional)
                            </button>

                            <div className="d-flex justify-content-end mt-5 mt-sm-4">
                              <button className="btn btn-outline-gray btn-small text-muted">
                                Back
                              </button>
                              <button className="btn btn-secondary ml-3 btn-small">
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Review"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div className="card card-default hedge-card p-2 p-sm-5">
                          <div className="card-body">
                            <h2 className="fw-bold mb-4">Review</h2>
                            <p className="text-normal text-black">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                              <b>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </b>
                            </p>
                            <p className="fs-20 mt-4 text-black fw-bold">
                              Vault Basics
                            </p>
                            <div className="row aqua-box">
                              <div className="col-sm-4">
                                <p className="mr-3 m-0 text-normal">
                                  Vault Name
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <p className="m-0 text-normal">
                                  Andrew Jackson
                                </p>
                              </div>
                            </div>
                            <hr className="aqua" />
                            <div className="row aqua-box mb-4">
                              <div className="col-sm-4">
                                <p className="mr-3 m-0 text-normal">
                                  Denomination Asset
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <p className="m-0 text-normal">DAI</p>
                              </div>
                            </div>
                            <p className="mb-1 fs-20 mt-4 text-black fw-bold">
                              Deposits
                            </p>
                            <div className="row aqua-box mb-4">
                              <div className="col-sm-4">
                                <p className="mr-3 m-0 text-normal text-black">
                                  Investor Whitelist
                                </p>
                                <span className="aqua-badge">
                                  Can be changed later
                                </span>
                              </div>
                              <div className="col-sm-4">
                                <p className="m-0 text-normal text-black">
                                  There are currently no depositors on the
                                  whitelist
                                </p>
                              </div>
                            </div>
                            <p className="mb-1 text-normal fw-bold fs-20 text-black">
                              Redemption
                            </p>
                            <div className="row aqua-box mb-4">
                              <div className="col-sm-4">
                                <p className="mr-3 m-0 text-normal text-black">
                                  Gauranteed Redemption Period
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <p className="m-0 text-normal text-black">
                                  Daily at 00:00 (UTC-5) for 60 minutes
                                </p>
                              </div>
                            </div>
                            <p className="mb-1 fw-bold text-normal fs-20 text-black">
                              Setting
                            </p>
                            <div className="row aqua-box mb-4">
                              <div className="col-sm-4">
                                <p className="mr-3 m-0 text-normal text-black">
                                  Shares Action Timelock
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <p className="m-0 text-normal">24 Hours</p>
                              </div>
                            </div>
                            <p className="mb-1 fw-bold text-normal fs-20 text-black">
                              Terms & Conditions
                            </p>
                            <div className="row aqua-box">
                              <div className="col-sm-12">
                                <p className="mr-3 m-0 text-normal text-black">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries. Lorem Ipsum is simply dummy
                                  text of the printing and typesetting industry.
                                  Lorem Ipsum has been the industry's standard
                                  dummy text ever since the 1500s, when an
                                  unknown printer took a galley of type and
                                  scrambled it to make a type specimen book. It
                                  has survived not only five centuries,Lorem
                                  Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                </p>
                              </div>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                for="exampleCheck1"
                              >
                                <a className="text-blue">
                                  I agree the Terms & Conditions
                                </a>
                              </label>
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                              <button className="btn btn-outline-gray btn-small text-muted">
                                Back
                              </button>
                              <button
                                className="btn btn-secondary ml-3 btn-small"
                                data-toggle="modal"
                                data-target="#submit-transaction-popup"
                              >
                                Create
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Investments"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    3
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          class="tab-pane fade"
          id="pills-investments-tab"
          role="tabpanel"
          aria-labelledby="investments-tab"
        >
          <div className="container">Under Construction</div>
        </div>
      </div>

      <div
        class="modal fade"
        id="submit-transaction-popup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Submit Transaction
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="mb-1 fs-14 text-muted text-normal">Summary</p>
              <div className="aqua-box mb-4 pb-0">
                <div className="col-sm-12">
                  <p className="mr-3 m-0 fs-20 mb-3 fw-bold text-black text-normal">
                    <b>Create new vault</b>
                  </p>
                  <p className="f14 text-normal mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <p className="f14 m-0 text-black">
                <b>
                  Expected Transaction Fee <i class="fa fa-question-circle"></i>
                </b>
              </p>
              <p className="f14 m-0">0.0457 ETH</p>
              <p className="f14 m-0">&154.63</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline-gray btn-small btn-footer text-muted">
                Cancel
              </button>
              <button className="btn btn-secondary btn-small btn-footer">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        style={modalZIndex}
        id="edit-policy-popup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit the Policy
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="f14 text-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type. alley of type.
              </p>
              <div className="form-group">
                <label className="text-muted">Adapter Whitelist</label>
                <div className="dropdown">
                  <div
                    className="dropdown-toggle hedge-field"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <ul className="list-unstyled d-flex wrap white-list">
                      <li>
                        <span className="list-show"></span>Curve Eurs Pool
                        <img className="ml-2" src={CrossIcon} />
                      </li>
                      <li>
                        <span className="list-show"></span>Curve
                        <img className="ml-2" src={CrossIcon} />
                      </li>
                    </ul>
                  </div>
                  <div
                    className="dropdown-menu w-100"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink className="dropdown-item" to="/">
                      Adapter Blacklist
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Adapter Whitelist
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Asset Blacklist
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Asset Blacklist
                    </NavLink>
                  </div>
                  <span className="align-items-center d-flex down-arrow">
                    <i class="fas fa-sort-down"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline-gray btn-small btn-footer">
                Cancel
              </button>
              <button className="btn btn-secondary btn-small btn-footer">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="add-policy-popup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Add a Policy
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body pb-5">
              <p className="text-black mb-1">
                <b>Risk Management Policies</b>
              </p>
              <p className="f14 text-black">
                Choose a policy and then configure it. Read more about hoe to
                set up policies
                <a
                  className="text-blue ml-1"
                  data-toggle="modal"
                  data-target="#edit-policy-popup"
                >
                  here.
                </a>
              </p>
              <div className="form-group">
                <label className="text-muted">Available Policies</label>
                <div className="dropdown">
                  <div
                    className="dropdown-toggle hedge-field"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="dropdown-value">Select...</span>
                  </div>
                  <div
                    className="dropdown-menu w-100"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink className="dropdown-item" to="/">
                      Adapter Blacklist
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Adapter Whitelist
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Asset Blacklist
                    </NavLink>
                    <NavLink className="dropdown-item" to="/">
                      Asset Blacklist
                    </NavLink>
                  </div>
                  <span className="align-items-center d-flex down-arrow">
                    <i class="fas fa-sort-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fund;
