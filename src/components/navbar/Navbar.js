import "./Navbar.scss";
import LogoIcon from "../../assets/images/logo.svg";
import MiniLogoIcon from "../../assets/images/mini-logo.svg";

import CatIcon from "../../assets/images/cat.svg";
import WalletConnectIcon from "../../assets/images/walletconnect.svg";
import HorizWhiteIcon from "../../assets/images/horizontal_white.svg";
import BinanceChainIcon from "../../assets/images/binance-chain.svg";
import MathWalletIcon from "../../assets/images/math-wallet.png";
import TokenPocketIcon from "../../assets/images/tocken-pocket.png";
import SafePalIcon from "../../assets/images/safepal.png";
import Coin98Icon from "../../assets/images/coin98.png";
import CopyIcon from "../../assets/images/copy-icon.svg";
import LogoutIcon from "../../assets/images/logout.svg";

import { NavLink } from "react-router-dom";
import {
  createRef,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";

const Navbar = forwardRef((props, ref) => {
  const customStyle = {
    alignItems: "center",
    justifyContent: "flex-end",
  };

  const navbarItems = [
    {
      name: "Trade",
      url: "/trade",
    },
    {
      name: "Hedge Funds",
      url: "/funds",
    },
    {
      name: "Farms",
      url: "/farms",
    },
    {
      name: "Pools",
      url: "/pools",
    },
    {
      name: "NFT's",
      url: "/nft",
    },
  ];
  const navbarItems2 = [
    {
      name: "Launchpad",
      url: "/launchpad",
    },
    {
      name: "Governance",
      url: "/governance",
    },
  ];
  let buttonText = "Connect Wallet";

  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isNewHomeShow, setIsNewHomeShow] = useState(false);
  const [isNewHomeV2Show, setIsNewHomeV2Show] = useState(false);

  let navBarRef = createRef();
  let btnRef = createRef();

  const getSelectedNavbar = () => {
    if (isNewHomeShow) {
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
                  ref={btnRef}
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
                  ref={navBarRef}
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
    } else if (isNewHomeV2Show) {
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
                  ref={btnRef}
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
                  Enter dApp Testnet
                </button>
                <div
                  class="collapse navbar-collapse  px-4 px-lg-0 phone-top-menu"
                  id="collapsibleNavId"
                  ref={navBarRef}
                >
                  <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                      <NavLink className="nav-link" to="/trade">
                        Whitelist
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className="nav-link" to="/funds">
                        Github
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className="nav-link" to="/farm">
                        Invest
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className="nav-link" to="/pools">
                        Info
                      </NavLink>
                    </li>
                  </ul>

                  <div class="d-none d-lg-block" style={customStyle}>
                    <button
                      data-toggle="modal"
                      data-target="#Modal-Connect"
                      class="btn btn-outline-primary btn-header"
                    >
                      Enter dApp Testnet
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="fixed-top top-nav">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light px-0">
                <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavId"
                  aria-controls="collapsibleNavId"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  id="mobile-nav-icon"
                  ref={btnRef}
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
                {isWalletConnected ? (
                  <button
                    data-toggle="modal"
                    data-target="#Modal-Account"
                    className="btn btn-outline-primary d-lg-none ml-auto btn-appear btn-account d-flex align-items-center"
                  >
                    6.81 ETH{" "}
                    <span className="d-flex btn-value ml-2 align-items-center">
                      <img
                        alt=""
                        height="12"
                        src={MiniLogoIcon}
                        className="btn-logo mr-2"
                      />{" "}
                      0x...9fq0
                    </span>
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-primary d-lg-none ml-auto btn-appear"
                    data-toggle="modal"
                    data-target="#Modal-Connect"
                  >
                    {buttonText}
                  </button>
                )}

                <div
                  className="collapse navbar-collapse  px-4 px-lg-0 phone-top-menu"
                  id="collapsibleNavId"
                  ref={navBarRef}
                >
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {navbarItems.map((item) => {
                      return (
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            to={item.url}
                            activeClassName="nav-link active"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    })}
                    {navbarItems2.map((item) => {
                      return (
                        <li className="nav-item d-xl-block d-lg-none">
                          <NavLink
                            className="nav-link"
                            to={item.url}
                            activeClassName="nav-link active"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    })}

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle d-flex"
                        href="javascript:void(0);"
                        id="dropdownId"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        More{" "}
                        <span className="ml-auto pl-2 d-flex">
                          {" "}
                          <i class="fas fa-sort-down"></i>
                        </span>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownId"
                      >
                        <NavLink className="dropdown-item not-active" to="/">
                          Info
                        </NavLink>
                        <NavLink className="dropdown-item not-active" to="/">
                          Contact
                        </NavLink>
                        <NavLink className="dropdown-item not-active" to="/">
                          Documents
                        </NavLink>
                        <NavLink className="dropdown-item not-active" to="/">
                          Blog
                        </NavLink>
                      </div>
                    </li>
                  </ul>

                  <div className="d-none d-lg-block" style={customStyle}>
                    {isWalletConnected ? (
                      <button
                        data-toggle="modal"
                        data-target="#Modal-Account"
                        className="btn btn-outline-primary btn-header btn-account d-flex align-items-center"
                      >
                        6.81 ETH{" "}
                        <span className="d-flex btn-value ml-2 align-items-center">
                          <img
                            alt=""
                            height="12"
                            src={MiniLogoIcon}
                            className="btn-logo mr-2"
                          />{" "}
                          0x...9fq0
                        </span>
                      </button>
                    ) : (
                      <button
                        data-toggle="modal"
                        data-target="#Modal-Connect"
                        className="btn btn-outline-primary btn-header"
                      >
                        {buttonText}
                      </button>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      );
    }
  };

  useImperativeHandle(ref, () => ({
    hideNavbar() {
      navBarRef.current.classList.remove("show");
      btnRef.current.innerHTML = "";
      btnRef.current.innerHTML = '<i class="fas fa-grip-lines"></i>';
    },

    showNewHome(isShow) {
      setIsNewHomeShow(isShow);
    },

    showNewHomeV2(isShow) {
      setIsNewHomeV2Show(isShow);
    },

    connectToWallet() {
      setIsWalletConnected(true);
    },
    disConnectToWallet() {
      setIsWalletConnected(false);
    },
  }));

  return <>{getSelectedNavbar()}</>;
});

export default Navbar;
