import { combineReducers } from "redux";

import errors from "./errors";
import messages from "./messages";
import retrieve from "./retrieve";

export default combineReducers({
  errors,
  messages,
  retrieve,
});
