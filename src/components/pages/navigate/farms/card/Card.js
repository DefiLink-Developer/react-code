import "./Card.scss";
import W1 from "../../../../../assets/images/w1.png";
import IC1 from "../../../../../assets/images/ic1.png";
import { useState } from "react";

const Card = (props) => {
  let buttonText = "Connect Wallet";
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="col-md-6 col-xl-4 mb-4">
      <div className="wonder-box shadow-sm">
        <div className="wonder-box-header mb-4">
          <div className="row mb-4">
            <div className="col-lg-6 col-md-12 col-sm-6 col-6">
              <img src={W1} className="mr-0 mr-sm-2" alt="" />
              <h2 className="d-inline-block"> {props.mainHeading}</h2>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-6 col-6">
              <div className="align-items-center d-flex justify-content-lg-end justify-content-md-start justify-content-sm-end justify-content-end ">
                <span>
                  <img src={IC1} className="mr-1" alt="" />
                  Core
                </span>
                <span className="btn-box ml-3">40x</span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="wonder-fee mr-4">
              APR: <b>{props.apr}</b>
            </div>
            <div className="wonder-fee">
              Earn: <b>{props.earn}</b>
            </div>
          </div>
        </div>
        <div className="dash-seperator my-3"></div>
        <div className="wonder-box-body mb-3">
          <div className="row mb-3">
            <div className="col-6">
              <p className="mb-2 dwon-text line-height-12">
                <b>{props.subHeading1}</b>
              </p>
              <h6 className="text-muted">{props.subHeading1Value}</h6>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-disabled">
                {props.subHeading1Button}
              </button>
            </div>
          </div>
          <p className="f12 mb-2">
            <b>{props.subHeading2}</b>
          </p>
          <button className="btn btn-outline-primary btn-block">
            {buttonText}
          </button>
        </div>
        <div className="wonder-box-footer">
          <a
            href="/#"
            className="detail-drop droper d-flex justify-content-center text-black collapsed"
            data-toggle="collapse"
            data-target={"#" + props.cardName}
            onClick={(e) => {
              setIsExpand(!isExpand);
            }}
          >
            {isExpand ? "Hide Detail " : "More Detail"}{" "}
            {isExpand ? (
              <i class="fa-sort-up fas ml-2"></i>
            ) : (
              <i class="fa-sort-down fas ml-2"></i>
            )}
          </a>

          <section id={props.cardName} className="collapse">
            <p className="text-muted f12 mb-0">
              Total Liquidity: <b className="text-black">$2,582,039</b>
            </p>
            <p className="text-theme f12 mb-0">
              Get DWON-BNB LP <i class="fas fa-external-link-square-alt"></i>
            </p>
            <p className="text-theme f12 mb-0">
              View Contract <i class="fas fa-external-link-square-alt"></i>
            </p>
            <p className="text-theme f12 mb-0">
              See Pair Info <i class="fas fa-external-link-square-alt"></i>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
