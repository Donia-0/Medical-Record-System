import { CLEAR_RECORDS, GET_GLUCOSE, LOADING } from "./../../actions/types";

const initialState = {
  glucose: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_GLUCOSE:
      return {
        ...state,
        loading: false,
        glucose: action.payload,
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        glucose: [],
        loading: false,
      };
    default:
      return state;
  }
}
