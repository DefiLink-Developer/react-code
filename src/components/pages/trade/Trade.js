import "./Trade.scss";

import GearIcon from "../../../assets/images/gear.svg";
import TGreenIcon from "../../../assets/images/t-green.png";
import LogoMiniIcon from "../../../assets/images/mini-logo-circle.png";
import BinanceIcon from "../../../assets/images/binance.png";
import UniSwapIcon from "../../../assets/images/uniswap.png";
import ACircleIcon from "../../../assets/images/a-circle.png";
import BTCircleIcon from "../../../assets/images/bt-circle.png";
import CakeIcon from "../../../assets/images/cake.png";
import PotIcon from "../../../assets/images/pot.png";
import React, { useState } from "react";

const Trade = () => {
  let selectStyle = {
    minWidth: "72px",
    paddingLeft: "0",
  };
  let tokenList = [
    {
      mainHeading: "BNB",
      subHeading: "BNB",
      img: BinanceIcon,
    },
    {
      mainHeading: "UNI",
      subHeading: "UNI",
      img: UniSwapIcon,
    },
    {
      mainHeading: "USDT",
      subHeading: "USDT",
      img: TGreenIcon,
    },
    {
      mainHeading: "AAVE",
      subHeading: "AAVE",
      img: ACircleIcon,
    },
    {
      mainHeading: "BTC",
      subHeading: "BTC",
      img: BTCircleIcon,
    },
    {
      mainHeading: "CAKE",
      subHeading: "CAKE",
      img: CakeIcon,
    },
    {
      mainHeading: "POT",
      subHeading: "POT",
      img: PotIcon,
    },
  ];

  const [originalTokenList, setOriginalTokenList] = useState(tokenList);
  const [showTokenList, setShowTokenList] = useState(originalTokenList);

  const searchData = (search) => {
    let data = [];
    if (search !== "") {
      originalTokenList.forEach((item) => {
        if (item.mainHeading.toLowerCase().includes(search)) {
          data.push(item);
        }
      });
    } else {
      data = originalTokenList;
    }

    setShowTokenList(data);
  };

  return (
    <>
      <div className="container">
        <section className="wonder-box-section inner-section-space mb-0">
          <div className="justify-content-center row">
            <div className="col-md-6">
              <div className="card card-dark mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="text-white">Swap</h4>
                    <div className="dark-box">
                      <img src={GearIcon} />
                    </div>
                  </div>

                  <div className="card darker mt-2">
                    <div className="card-body">
                      <div className="row">
                        <div
                          className="col-6 col-sm-4"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <div className="d-flex">
                            <img
                              height="50"
                              width="50"
                              className="mr-2"
                              src={TGreenIcon}
                            />
                            <div>
                              <span className="text-white fs-12 pl-1">
                                From
                              </span>
                              <select
                                disabled
                                style={selectStyle}
                                className="form-control form-control-sm custom-option text-white"
                              >
                                <option>USDT</option>
                                <option>USDT</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-8">
                          <div className="dark-input mb-3 mt-2">
                            <input
                              type="text"
                              className="form-control"
                              value="0.0"
                              aria-describedby="basic-addon2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card darker mt-3">
                    <div className="card-body">
                      <div className="row">
                        <div
                          className="col-6 col-sm-4"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <div className="d-flex">
                            <img
                              height="50"
                              width="50"
                              className="mr-2"
                              src={LogoMiniIcon}
                            />
                            <div>
                              <span className="text-white fs-12 pl-1">To</span>
                              <select
                                disabled
                                style={selectStyle}
                                className="form-control form-control-sm custom-option text-white"
                              >
                                <option>dUSD</option>
                                <option>dUSD</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-8">
                          <div className="dark-input mb-3 mt-2">
                            <input
                              type="text"
                              className="form-control"
                              value="0.0"
                              aria-describedby="basic-addon2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="btn btn-outline-primary bg-blue btn-block text-white mt-35"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="modal fade modal-token"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <h4 className="modal-title graphic-medium" id="exampleModalLabel">
                Select a Token
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body pt-3">
              <input
                type="text"
                className="form-control muted-input"
                placeholder="Search Token"
                onKeyUp={(e) => {
                  searchData(e.target.value);
                }}
              />
              <ul className="list-unstyled token-list">
                {showTokenList.map((item) => {
                  return (
                    <li>
                      <img
                        className="mr-2"
                        height="48"
                        width="48"
                        src={item.img}
                      />
                      <div className="d-flex flex-column ml-2">
                        <span className="fs-20 graphic-medium">
                          {item.mainHeading}
                        </span>
                        <small className="fs-14 text-muted">
                          {item.subHeading}
                        </small>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trade;
