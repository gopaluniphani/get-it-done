import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import React, { Fragment } from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import store from "./store.js";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/utils/Alerts";

import App from "./App.js";

const alertOptions = {
  timeout: 3000,
  offset: "50px",
  position: "bottom center",
};

const starter = (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Fragment>
        <Alerts />
        <App />
      </Fragment>
    </AlertProvider>
  </Provider>
);

ReactDom.render(starter, document.getElementById("root"));
