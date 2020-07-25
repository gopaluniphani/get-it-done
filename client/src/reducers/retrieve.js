import {
  GET_LAWYERS,
  GET_DOCTORS,
  REGISTER_DOCTOR,
  REGISTER_LAWYER,
} from "../actions/types";

const initialState = {
  lawyers: [],
  lawyersLoaded: false,
  doctors: [],
  doctorsLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LAWYERS:
      return {
        ...state,
        lawyers: action.payload,
        lawyersLoaded: true,
      };
    case GET_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
        doctorsLoaded: true,
      };
    case REGISTER_DOCTOR:
      return {
        ...state,
        doctors: [...state.doctors, action.payload],
      };
    case REGISTER_LAWYER:
      return {
        ...state,
        lawyers: [...state.lawyers, action.payload],
      };
    default:
      return state;
  }
}
