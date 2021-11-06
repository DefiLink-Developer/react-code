import "./Farm.scss";

//images
import SORT from "../../../../assets/images/sort.svg";
import SORT2 from "../../../../assets/images/search.svg";
import { NavLink } from "react-router-dom";

//sub components
import Card from "./card/Card";

const Farm = () => {
  return (
    <>
      <section className="inner-header">
        <h2 className="inner-heading">Wonderland Farms</h2>
      </section>
      <div className="align-items-center d-flex inner-filter py-3 py-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-2 col-lg-3 col-sm-6 mb-2 mb-lg-0 pr-2">
              <div className="dropdown d-block d-sm-none">
                <div
                  className="sort-xs dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img height="18" src={SORT} alt="" />
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    Action
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    Another action
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
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
                  aria-expanded="false"
                >
                  Sort by: Hot
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    Action
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    Another action
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    Something else here
                  </NavLink>
                </div>
                <span className="filter-icon mr-2">
                  <img height="18" src={SORT} alt="" />
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
                  <img height="24" src={SORT2} alt="" />
                </span>
              </div>
            </div>

            <div
              className="
                align-items-center
                col-1 col-lg-6 col-sm-12
                d-flex
                flex-wrap
                justify-content-between justify-content-lg-end
              "
            >
              <div className="accordion align-items-center d-flex mb-0 mr-4">
                <label className="mr-3 switch mb-0 d-none d-sm-block">
                  <input type="checkbox" />
                  <span className="slider round"></span>{" "}
                </label>
                <span className="text-white d-none d-sm-block">
                  Staked only
                </span>
              </div>

              <div
                className="btn-group btn-group-toggle filters filter-btns d-flex"
                data-toggle="buttons"
              >
                <label className="btn btn-secondary active">
                  <input type="radio" name="options" id="option1" checked />
                  Live
                </label>
                <label className="btn btn-secondary">
                  <input type="radio" name="options" id="option2" /> Finished
                </label>
              </div>

              <div className="dropdown d-sm-none">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  <i class="fas fa-ellipsis-v text-black dots-click"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right p-3">
                  <div
                    className="
                      accordion
                      align-items-center
                      d-flex
                      mb-3
                      justify-content-between
                    "
                  >
                    <label className="mr-3 switch mb-0">
                      <input type="checkbox" />
                      <span className="slider round"></span>{" "}
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
                      />
                      Live
                    </button>
                    <button className="btn btn-secondary disabled btn-xs-second">
                      <input
                        type="radio"
                        name="options"
                        id="option2"
                        autocomplete="off"
                      />
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
          <div className="row">
            <Card
              mainHeading="WNDR-BNB"
              apr="41.28%"
              earn="DWON + Fees"
              subHeading1="DWON EARNED"
              subHeading1Value="0.0000"
              subHeading1Button="Harvest"
              subHeading2="DWON-BNB LP STAKED"
              cardName="box1"
            />
            <Card
              mainHeading="WNDR-BNB"
              apr="41.28%"
              earn="DWON + Fees"
              subHeading1="DWON EARNED"
              subHeading1Value="0.0000"
              subHeading1Button="Harvest"
              subHeading2="DWON-BNB LP STAKED"
              cardName="box2"
            />
            <Card
              mainHeading="WNDR-BNB"
              apr="41.28%"
              earn="DWON + Fees"
              subHeading1="DWON EARNED"
              subHeading1Value="0.0000"
              subHeading1Button="Harvest"
              subHeading2="DWON-BNB LP STAKED"
              cardName="box3"
            />
            <Card
              mainHeading="WNDR-BNB"
              apr="41.28%"
              earn="DWON + Fees"
              subHeading1="DWON EARNED"
              subHeading1Value="0.0000"
              subHeading1Button="Harvest"
              subHeading2="DWON-BNB LP STAKED"
              cardName="box4"
            />
            <Card
              mainHeading="WNDR-BNB"
              apr="41.28%"
              earn="DWON + Fees"
              subHeading1="DWON EARNED"
              subHeading1Value="0.0000"
              subHeading1Button="Harvest"
              subHeading2="DWON-BNB LP STAKED"
              cardName="box5"
            />
            <Card
              mainHeading="WNDR-BNB"
              apr="41.28%"
              earn="DWON + Fees"
              subHeading1="DWON EARNED"
              subHeading1Value="0.0000"
              subHeading1Button="Harvest"
              subHeading2="DWON-BNB LP STAKED"
              cardName="box6"
            />
            <Card
              mainHeading="WNDR-BNB"
              apr="41.28%"
              earn="DWON + Fees"
              subHeading1="DWON EARNED"
              subHeading1Value="0.0000"
              subHeading1Button="Harvest"
              subHeading2="DWON-BNB LP STAKED"
              cardName="box7"
            />
          </div>

          <div className="text-center">
            <button className="btn btn-load-more">Load More</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Farm;
