import {
  CLEAR_RECORDS,
  GET_GLUCOSE,
  LOADING,
  GET_DETAIL_GLUCOSE,
} from "./../../actions/types";

const initialState = {
  glucose: [],
  loading: false,
  glucoseDetail: {},
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
    case GET_DETAIL_GLUCOSE:
      return {
        ...state,
        loading: false,
        glucoseDetail: action.payload,
      };
    default:
      return state;
  }
}
