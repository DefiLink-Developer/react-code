import "./Section.scss";

import KittyIcon from "../../../../../assets/images/affiliate-kitty.png";

import BannerIcon from "../../../../../assets/images/affiliate-banner.png";
import Card from "../card/Card";

const getSelectedSection = (section) => {
  if (section === "main") {
    let mainHeadingText = "Join the Wonderland Affiliate Program";
    let subHeadingText =
      "Monetize your audience and earn high recurring income when you share DeFi Wonderland. Content creators, platforms, and influencers can earn crypto on every trade or investment made by the people they refer.";
    let buttonText = "Become A Super Affiliate";
    return (
      <section className="section-space pb-1 pb-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0 bg-none">
              <h1 className="banner-text mb-3 mb-lg-4">{mainHeadingText}</h1>
              <p className="mb-5 text-sm-normal">{subHeadingText}</p>
              <div className="text-sm-left text-center">
                <button className="btn btn-secondary mb-2 mr-sm-2 px-4">
                  {buttonText}
                </button>
              </div>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0 mt-sm-0 mt-5">
              <img className="img-fluid" src={BannerIcon} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section === "cardHeadingSection") {
    let mainHeadingText = "How Does The Wonderland Affiliate Program Work?";
    let subHeadingText = "Recommend Wonderland. Earn Crypto";
    return (
      <section className=" section-space mb-0">
        <div className="container">
          <div className="">
            <h2 className="heading-small mb-2">{mainHeadingText}</h2>
            <p className="mb-5 text-sm-normal">{subHeadingText}</p>
          </div>
          <div className="row card-affiliate no-sm-gutters flex-column flex-lg-row row mx-0">
            <div className="col-lg-6 mb-3 mb-lg-0 pl-sm-0">
              <Card
                card="type1"
                number="1"
                heading="Register as an affiliate"
                detail="Mint an affiliate NFT on your platform profile for 1.5 WNDR
                    token by clicking the button below. All affiliate rewards
                    are attached to this NFT… So don’t lose it!"
              />
            </div>
            <div className="col-lg-3 mb-3 mb-lg-0">
              <Card
                card="type1"
                number="2"
                heading="Share your affiliate link"
                detail="Create, manage and track the performance of your affiliates
                from inside the Affiliate Hub."
              />
            </div>
            <div className="col-lg-3 mb-3 mb-lg-0 pr-0">
              <Card
                card="type1"
                number="3"
                heading="Earn passive income"
                detail="When users create a profile using your link, you’ll receive
                commission on everything they do!"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section === "imageHeadingSection") {
    let detail1 =
      "All affiliate commissions are split among two places. 80% goes directly to the affiliate who referred that user, based on the Affiliate NFT they hold, and 20% goes towards a ‘Super Affiliate Kitty’.";

    let detail2 =
      "This is a kitty fund that is distributed evenly among Super Affiliates, as an extra bonus reward for being so active in building the Wonderland Community";

    return (
      <section className="section-space pb-3 pb-sm-4">
        <div className="container">
          <div className="card card-dark mb-3 text-white p-sm-40">
            <div className="card-body">
              <div className="align-items-center row">
                <div className="col-lg-6 mb-3 mb-lg-0 bg-none main-content">
                  <h2 className="heading-small mb-3 pt-sm-0 pt-4">
                    Become a Super Affiliate
                    <br />
                    To Join The Super Affiliate Kitty!
                  </h2>
                  <p className="text-white text-normal mb-4">{detail1}</p>
                  <p className="text-white text-normal mb-5">{detail2}</p>
                  <div className="text-sm-left text-center">
                    <button className="btn btn-secondary mb-2 mr-sm-2">
                      Join Now
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0 mt-sm-0 mt-5 text-center">
                  <img className="img-fluid" src={KittyIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section === "qSection1") {
    return (
      <section className="section-space py-0 py-sm-5">
        <div className="container">
          <h2 className="heading-small mb-4">How do I qualify?</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="text-normal fs-16">
                To qualify as a Super Affiliate, an affiliate must reach a
                minimum of 50 referred users, and a minimum platform fees volume
                among all users of $5000. Once hitting these targets, Affiliates
                will be invited to upgrade their Affiliate NFT to a Super
                Affiliate NFT!
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-normal fs-16">
                What’s more, like any income-earning business, an affiliate
                could sell their NFT to another entity for an upfront stack of
                crypto!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section === "dataSection") {
    return (
      <section className="section-space py-0 py-sm-4">
        <div className="container">
          <h2 className="heading-small mb-4">
            Earn Super Affiliate Commission
          </h2>
          <div className="card commission-card rounded shadow-lg">
            <div className="card-body rounded p-0">
              <div className="d-flex flex-sm-column bg-l-green rounded">
                <div className="d-sm-flex py-3 px-0 px-sm-4 bg-white rounded">
                  <div className="col-md-1">
                    <small className="fs-12 text-muted text-uppercase">
                      Swaps
                    </small>
                  </div>
                  <div className="col-md-2">
                    <small className="fs-12 text-muted text-uppercase">
                      Fund Performance
                    </small>
                  </div>
                  <div className="col-md-1 mt-sm-0 mt-4">
                    <small className="fs-12 text-muted text-uppercase">
                      Farms
                    </small>
                  </div>
                  <div className="col-md-3 mt-sm-0 mt-4">
                    <small className="fs-12 text-muted text-uppercase">
                      Commissions split
                    </small>
                  </div>
                  <div className="col-md-3 mt-sm-0 mt-4">
                    <small className="fs-12 text-muted text-uppercase">
                      Super Affiliate Eligibility
                    </small>
                  </div>
                </div>
                <div className="d-sm-flex py-3 px-2 px-sm-4">
                  <div className="col-md-1">
                    <span className="fs-16">20%</span>
                  </div>
                  <div className="col-md-2">
                    <span className="fs-16">20%</span>
                  </div>
                  <div className="col-md-1 mt-sm-0 mt-4">
                    <span className="fs-16">20%</span>
                  </div>
                  <div className="col-md-3 mt-sm-0 mt-4">
                    <span className="fs-16">
                      80/20. 80% to the referrer, 20% to the Super Affiliate
                      Kitty which is divided among all Super Affiliates
                    </span>
                  </div>
                  <div className="col-md-3 mt-sm-0 mt-4">
                    <span className="fs-16">
                      Minimum of 50 referred parties & $5000 USD / mo in
                      platform fees collected.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    );
  }

  if (section === "cardSection") {
    let mainHeadingText = "Additional Affiliate Benefits";
    return (
      <section className=" section-space text-lg-left py-0 py-sm-4">
        <div className="container">
          <div className="">
            <h2 className="heading-small mb-3">{mainHeadingText}</h2>
          </div>
          <div className="row card-benifit no-sm-gutters flex-column flex-lg-row row mx-0">
            <div className="col-lg-4 mb-3 mb-lg-0 pl-0">
              <div className="card shadow-sm rounded">
                <Card
                  card="type2"
                  img="reward"
                  heading="More rewards"
                  detail="Earn bonus rewards when you reach Super Affiliate status, including
            a percentage of all commissions collected across the entire
            ecosystem… Even from referees that weren’t yours!"
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0">
              <Card
                card="type2"
                img="payment"
                heading="Convenient payments"
                detail="Get paid ongoing for every referred user, with no limit and
                  lifetime attribution."
              />
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0 pr-0">
              <Card
                card="type2"
                img="dashboard"
                heading="Convenient Dashboard"
                detail="Gain access to professional support, tutorials, marketing
                material, and a dedicated Binance Affiliate manager."
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (section === "expandSection") {
    let mainHeadingText = "Affiliate FAQ";
    return (
      <section className="section-space pb-0 pb-sm-0 pt-0">
        <div className="container">
          <h2 className="heading-small mb-3">{mainHeadingText}</h2>
          <div className="faq-s">
            <div className="accordion" id="accordionExample">
              <Card
                card="type3"
                id="One"
                detail="Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip"
                body="Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
              />
              <Card
                card="type3"
                id="Two"
                detail="Excepteur sint occaecat cupidatat non proident, sunt in
                culpa"
                body="Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
              />
              <Card
                card="type3"
                id="Three"
                detail="Qui officia deserunt mollit anim id est laborum."
                body="Duis aute irure dolor in reprehenddeserunt mollit anim id
                est laborum."
              />
              <Card
                card="type3"
                id="Four"
                detail="Qui officia deserunt mollit anim id est laborum."
                body="Duis aute irure dolor in reprehenddeserunt mollit anim id
                est laborum."
              />
            </div>
          </div>
        </div>{" "}
      </section>
    );
  }

  if (section === "buttonSection") {
    let mainHeadingText = "Promote DeFi Wonderland. Get Paid. Simple right?";
    let buttonText = "Become A Super Affiliate";
    return (
      <section className="section-space text-center">
        {" "}
        <div className="container">
          <h2 className="mb-4 heading-small">{mainHeadingText}</h2>
          <button className="btn btn-secondary">{buttonText}</button>
        </div>{" "}
      </section>
    );
  }
};

const Section = (props) => {
  return getSelectedSection(props.section);
};

export default Section;
