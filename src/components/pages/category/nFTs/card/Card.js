import "./Card.scss";

const Card = (props) => {
  return (
    <div className="col-md-6 col-xl-4 mb-4">
      <div className="wonder-box nft-box shadow-sm">
        <div className={"wonder-box-body " + props.background}></div>
        <div className="wonder-box-footer">
          <span>
            <b>{props.title}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
