import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  const createCard = (props) => {
    if (props.type === "1") {
      return (
        <div className="col-md-6 mb-4">
          <div className="wonder-box shadow-sm p-4">
            <div className="d-sm-flex mb-30 justify-content-between align-items-center">
              <div className="media align-items-center mb-sm-0 mb-4">
                <img src={props.profileImg} className="mr-2" />
                <div className="media-body pl-1">
                  <h2 className="mb-0 fs-16 mb-1">{props.mainHeading}</h2>
                  <h6 className="text-muted small mb-0">{props.subHeading}</h6>
                </div>
              </div>
              <div>
                <h6 className="text-muted small">Ends in</h6>
                <h6 className="fs-18 mb-0">{props.endingTime}</h6>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="fs-14">
                <span className="text-black">Goal: </span>{" "}
                <span className="text-blue fw-bold">{props.goal.value}</span> /{" "}
                {props.goal.total}
              </div>
              <div>
                <h6 className="text-muted fs-14">{props.remain}</h6>
              </div>
            </div>
            <div
              className="progress"
              style={{
                height: "6px",
              }}
            >
              <div
                className="progress-bar dark"
                role="progressbar"
                style={{
                  width: "80%",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="wonder-fee py-2">
              <span className="text-black mr-1">One Liner:</span> Lorem Ipsum is
              simply dummy text of
            </div>

            <NavLink
              to="/funds_detail"
              className="btn btn-primary btn-sm px-4 mt-3"
            >
              View Project
            </NavLink>
          </div>
        </div>
      );
    }
    if (props.type === "2") {
      return (
        <div class="col-md-6 mb-4">
          <div class="wonder-box shadow-sm p-4">
            <div class="d-sm-flex mb-30 justify-content-between align-items-center">
              <div class="media align-items-center mb-sm-0 mb-4">
                <img src={props.profileImg} className="mr-2" />
                <div class="media-body pl-1">
                  <h2 className="mb-0 fs-16 mb-1">{props.mainHeading}</h2>
                  <h6 className="text-muted small mb-0">{props.subHeading}</h6>
                </div>
              </div>
              <div>
                <h6 class="text-muted small">Ends in</h6>
                <h6 className="fs-18 mb-0">{props.endingTime}</h6>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-2">
              <div class="fs-14">
                <span class="text-black">Goal: </span>{" "}
                <span class="text-blue fw-bold">{props.goal.value}</span>
              </div>
            </div>

            <div class="wonder-fee pb-2">
              <span class="text-black mr-1">One Liner:</span> Lorem Ipsum is
              simply dummy text of
            </div>

            <NavLink
              to="/funds_detail"
              class="btn btn-primary btn-sm px-4 mt-3"
            >
              View Project
            </NavLink>
          </div>
        </div>
      );
    }
    if (props.type === "3") {
      return (
        <div class="col-md-6 mb-4">
          <div class="wonder-box shadow-sm p-4">
            <div class="d-sm-flex mb-30 justify-content-between align-items-center">
              <div class="media align-items-center mb-sm-0 mb-4">
                <img src={props.profileImg} className="mr-2" />
                <div class="media-body pl-1">
                  <h2 className="mb-0 fs-16 mb-1">{props.mainHeading}</h2>
                  <h6 className="text-muted small mb-0">{props.subHeading}</h6>
                </div>
              </div>
              <div>
                <h6 class="text-muted small">Ends on</h6>
                <h6 className="fs-18 mb-0">{props.endingTime}</h6>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-2">
              <div class="fs-14">
                <span class="text-black">Goal: </span>{" "}
                <span className="text-blue fw-bold">{props.goal.value}</span> /{" "}
                {props.goal.total}
              </div>
              <div>
                <h6 class="text-muted fs-14">{props.remain}</h6>
              </div>
            </div>
            <div
              class="progress"
              style={{
                height: "6px",
              }}
            >
              <div
                class="progress-bar dark"
                role="progressbar"
                style={{
                  width: "100%",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="wonder-fee py-2">
              <span class="text-black mr-1">One Liner:</span> Lorem Ipsum is
              simply dummy text of
            </div>

            <NavLink
              to="/funds_detail"
              class="btn btn-primary btn-sm px-4 mt-3"
            >
              View Project
            </NavLink>
          </div>
        </div>
      );
    }
  };

  return createCard(props);
};
export default Card;
