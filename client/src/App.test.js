import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

it("renders app without errors", () => {
  let test = document.createElement("div");
  ReactDOM.render(<App />, test);
});
