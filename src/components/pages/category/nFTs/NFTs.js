import "./NFTs.scss";

import SORT from "../../../../assets/images/sort.svg";
import { NavLink } from "react-router-dom";
import FilterIcon from "../../../../assets/images/filter.svg";
import Card from "./card/Card";

const NFTs = () => {
  return (
    <>
      <section className="inner-header">
        <h2 className="inner-heading">Non Fungible Wonders</h2>
      </section>

      <div className="align-items-center d-flex inner-filter py-3 py-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-2 col-lg-3 col-sm-4 mb-2 mb-lg-0 pr-2">
              <div className="dropdown d-block d-sm-none">
                <div
                  className="sort-xs dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={SORT} alt="" />
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
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
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Something else here
                  </NavLink>
                </div>
                <span className="filter-icon mr-2">
                  <img src={SORT} alt="" />
                </span>
                <span className="align-items-center d-flex filter-arrow">
                  <i class="fas fa-sort-down"></i>
                </span>
              </div>
            </div>
            <div className="col-2 col-lg-3 col-sm-4 mb-2 mb-lg-0 pl-0">
              <div className="dropdown d-block d-sm-none">
                <div
                  className="sort-xs dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-glass-martini text-white"></i>
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
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
                  Filter By
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Something else here
                  </NavLink>
                </div>
                <span className="filter-icon mr-2 bbb">
                  <img height="18" src={FilterIcon} alt="" />
                </span>
                <span className="align-items-center d-flex filter-arrow">
                  <i class="fas fa-sort-down"></i>
                </span>
              </div>
            </div>

            <div className="col-8 col-lg-6 col-sm-4 d-flex flex-wrap justify-content-between justify-content-lg-end">
              <div className="dropdown ml-auto width-xs-100">
                <button
                  className="btn btn-black dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Collections
                  <span className="ml-auto pl-2 d-flex">
                    {" "}
                    <i class="fas fa-sort-down"></i>
                  </span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                  <NavLink className="dropdown-item" to="/">
                    Something else here
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="wonder-box-section inner-section-space mb-0">
          <div className="row">
            <Card background="bg-l-blue" title="Defi Wonderland - #0000" />
            <Card background="bg-l-blue" title="Defi Wonderland - #0000" />
            <Card background="bg-l-blue" title="Defi Wonderland - #0000" />

            <Card background="" title="Defi Wonderland - #0000" />
            <Card background="" title="Defi Wonderland - #0000" />
            <Card background="" title="Defi Wonderland - #0000" />

            <Card background="bg-l-blue" title="Defi Wonderland - #0000" />
            <Card background="bg-l-blue" title="Defi Wonderland - #0000" />
            <Card background="bg-l-blue" title="Defi Wonderland - #0000" />

            <Card background="" title="Defi Wonderland - #0000" />
            <Card background="" title="Defi Wonderland - #0000" />
            <Card background="" title="Defi Wonderland - #0000" />
          </div>
        </section>
      </div>
    </>
  );
};

export default NFTs;
