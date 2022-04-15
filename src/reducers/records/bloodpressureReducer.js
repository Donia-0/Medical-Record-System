import { LOADING, GET_BLOODPRESSURE } from "./../../actions/types";

const initialState = {
  bloodPressure: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOODPRESSURE:
      return {
        ...state,
        loading: false,
        bloodPressure: action.payload,
      };
    default:
      return state;
  }
}
