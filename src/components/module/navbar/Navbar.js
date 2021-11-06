import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import LogoIcon from "../../../assets/images/logo.svg";
import MiniLogoIcon from "../../../assets/images/mini-logo.svg";

const NewNavbar = () => {
  const customStyle = {
    alignItems: "center",
    justifyContent: "flex-end",
  };
  return (
    <>
      <div class="fixed-top top-nav">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light px-0">
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-grip-lines"></i>
            </button>
            <NavLink className="navbar-brand" to="/">
              <img className="d-none d-sm-block " src={LogoIcon} alt="" />
              <img
                className="d-sm-none mini-logo"
                width="25"
                height="40"
                src={MiniLogoIcon}
                alt=""
              />
            </NavLink>
            <button
              data-toggle="modal"
              data-target="#Modal-Connect"
              class="btn btn-outline-primary d-lg-none ml-auto btn-appear"
            >
              Connect Wallet
            </button>
            <div
              class="collapse navbar-collapse  px-4 px-lg-0 phone-top-menu"
              id="collapsibleNavId"
            >
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <NavLink className="nav-link" to="/trade">
                    Product
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/funds">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/farm">
                    Token
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/pools">
                    FAQs
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/nft">
                    Developers
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Corporate Partners
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/nft">
                    Affiliate
                  </NavLink>
                </li>
              </ul>

              <div class="d-none d-lg-block" style={customStyle}>
                <button
                  data-toggle="modal"
                  data-target="#Modal-Connect"
                  class="btn btn-outline-primary btn-header"
                >
                  Enter dApp
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
