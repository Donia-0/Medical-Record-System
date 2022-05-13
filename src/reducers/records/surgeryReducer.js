import { LOADING, GET_SURGERY, CLEAR_RECORDS } from "./../../actions/types";

const initialState = {
  surgeries: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SURGERY:
      return {
        ...state,
        loading: false,
        surgeries: action.payload,
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        surgeries: [],
        loading: false,
      };
    default:
      return state;
  }
}
