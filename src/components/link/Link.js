import "./Link.scss";
import { NavLink } from "react-router-dom";

const getNavigator = (info) => {
  if (info.type === "1") {
    return info.data.map((val) => {
      return (
        <li className={info.mainClass}>
          <NavLink
            className={info.subClass}
            to={val.url}
            activeClassName={info.activeClass}
          >
            {val.name}
          </NavLink>
        </li>
      );
    });
  }
  if (info.type === "2") {
    return info.data.map((val) => {
      return (
        <NavLink
          className={info.subClass}
          to={val.url}
          activeClassName={info.activeClass}
        >
          {val.name}
        </NavLink>
      );
    });
  }

  if (info.type === "3") {
    return info.data.map((val) => {
      return (
        <li className={info.mainClass}>
          <NavLink
            className={info.subClass}
            to={val.url}
            activeClassName={info.activeClass}
          >
            <i class={"fab " + val.name} aria-hidden="true"></i>
          </NavLink>
        </li>
      );
    });
  }
};

const Link = (props) => {
  return getNavigator(props.info);
};

export default Link;
