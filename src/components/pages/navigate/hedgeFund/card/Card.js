import "./Card.scss";
import SortIcon from "../../../../../assets/images/sort.svg";
import SGrayIcon from "../../../../../assets/images/search-gray.svg";
import UnionIcon from "../../../../../assets/images/Union.svg";
import UBlueIcon from "../../../../../assets/images/Union-blue.svg";

import DBlueIcon from "../../../../../assets/images/dark-blue.png";
import LCircleIcon from "../../../../../assets/images/light-circle.png";
import YCircleIcon from "../../../../../assets/images/yellow-cirlce.png";
import RabitIcon from "../../../../../assets/images/rabit.png";
import LogoCircle from "../../../../../assets/images/logo-circle.svg";
import QIcon from "../../../../../assets/images/q-icon.svg";
import HeartIcon from "../../../../../assets/images/heart.svg";
import HFillIcon from "../../../../../assets/images/heart-fill.svg";
import CommentIcon from "../../../../../assets/images/comment.svg";
import { NavLink } from "react-router-dom";
import { useSortBy } from "react-table";
import { useState } from "react";
import AreaChart from "../../../../chart/AreaChart";

const Card = (props) => {
  let data = [
    ["x-axis", "y-axis"],
    ["1", 36],
    ["2", 41],
    ["3", 39],
    ["4", 49],
    ["5", 34],
    ["6", 39],
    ["7", 38],
    ["8", 48],
    ["9", 36],
    ["10", 42],
    ["1", 36],
    ["2", 41],
    ["3", 39],
    ["4", 49],
    ["5", 34],
    ["6", 39],
    ["7", 38],
    ["8", 48],
    ["9", 36],
    ["10", 42],
    ["1", 36],
    ["2", 41],
    ["3", 39],
    ["4", 49],
    ["5", 34],
    ["6", 39],
    ["7", 38],
    ["8", 48],
    ["9", 36],
    ["10", 42],
    ["1", 36],
    ["2", 41],
    ["3", 39],
    ["4", 49],
    ["5", 34],
    ["6", 39],
    ["7", 38],
    ["8", 48],
    ["9", 36],
    ["10", 42],
    ["1", 36],
    ["2", 41],
    ["3", 39],
    ["4", 49],
    ["5", 34],
    ["6", 39],
    ["7", 38],
    ["8", 48],
    ["9", 36],
    ["10", 42],
    ["1", 36],
    ["2", 41],
    ["3", 39],
    ["4", 49],
    ["5", 34],
    ["6", 39],
    ["7", 38],
    ["8", 48],
    ["9", 36],
    ["10", 42],
    ["1", 36],
    ["2", 41],
    ["3", 39],
    ["4", 49],
    ["5", 34],
    ["6", 39],
    ["7", 38],
    ["8", 48],
    ["9", 36],
    ["10", 42],
  ];

  const createCard = (props) => {
    if (props.type === "1") {
      return (
        <>
          <div className="col-md-6 mb-4">
            <div className="wonder-box shadow-sm">
              <div className="wonder-box-header mb-4 p-0">
                <div className="d-sm-flex mb-4 justify-content-between align-items-center px-3 pt-3">
                  <div className="">
                    <div className="media">
                      <img alt="" src={LogoCircle} className="mr-3" />
                      <div className="media-body">
                        <h2 className="mb-0">{props.mainHeading}</h2>
                        <h6 className="text-muted">{props.subHeading}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="align-items-center d-flex  justify-content-sm-end mt-sm-0 mt-2 pl-sm-0 pl-5 ml-3 ml-sm-0 ">
                      <NavLink
                        className="btn btn-primary btn-sm"
                        to="/funds_detail"
                      >
                        View Pool
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="d-sm-flex align-items-center px-3 ">
                  <div className="wonder-fee mr-4 text-black mr-auto mb-sm-0 mb-3">
                    Value Managed: {props.value}
                  </div>
                  <div className="wonder-fee d-sm-flex mb-sm-0 mb-3">
                    Lifetme Return{" "}
                    <img alt="" src={QIcon} className="ml-1 mr-2" />{" "}
                    <span className="text-green">{props.lifetime}</span>
                    <div className="wonder-fee d-sm-flex  ml-sm-3">
                      Risk Factor
                      <img alt="" src={QIcon} className="ml-1 mr-2" />{" "}
                      <span className="text-green">{props.risk}</span>
                    </div>
                  </div>
                </div>

                <AreaChart data={data} />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (props.type === "2") {
      return (
        <>
          <div className="col-md-4 mb-4">
            <div className="wonder-box shadow-sm add-curve">
              <div className="wonder-box-header mb-4 p-0">
                <div className="d-sm-flex mb-4 justify-content-between align-items-center px-3 pt-3">
                  <div className="">
                    <div className="media">
                      <img alt="" src={LogoCircle} className="mr-3" />
                      <div className="media-body">
                        <h2 className="mb-0">{props.mainHeading}</h2>
                        <h6 className="text-muted">{props.subHeading}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="align-items-center d-flex  justify-content-sm-end mt-sm-0 mt-2 pl-sm-0 pl-5 ml-3 ml-sm-0 ">
                      <button className="btn btn-primary btn-sm">Invest</button>
                    </div>
                  </div>
                </div>
                <div className="wonder-fee mr-4 text-black mr-auto mb-2 px-3">
                  Total Value Managed: {props.value}
                </div>
                <div className="d-sm-flex align-items-center px-3">
                  <div className="wonder-fee d-sm-flex mb-sm-0 mb-3">
                    Lifetme Return{" "}
                    <img alt="" src={QIcon} className="ml-1 mr-2" />{" "}
                    <span className="text-green">{props.lifetime}</span>
                    <div className="wonder-fee d-sm-flex ml-4">
                      Risk Factor
                      <img alt="" src={QIcon} className="ml-1 mr-2" />{" "}
                      <span className="text-green">{props.risk}</span>
                    </div>
                  </div>
                </div>

                <AreaChart data={data} />
              </div>
            </div>
          </div>
        </>
      );
    }

    if (props.type === "3") {
      return (
        <div className="card mb-3 border border-light">
          <div className="card-body">
            <div className="d-sm-flex mb-3 justify-content-between align-items-center">
              <div className="">
                <div className="media">
                  <img
                    alt=""
                    className="mr-2"
                    height="42"
                    src={
                      props.mainImg === "binance"
                        ? LogoCircle
                        : props.mainImg === "gms"
                        ? RabitIcon
                        : YCircleIcon
                    }
                  />
                  <div className="media-body pl-1">
                    <h6 className="mb-2 graphic-medium">
                      {props.mainHeading}{" "}
                      <img
                        className="mr-2"
                        src={props.isUnion === "true" ? UnionIcon : UBlueIcon}
                      />
                    </h6>
                    <h6 className="fs-14">
                      {props.value}
                      <span className="text-muted">{props.valuePercent}</span>
                    </h6>
                  </div>
                </div>
              </div>
              <button className="btn btn-outline-default btn-sm mt-3">
                View Pool
              </button>
            </div>
            <p className="text-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod te.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiod tempor incididunt ut labore et do
            </p>
          </div>
          <div className="card-footer text-muted border-0 py-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  alt=""
                  className="mr-2"
                  src={props.isLike === "true" ? HFillIcon : HeartIcon}
                />
                {props.totalLikes}
                <img alt="" className="mr-2 ml-4" src={CommentIcon} />
                Reply
              </div>
              {props.time}
            </div>
          </div>
        </div>
      );
    }
  };

  return createCard(props);
};

export default Card;
