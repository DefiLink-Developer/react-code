import "./Card.scss";

import RewardIcon from "../../../../../assets/images/rewards.png";
import PaymentIcon from "../../../../../assets/images/payments.png";
import DashboardIcon from "../../../../../assets/images/con-dashboard.png";

const getSelectedCard = (props) => {
  if (props.card === "type1") {
    return (
      <div className="card shadow-sm rounded">
        <div className="card-body">
          <div className="number-card mb-4">{props.number}</div>
          <h4 className="fs-20 graphic-medium mb-3">{props.heading}</h4>
          <p className="text-normal">{props.detail}</p>
        </div>
      </div>
    );
  }

  if (props.card === "type2") {
    return (
      <div className="card shadow-sm rounded">
        <div className="card-body pt-35">
          <img
            className="mb-4"
            src={
              props.img === "reward"
                ? RewardIcon
                : props.img === "payment"
                ? PaymentIcon
                : DashboardIcon
            }
          />
          <h4 className="fs-20 graphic-medium mb-3">{props.heading}</h4>
          <p className="text-normal">{props.detail}</p>
        </div>
      </div>
    );
  }

  if (props.card === "type3") {
    return (
      <div className="card">
        <div className="card-header" id={"heading" + props.id}>
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              data-target={"#collapse" + props.id}
              data-toggle="collapse"
              type="button"
            >
              <span className="icon">
                <i class="fa fa-sort-down"></i>
              </span>{" "}
              {props.detail}
            </button>
          </h2>
        </div>
        <div
          aria-labelledby={"heading" + props.id}
          className="collapse"
          data-parent="#accordionExample"
          id={"collapse" + props.id}
        >
          <div className="card-body">
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    );
  }
};

const Card = (props) => {
  return getSelectedCard(props);
};

export default Card;
