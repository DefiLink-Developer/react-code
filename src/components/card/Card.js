import "./Card.scss";

const Card = (props) => {
  return (
    <div className={"block-box mb-4 text-left shadow-lg " + props.box}>
      <h2 className="fw-bold">{props.value}</h2>
      <a href={props.url} className={props.textClass}>
        {props.name}
      </a>
    </div>
  );
};

export default Card;
