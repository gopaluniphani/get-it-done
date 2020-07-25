import axios from "axios";

import { REGISTER_DOCTOR, REGISTER_LAWYER } from "./types";
import { returnErrors, createMessage } from "./messages";

export const registerLawyer = (lawyer) => (dispatch) => {
  axios
    .post("http://localhost:3001/api/lawyers", lawyer)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: REGISTER_LAWYER,
        payload: data,
      });
      dispatch(
        createMessage({ registered: "Successuflly registered a lawyer." })
      );
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(returnErrors(err.message, err.status));
    });
};

export const registerDoctor = (doctor) => (dispatch) => {
  axios
    .post("http://localhost:3002/api/doctors", doctor)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: REGISTER_DOCTOR,
        payload: data,
      });
      dispatch(
        createMessage({ registered: "Successuflly registered a doctor." })
      );
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(returnErrors(err.message, err.status));
    });
};
