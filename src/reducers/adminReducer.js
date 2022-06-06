import {
  GET_ALL_REQUESTS,
  GET_DETAIL_USER_REQUEST,
  LOADING,
} from "../actions/types";

const initialState = {
  loading: false,
  requests: [],
  requestDetail: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REQUESTS:
      return {
        ...state,
        requests: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_DETAIL_USER_REQUEST:
      return {
        ...state,
        loading: false,
        requestDetail: action.payload,
      };
    default:
      return state;
  }
}
