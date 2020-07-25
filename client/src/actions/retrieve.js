import axios from "axios";

import { GET_DOCTORS, GET_LAWYERS } from "./types";
import { returnErrors } from "./messages";

export const getLawyers = () => (dispatch) => {
  axios
    .get("http://localhost:3001/api/lawyers/")
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_LAWYERS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const getDoctors = () => (dispatch) => {
  axios
    .get("http://localhost:3002/api/doctors/")
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_DOCTORS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
