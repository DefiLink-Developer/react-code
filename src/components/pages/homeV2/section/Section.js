import "./Section.scss";
import PhoneBannerIcon from "../../../../assets/images/phone-banner.png";

import ForbesLogoIcon from "../../../../assets/images/forbes-logo.png";
import CoinDeskIcon from "../../../../assets/images/coindesk.png";
import YahooIcon from "../../../../assets/images/yahoo.png";
import RepublicIcon from "../../../../assets/images/republic.png";
import BinanceIcon from "../../../../assets/images/binance-icon.png";
import ARRigntoneIcon from "../../../../assets/images/arringtone.png";
import WalletIcon from "../../../../assets/images/wallet-icon.png";
import DepositIcon from "../../../../assets/images/deposit.png";
import Ste3Icon from "../../../../assets/images/ste-3.png";
import DecentralisedIcon from "../../../../assets/images/decentralised-img.png";

import Feature1Icon from "../../../../assets/images/feature-1.png";
import Feature2Icon from "../../../../assets/images/feature-2.png";
import Feature3Icon from "../../../../assets/images/feature-3.png";
import Feature4Icon from "../../../../assets/images/feature-4.png";
import Feature5Icon from "../../../../assets/images/feature-5.png";
import Feature6Icon from "../../../../assets/images/feature-6.png";
import Feature7Icon from "../../../../assets/images/feature-7.png";
import Feature8Icon from "../../../../assets/images/feature-8.png";
import Feature9Icon from "../../../../assets/images/feature-9.png";
import Feature10Icon from "../../../../assets/images/feature-10.png";
import Feature11Icon from "../../../../assets/images/feature-11.png";
import Feature12Icon from "../../../../assets/images/feature-12.png";

const addCard = (props) => {
  return (
    <>
      <div class="col-md-4 text-center mb-5">
        <div class="feature-card">
          <img src={props.image} class="" />
        </div>
        <h4 class="fs-24 graphic-medium fw-bold mb-3">{props.mainHeading}</h4>
      </div>
    </>
  );
};

const Section = (props) => {
  const addSection = (props) => {
    if (props.name === "mainSection") {
      return (
        <>
          <div class="container">
            <section class="container-section special-section">
              <div class="row">
                <div class="col-lg-6 mb-3 mb-lg-0 bg-none main-content">
                  <h1 class="home-banner-text mb-3 mb-lg-5">
                    Bringing{" "}
                    <span class="bold">
                      Decentralised <br /> Finance{" "}
                    </span>{" "}
                    To Enterprise,
                    <br /> Business, and The Masses
                  </h1>
                  <p class="mb-5 text-normal">
                    DeFi Wonderland is building the open banking infrastructure
                    of the future. We're connecting the Blockchain’s greatest
                    opportunities & highest yields, integrated with unique
                    enterprise solutions to reach the masses
                  </p>
                  <button class="btn btn-secondary mb-2">Enter dApp</button>
                </div>
                <div class="col-lg-6 mb-3 mb-lg-0">
                  <img src={PhoneBannerIcon} class="img-fluid" />
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }
    if (props.name === "imageSection") {
      return (
        <>
          <div class="container">
            <section class=" container-section">
              <div class="d-flex flex-column flex-lg-row row mx-0">
                <div class="col-lg-5">
                  <h2 class="heading-small mb-3 mb-lg-4 mb-md-3">
                    Featured In
                  </h2>
                  <div className="overflow-x">
                    <div class="d-flex no-wrap flex-sm-wrap mb-sm-0  mb-5">
                      <div class="featured-logo mr-3 mr-sm-5 mb-sm-5">
                        <img src={ForbesLogoIcon} class="" />
                      </div>
                      <div class="featured-logo mr-3 mr-sm-5 mr-sm-5 mb-sm-5">
                        <img src={CoinDeskIcon} class="" />
                      </div>
                      <div class="featured-logo mr-3 mr-sm-0 mb-sm-5">
                        <img src={YahooIcon} class="" />
                      </div>
                      <div class="featured-logo mr-3 mr-sm-5 mr-sm-5 mb-sm-5">
                        <img src={ForbesLogoIcon} class="" />
                      </div>
                      <div class="featured-logo mr-3 mr-sm-5 mr-sm-5 mb-sm-5">
                        <img src={CoinDeskIcon} class="" />
                      </div>
                      <div class="featured-logo mb-sm-5">
                        <img src={YahooIcon} class="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 d-sm-flex  d-none justify-content-center align-items-center">
                  <div class="border-dotted"></div>
                </div>
                <div class="col-lg-5">
                  <h2 class="heading-small mb-3 mb-lg-4 mb-md-3">Backed By</h2>
                  <div className="overflow-x">
                    <div class="d-flex no-wrap flex-sm-wrap mb-sm-0  mb-5">
                      <div class="featured-logo mr-3 mr-sm-5 mb-sm-5">
                        <img src={RepublicIcon} class="" />
                      </div>
                      <div class="featured-logo mr-3 mr-sm-5 mb-sm-5">
                        <img src={BinanceIcon} class="" />
                      </div>
                      <div class="featured-logo mr-3 mr-sm-0 mb-sm-5">
                        <img src={ARRigntoneIcon} class="" />
                      </div>

                      <div class="featured-logo mr-3 mr-sm-5 mb-sm-5">
                        <img src={RepublicIcon} class="" />
                      </div>
                      <div class="featured-logo mr-3 mr-sm-5 mb-sm-5">
                        <img src={BinanceIcon} class="" />
                      </div>
                      <div class="featured-logo mb-sm-5">
                        <img src={ARRigntoneIcon} class="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }
    if (props.name === "textSection") {
      return (
        <>
          <div class="container">
            <section class="container-section">
              <div class="row">
                <div class="col-md-6">
                  <h2 class="heading-small mb-4">It’s easy as 1, 2, 3</h2>
                  <p class="text-normal fs-16">
                    Getting started with DeFi Wonderland is easy. If you’re new
                    to crypto, a DeFi nerd, or even a business looking to tap
                    into extra wealth; simply follow the prompts & let the
                    platform do the heavy lifting
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }
    if (props.name === "stepSection") {
      return (
        <>
          <div class="container">
            <section class="container-section">
              <div class="row justify-content-between">
                <div class="col-md-4 text-center mb-sm-0 mb-4">
                  <div class="step-card">
                    <img src={WalletIcon} class="" />
                  </div>
                  <h4 class="fs-24 graphic-medium fw-bold">Step 1</h4>
                  <p class="fs-20">Connect Your Wallet</p>
                </div>
                <div class="col-md-4 text-center mb-sm-0 mb-4">
                  <div class="step-card">
                    <img src={DepositIcon} class="" />
                  </div>
                  <h4 class="fs-24 graphic-medium fw-bold">Step 2</h4>
                  <p class="fs-20">Make a Deposit</p>
                </div>
                <div class="col-md-4 text-center">
                  <div class="step-card last-step">
                    <img src={Ste3Icon} class="" />
                  </div>
                  <h4 class="fs-24 graphic-medium fw-bold">Step 3</h4>
                  <p class="fs-20 line-h-auto">
                    Start Investing, trading <br /> and earning
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }
    if (props.name === "imageHeadingSection") {
      return (
        <>
          <div class="container">
            <section class="container-section">
              <div class="text-center overflow-sm-hidden">
                <h2 class="heading-small mb-4">
                  Bridging Traditional Finance To Decentralised Finance
                </h2>
                <img
                  src={DecentralisedIcon}
                  class="img-fluid image-decentralised"
                />
              </div>
            </section>
          </div>
        </>
      );
    }
    if (props.name === "centerHeadingSection") {
      return (
        <>
          <div class="container">
            <section class="container-section text-center">
              <div class="row justify-content-center">
                <div class="col-sm-8">
                  <h2 class="heading-small mb-4">{props.mainHeading}</h2>
                  <p>{props.subHeading}</p>
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }

    if (props.name === "rightImageButtonSection") {
      return (
        <>
          <div class="container">
            <section class="container-section">
              <div class="d-sm-flex">
                <div class="col-lg-6 mb-3 mb-lg-0">
                  <h2 class="heading-small fs-24 mb-4">{props.mainHeading}</h2>
                  {/* <button class="btn btn-secondary btn-sm home-btn mr-2">
                    {props.button1Text}
                  </button>
                  <button class="btn btn-outline-primary btn-sm home-btn">
                    {props.button2Text}
                  </button> */}
                  <p class="mt-4">{props.description}</p>
                  {/* <h6 class="fw-bold text-underline cursor-pointer mt-5 pt-4">
                    {props.viewText}
                  </h6> */}
                </div>
                <div class="col-lg-6 mb-3 text-center">
                  <img
                    src={props.image}
                    style={{
                      height: "315px",
                    }}
                    class="img-fluid"
                  />
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }

    if (props.name === "leftImageButtonSection") {
      return (
        <>
          <div class="container">
            <section class="container-section">
              <div class="d-sm-flex">
                <div class="col-lg-6 mb-3 text-center">
                  <img
                    src={props.image}
                    style={{
                      height: "315px",
                    }}
                    class="img-fluid"
                  />
                </div>
                <div class="col-lg-6 mb-3 mb-lg-0">
                  <h2 class="heading-small fs-24 mb-4">{props.mainHeading}</h2>

                  <p class="mt-4">{props.description}</p>
                  <button class="btn btn-secondary btn-sm home-btn mr-2">
                    {props.button1Text}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }

    if (props.name === "cardSection") {
      let cardArray = [
        {
          image: Feature1Icon,
          mainHeading: "Decentralised Hedge Funds",
        },
        {
          image: Feature2Icon,
          mainHeading: "Stablecoin Investment Accounts",
        },
        {
          image: Feature3Icon,
          mainHeading: "Staking Pools",
        },
        {
          image: Feature4Icon,
          mainHeading: "Lending Protocol",
        },
        {
          image: Feature5Icon,
          mainHeading: "Yield Farming Aggregator",
        },
        {
          image: Feature6Icon,
          mainHeading: "Project Launchpad",
        },
        {
          image: Feature7Icon,
          mainHeading: "NFT Marketplace",
        },
        {
          image: Feature8Icon,
          mainHeading: "Swapping",
        },
        {
          image: Feature9Icon,
          mainHeading: "Affiliate Earnings",
        },
        {
          image: Feature10Icon,
          mainHeading: "Investment analytics",
        },
        {
          image: Feature11Icon,
          mainHeading: "Planet Earth Fund",
        },
        {
          image: Feature12Icon,
          mainHeading: "Insurance Protocol",
        },
      ];
      return (
        <>
          <div class="container">
            <section class="container-section">
              <div class="row justify-content-between">
                {cardArray.map((item) => {
                  return addCard(item);
                })}
              </div>
            </section>
          </div>
        </>
      );
    }
    if (props.name === "buttonSection") {
      return (
        <div class="container">
          <section class="container-section text-center">
            <div class="row justify-content-center">
              <div class="col-sm-8">
                <h2 class="heading-small mb-4">Register for Whitelist</h2>
                <p>
                  Follow the White Rabbit into Wonderland and begin the magical{" "}
                  <br />
                  journey of intelligent DeFi
                </p>
                <button class="btn btn-secondary mb-2 mt-4">
                  Register for Whitelist
                </button>
              </div>
            </div>
          </section>
        </div>
      );
    }
  };

  return addSection(props);
};

export default Section;
