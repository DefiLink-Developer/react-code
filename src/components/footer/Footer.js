import "./Footer.scss";
import {
  createRef,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";

import LogoWhite from "../../assets/images/logo-white.svg";

import Link from "../link/Link";

const Footer = forwardRef((props, ref) => {
  let navigationLinks = [
    {
      name: "Exchange",
      url: "/exchange",
    },
    {
      name: "Liquidity",
      url: "/liquidity",
    },
    {
      name: "Farms",
      url: "/farms",
    },
  ];
  let categoryNames = [
    {
      name: "Pools",
      url: "/pools",
    },
    {
      name: "Stablecoin Vaults",
      url: "/stablecoin",
    },
    {
      name: "NFT’s",
      url: "/nft",
    },
  ];
  let categorySubNames = [
    {
      name: "Launchpad",
      url: "/launchpad",
    },
    {
      name: "Governance",
      url: "/governance",
    },
    {
      name: "Affiliate",
      url: "/affiliate",
    },
  ];

  let aboutName = [
    {
      name: "Info",
      url: "/info",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Docs",
      url: "/docs",
    },
  ];
  let aboutSubName = [
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Merch",
      url: "/merch",
    },
    {
      name: "New Home",
      url: "/new/home",
    },
    {
      name: "New Home V2",
      url: "/new_home_v2",
    },
  ];

  let socialIcons = [
    {
      name: "fa-twitter",
      url: "/",
    },
    {
      name: "fa-facebook-f",
      url: "/",
    },
    {
      name: "fa-youtube",
      url: "/",
    },
    {
      name: "fa-instagram",
      url: "/",
    },
    {
      name: "fa-snapchat",
      url: "/",
    },
  ];
  let buttonText = "Connect Wallet";

  const [isNewFooterV2Show, setIsNewFooterV2Show] = useState(false);

  const getSelectedFooter = () => {
    if (isNewFooterV2Show) {
      return (
        <footer>
          <div className="container p-0 px-sm-3">
            <div className="footer-sec mb-4 section-space">
              <div className="text-center text-sm-left logo-footer-row">
                <img src={LogoWhite} className="my-4 my-sm-0" alt="" />
                <button
                  data-toggle="modal"
                  data-target="#Modal-Connect"
                  className="btn btn-outline-primary float-sm-right mx-4 text-white"
                >
                  Enter dApp Testnet
                </button>
              </div>
              <div className="row mt-59">
                <div className="col-lg-9 col-md-6 mb-4 mb-sm-0">
                  <div className="d-none d-sm-block">
                    <h5 className="footer-heading">Navigate</h5>
                    <ul className="second-footer">
                      {
                        <Link
                          key="10"
                          info={{
                            data: navigationLinks,
                            type: "1",
                            mainClass: "",
                            subClass: "",
                            activeClass: "footer-active",
                          }}
                        />
                      }
                    </ul>
                  </div>

                  <div className="dropdown d-sm-none">
                    <a
                      href="/#"
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Navigate <i class="fas fa-sort-down float-right"></i>
                    </a>
                    <div
                      className="dropdown-menu footer-dropdown"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {
                        <Link
                          key="9"
                          info={{
                            data: navigationLinks,
                            type: "2",
                            mainClass: "",
                            subClass: "dropdown-item",
                            activeClass: "footer-active",
                            value: "ok",
                          }}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 align-self-center mt-5 mt-md-0">
                  <div className="social-icons text-center text-center text-md-right">
                    <ul className="list-unstyled">
                      {
                        <Link
                          key="0"
                          info={{
                            data: socialIcons,
                            type: "3",
                            mainClass: "",
                            subClass: "",
                            activeClass: "footer-active",
                          }}
                        />
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    } else {
      return (
        <footer>
          <div className="container p-0 px-sm-3">
            <div className="footer-sec mb-4 section-space">
              <div className="text-center text-sm-left logo-footer-row">
                <img src={LogoWhite} className="my-4 my-sm-0" alt="" />
                <button
                  data-toggle="modal"
                  data-target="#Modal-Connect"
                  className="btn btn-outline-primary float-sm-right mx-4 text-white"
                >
                  {buttonText}
                </button>
              </div>
              <div className="row mt-59">
                <div className="col-lg-2 col-md-6 mb-4 mb-sm-0">
                  <div className="d-none d-sm-block">
                    <h5 className="footer-heading">Navigate</h5>
                    <ul>
                      {
                        <Link
                          key="10"
                          info={{
                            data: navigationLinks,
                            type: "1",
                            mainClass: "",
                            subClass: "",
                            activeClass: "footer-active",
                          }}
                        />
                      }
                    </ul>
                  </div>

                  <div className="dropdown d-sm-none">
                    <a
                      href="/#"
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Navigate <i class="fas fa-sort-down float-right"></i>
                    </a>
                    <div
                      className="dropdown-menu footer-dropdown"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {
                        <Link
                          key="9"
                          info={{
                            data: navigationLinks,
                            type: "2",
                            mainClass: "",
                            subClass: "dropdown-item",
                            activeClass: "footer-active",
                            value: "ok",
                          }}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-sm-0">
                  <div className="d-none d-sm-block">
                    <h5 className="footer-heading">Category Name</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          {
                            <Link
                              key="8"
                              info={{
                                data: categoryNames,
                                type: "1",
                                mainClass: "",
                                subClass: "",
                                activeClass: "footer-active",
                              }}
                            />
                          }
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          {
                            <Link
                              key="7"
                              info={{
                                data: categorySubNames,
                                type: "1",
                                mainClass: "",
                                subClass: "",
                                activeClass: "footer-active",
                              }}
                            />
                          }
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown d-sm-none">
                    <a
                      href="/#"
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Category Name <i class="fas fa-sort-down float-right"></i>
                    </a>
                    <div
                      className="dropdown-menu footer-dropdown"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {
                        <Link
                          key="6"
                          info={{
                            data: categoryNames,
                            type: "2",
                            mainClass: "",
                            subClass: "dropdown-item",
                            activeClass: "footer-active",
                          }}
                        />
                      }
                      {
                        <Link
                          key="5"
                          info={{
                            data: categorySubNames,
                            type: "2",
                            mainClass: "",
                            subClass: "dropdown-item",
                            activeClass: "footer-active",
                          }}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-sm-0">
                  <div className="d-none d-sm-block">
                    <h5 className="footer-heading">About</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          {
                            <Link
                              key="4"
                              info={{
                                data: aboutName,
                                type: "1",
                                mainClass: "",
                                subClass: "",
                                activeClass: "footer-active",
                              }}
                            />
                          }
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          {
                            <Link
                              key="3"
                              info={{
                                data: aboutSubName,
                                type: "1",
                                mainClass: "",
                                subClass: "",
                                activeClass: "footer-active",
                              }}
                            />
                          }
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown d-sm-none">
                    <a
                      href="/#"
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About <i class="fas fa-sort-down float-right"></i>
                    </a>
                    <div
                      className="dropdown-menu footer-dropdown"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {
                        <Link
                          key="2"
                          info={{
                            data: aboutName,
                            type: "2",
                            mainClass: "",
                            subClass: "dropdown-item",
                            activeClass: "footer-active",
                          }}
                        />
                      }
                      {
                        <Link
                          key="1"
                          info={{
                            data: aboutSubName,
                            type: "2",
                            mainClass: "",
                            subClass: "dropdown-item",
                            activeClass: "footer-active",
                          }}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 align-self-center mt-5 mt-md-0">
                  <div className="social-icons text-center text-center text-md-right">
                    <ul className="list-unstyled">
                      {
                        <Link
                          key="0"
                          info={{
                            data: socialIcons,
                            type: "3",
                            mainClass: "",
                            subClass: "",
                            activeClass: "footer-active",
                          }}
                        />
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }
  };

  useImperativeHandle(ref, () => ({
    showNewFooterV2(isShow) {
      setIsNewFooterV2Show(isShow);
    },
  }));

  return getSelectedFooter();
});

export default Footer;
