//Styles
import "./Section.scss";

//components
import Card from "../../../card/Card";

//images,icons
import MouseIcon from "../../../../assets/images/mouse.png";
import CapIcon from "../../../../assets/images/cap.png";
import DinkIcon from "../../../../assets/images/dink.png";

const getSelectedSection = (section) => {
  let emptyUrl = "";
  if (section === "main") {
    let buttonText = "Connect Wallet";

    return (
      <section className="section-space text-center text-lg-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0 bg-none main-content">
              <h1 className="banner-text mb-3 mb-lg-5">
                Enter The DeFi <br /> Wonderland Of <br /> The Future
              </h1>
              <p className="mb-5">
                Transact, Invest, Loan & Earn on the Worlds <br /> fastest
                Growing decentralised HUB.
              </p>
              <button
                data-toggle="modal"
                data-target="#Modal-Connect"
                className="btn btn-secondary mb-2 mr-2"
              >
                {buttonText}
              </button>
              <button className="btn btn-outline-primary mb-2">CTA</button>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0">
              <img src={MouseIcon} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (section === "cardSection") {
    let mainHeading = (
      <h2 className="heading-small mb-3 mb-lg-5 mb-md-3">
        The Highest
        <br /> Earnings Available
        <br /> On The Blockchain
      </h2>
    );
    let subHeading = (
      <p className="mb-5">
        DeFi Link is trusted by People, DAO’s,
        <br /> Enterprises & Businesses alike to work
        <br />
        smarter, not harder.
      </p>
    );
    return (
      <div className="container">
        <section className=" section-space text-center text-lg-left">
          <div className="d-flex flex-column flex-lg-row row mx-0">
            <div className="col-lg-7 mb-3 mb-lg-0 bg-none align-self-center">
              {mainHeading}
              {subHeading}
            </div>
            <div className="col-lg-5 mb-3 mb-lg-0">
              <Card
                url={emptyUrl}
                name="Users"
                value="2.8 M"
                box="bx1"
                textclassName="text-blue"
              />
              <Card
                url={emptyUrl}
                name="Transactions"
                value="22 M"
                box="bx2"
                textclassName=""
              />
              <Card
                url={emptyUrl}
                name="Liquidity Accessed"
                value="2.8 M"
                box="bx3"
                textclassName="text-aqua"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  if (section === "buttonSection") {
    let mainHeading = (
      <h2 className="heading-small mb-3 mb-lg-5 mb-md-3">
        Build Passive
        <br /> Wealth with Crypto
      </h2>
    );
    let subHeading = (
      <p className="mb-5">
        DeFi Link makes it easy to make your Crypto
        <br /> or Stablecoins work for you
      </p>
    );
    let buttonText = "Connect Wallet";
    return (
      <div className="container">
        <section className="section-space text-center text-lg-left">
          <div className="d-flex flex-column flex-lg-row row mx-0">
            <div className="col-lg-6 mb-3 mb-lg-0 text-center">
              <img src={CapIcon} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0 bg-none align-self-center">
              {mainHeading}
              {subHeading}
              <button
                data-toggle="modal"
                data-target="#Modal-Connect"
                className="btn btn-secondary"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  if (section === "headingSection") {
    let mainHeading = (
      <h2 className="heading-small mb-3 mb-lg-5 mb-md-3">
        Every Transaction Saves The Planet
      </h2>
    );
    let subHeading = (
      <p>
        DeFi Link is committed to protecting and rebuilding forests and our
        beautiful planet.
        <br /> A percentage of all platform revenues is directed to our Planet
        Earth Fund, which is
        <br /> governed by our community DINK token.
      </p>
    );

    return (
      <div className="container">
        <section className="section-space text-center">
          {mainHeading}
          {subHeading}
        </section>
      </div>
    );
  }

  if (section === "imageButtonSection") {
    let mainHeading = (
      <h2 className="mb-5 heading-small">Governed By The Dink Community</h2>
    );
    let subHeading = (
      <p className="mb-5 text-white px-4 px-sm-0">
        DINK token is our governance & utility token. DINK token
        <br /> <br /> holders have rights to propose network updates, new
        launchpad listings &<br /> <br /> pools, Planet Earth Fund allocation,
        and vote on adjusting Platform Parameters.
        <br /> Holders can also stake to earn more crypto and receive platform
        fees!
      </p>
    );
    let buttonText = "Explore Governance";
    return (
      <div className="container px-sm-3 px-0">
        <img src={DinkIcon} className="img-fluid" alt="" />
        <section className="section-space text-center dink-sec text-white">
          {mainHeading}
          {subHeading}
          <button className="btn btn-secondary mb-2">{buttonText}</button>
        </section>
      </div>
    );
  }
  if (section === "headingButtonSection") {
    let mainHeading = <h2 className="mb-4 heading-small">Start Now</h2>;
    let subHeading = (
      <p className="mb-5">
        No registration required to start. Simply <br /> connect your wallet and{" "}
        <b>
          follow the white
          <br />
          rabbit into DeFi Wonderland!
        </b>
      </p>
    );
    let buttonText = "Let's Start";
    return (
      <div className="container">
        <section className="section-space text-center">
          {mainHeading}
          {subHeading}
          <button className="btn btn-secondary">{buttonText}</button>
        </section>
      </div>
    );
  }
};

const Section = (props) => {
  return getSelectedSection(props.section);
};

export default Section;
