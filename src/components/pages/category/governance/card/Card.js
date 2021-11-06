import "./Card.scss";
import CustomChart from "../../../../chart/Chart";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="col-md-6">
      <di className="card  mb-4">
        <div className="card-body">
          <div className="d-flex">
            <div className="chart-card mr-3">
              <CustomChart
                color={props.chartColor}
                type={props.chartType}
                data={props.chartData}
              />
            </div>
            <div>
              <h4 className="heading-default">{props.mainHeading}</h4>
              <small className="text-muted">Total Votes </small>
              <p className="small text-black line-h-auto mb-1">
                {props.totalVotes}
              </p>
              <small className="text-muted">Addresses </small>

              <p className="small mb-0 text-black line-h-auto">
                {props.address}
              </p>
              <button className="btn btn-outline-default btn-sm mt-3">
                <NavLink className="text-black" to="/governance_detail">
                  Vote
                </NavLink>{" "}
                <i class="fa-caret-right fas fs-15 ml-2 text-blue"></i>
              </button>
            </div>
          </div>
        </div>
      </di>
    </div>
  );
};

export default Card;
