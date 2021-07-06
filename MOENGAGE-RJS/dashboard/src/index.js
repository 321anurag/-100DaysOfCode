import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeaderTop from "./components/headerTop.js";
import Widget from "./components/widget.js";

ReactDOM.render(
  <React.StrictMode>
    <HeaderTop />
    <Widget />
    <Widget />
    <Widget />
    <Widget />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
