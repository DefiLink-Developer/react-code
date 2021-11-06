import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./assets/css/theme.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import ScrollTop from "./components/scroller/ScrollTop";

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <ScrollTop />
      <div id="mysite">
        <App />
        {/* <NewHome /> */}
      </div>
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
