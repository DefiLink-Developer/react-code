import "./FundDetail.scss";
import LogoCircleIcon from "../../../../../assets/images/logo-circle.svg";
import UnionIcon from "../../../../../assets/images/Union.svg";
import NavigateArrowIcon from "../../../../../assets/images/navigat-arrow.svg";
import QIcon from "../../../../../assets/images/q-icon.svg";
import QUIcon from "../../../../../assets/images/qu.svg";
import SushiDbIcon from "../../../../../assets/images/sushi-db.png";
import GiftIcon from "../../../../../assets/images/gift.png";
import AreaChart from "../../../../chart/AreaChart";


const FundDetail = (props) => {
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
  
  return (
    <>
      <section className="inner-header">
        <h2 className="inner-heading mb-0">Medium Yield Investment Account</h2>
        <h5 className="d-flex align-items-center inner-sub-heading mb-0">
          <img alt="" className="mr-2" height="33" src={LogoCircleIcon} /> Defi
          Wonderland
          <img alt="" className="ml-1" height="14" src={UnionIcon} />
        </h5>
      </section>
      <div className="align-items-center d-flex inner-filter py-3 py-lg-0">
        <div className="container">
          <div className="justify-content-center d-flex">
            <button
              style={{
                backgroundColor: "#b142ac !important",
                borderColor: "#b142ac !important",
              }}
              className="btn btn-primary bg-pink btn-sm mr-3"
            >
              Invest in DUSD
            </button>
            <button
              style={{
                backgroundColor: "transparent !important",
                color: "#b142ac",
                borderColor: "#b142ac !important",
              }}
              className="btn btn-outline-primary bg-pink btn-sm"
            >
              Exit{" "}
              <img
                alt=""
                height="14"
                style={{
                  marginTop: "-2px",
                }}
                src={NavigateArrowIcon}
              />
            </button>
          </div>
        </div>
      </div>

     

      <div className="container">
        <section className="wonder-box-section content-page-section pt-30 mb-0">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="wonder-box shadow-sm mb-3">
                <div className="wonder-box-header">
                  <div className="row">
                    <div className="col-6 col-md-4">
                      <h2 className="mb-1 fs-14 text-muted">
                        Total Value Managed:
                      </h2>
                      <h6 className="fs-16 fw-bold">$881.9K</h6>
                    </div>
                    <div className="col-6 col-md-4">
                      <h2 className="mb-1 fs-14 text-muted">
                        Lifetme Return{" "}
                        <img alt="" className="ml-1 mr-2" src={QIcon} />{" "}
                      </h2>
                      <h6 className="text-green fs-16">+32,78%</h6>
                    </div>
                    <div className="col-md-4">
                      <h2 className="mb-1 fs-14 text-muted">
                        Risk Factor{" "}
                        <img alt="" className="ml-1 mr-2" src={QIcon} />
                      </h2>
                      <h6 className="text-green fs-16">1/5</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wonder-box shadow-sm mb-3">
                <div className="wonder-box-header">
                  <div className="row">
                    <div className="col">
                      <h2 className="mb-1 fs-14 text-muted">Day:</h2>
                      <h6 className="text-green fs-16">+0.1%</h6>
                    </div>
                    <div className="col">
                      <h2 className="mb-1 fs-14 text-muted">Week:</h2>
                      <h6 className="text-green fs-16">+0.5%</h6>
                    </div>
                    <div className="col">
                      <h2 className="mb-1 fs-14 text-muted">Month:</h2>
                      <h6 className="text-green fs-16">+32,78%</h6>
                    </div>
                    <div className="col">
                      <h2 className="mb-1 fs-14 text-muted">3 Months:</h2>
                      <h6 className="text-green fs-16"></h6>
                    </div>
                    <div className="col">
                      <h2 className="mb-1 fs-14 text-muted">6 Months:</h2>
                      <h6 className="text-green fs-16"></h6>
                    </div>
                  </div>
                </div>
               
              </div>

              <h5 className="align-items-center mb-4 d-flex graphic-medium mt-5">
                {" "}
                <img alt="" className="mr-2" src={QUIcon} />
                About Medium Yield Investments Account
              </h5>
              <p className="text-normal">
                Lorem ipsum dolor sit amet, pro primis nostro eloquentiam ei, et
                vix petentium eloquentiam. An mea libris scribentur. Te mei
                dolores torquatos mnesarchum, labore dignissim mnesarchu
              </p>
              <p className="text-normal">
                tiam ei, et vix petentium eloquentiam. An mea libris scribentur.
                Te mei dolores torquatos mnesarchum, labore dignissim mnesarchu
              </p>
              <p className="text-normal">
                Lorem ipsum dolor sit ametpetentium eloquentiam. An mea libris
                scribentur. Te mei dolores torquatos mnesarchum, labore
                dignissim mnesarchu
              </p>
              <p className="text-normal">
                pro primis nostro eloquentiam ei, et vix petentium eloquentiam.
                An mea libris scribentur. Te mei dolores torquatos mnesarchum,
                labore dignissim mnesarchu
              </p>

              <h5 className="graphic-bold fs-20 mt-5">Portfolio</h5>

              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-borderless data-center table-sm table-striped">
                      <thead className="table-light">
                        <tr>
                          <th style={{ minWidth: "140px" }}>
                            TOKEN PERCENTAGE
                          </th>
                          <th style={{ minWidth: "140px" }}>AMOUNT</th>
                          <th style={{ minWidth: "150px" }}>VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ minWidth: "180px" }}>
                            <b className="d-block">Sushi LP FRAX-USDC</b>
                            Sushi (SUSHI)
                            <div className="row align-items-center">
                              <div className="col-9 pr-0">
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-3">80%</div>
                            </div>
                          </td>
                          <td style={{ width: "110px" }}>0.437894729</td>
                          <td style={{ width: "110px" }}>&706,279.35</td>
                        </tr>
                        <tr>
                          <td style={{ minWidth: "180px" }}>
                            <b>USD Coin</b> (USDC)
                            <div className="row align-items-center">
                              <div className="col-9 pr-0">
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "10%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-3">10%</div>
                            </div>
                          </td>
                          <td style={{ width: "110px" }}>1.4535</td>
                          <td style={{ width: "110px" }}>06,279.35</td>
                        </tr>
                        <tr>
                          <td style={{ minWidth: "180px" }}>
                            <b>Frax USD</b> (FRAX)
                            <div className="row align-items-center">
                              <div className="col-9 pr-0">
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "30%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-3">30%</div>
                            </div>
                          </td>
                          <td style={{ width: "110px" }}>0.437894729</td>
                          <td style={{ width: "110px" }}>&706,279.35</td>
                        </tr>
                        <tr>
                          <td style={{ minWidth: "180px" }}>
                            <b>Frax USD</b> (FRAX)
                            <div className="row align-items-center">
                              <div className="col-9 pr-0">
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "0%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="col-3">0%</div>
                            </div>
                          </td>
                          <td style={{ width: "110px" }}>0.23789</td>
                          <td style={{ width: "110px" }}>06,279.3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <h5 className="graphic-bold fs-20 mt-5">Yield Farming</h5>

              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-center p-5">
                      <div className="media  mr-2">
                        <img alt="" src={SushiDbIcon} />
                      </div>
                      <div className="media-container">
                        <span className="d-block text-muted fs-14">
                          Staked in sushi
                        </span>
                        <h6 className="fs-16 mt-2 mb-0">$704,673</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-center p-5">
                      <div className="media  mr-2">
                        <img alt="" src={GiftIcon} />
                      </div>
                      <div className="media-container">
                        <span className="d-block text-muted fs-14">
                          Claimable rewards
                        </span>
                        <h6 className="fs-16 mt-2 mb-0">$704,673</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="wonder-box shadow-sm add-curve large-curve position-relative">
                <div className="wonder-box-header mb-4">
                  <ul
                    className="nav nav-pills chart-pills"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link "
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-selected="true"
                      >
                        Day
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-selected="false"
                      >
                        Week
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-selected="false"
                      >
                        Month
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-selected="false"
                      >
                        3 Months
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link text-muted"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-selected="false"
                      >
                        6 Months
                      </a>
                    </li>
                  </ul>
                  <div className="chat-data">
                    <p className="mb-0 text-muted text-normal fs-14">
                      Creation Date:
                    </p>
                    <h6 className="fw-bold">Aug 1, 2021</h6>
                  </div>
                </div>

                <div className="large-chart">
                   <AreaChart data={data} />
                </div>
                {/* <AreaChart data={data} /> */}

               
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FundDetail;
