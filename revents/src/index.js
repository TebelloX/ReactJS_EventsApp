import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";

const rootEl = document.getElementById("root");

console.log("freeeeeeeeeee");

function render() {
  console.log("inside render");
  ReactDOM.render(<App />, rootEl);
}

if (module.hot) {
  console.log("xxxx12");
  module.hot.accept("./app/layout/App", function () {
    console.log("set.......");
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
