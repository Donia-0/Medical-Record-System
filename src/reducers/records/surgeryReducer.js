import {
  LOADING,
  GET_SURGERY,
  CLEAR_RECORDS,
  GET_DETAIL_SURGERY,
} from "./../../actions/types";

const initialState = {
  surgeries: [],
  loading: false,
  surgeryDetail: {},
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
    case GET_DETAIL_SURGERY:
      return {
        ...state,
        surgeries: [],
        loading: false,
        surgeryDetail: action.payload,
      };
    default:
      return state;
  }
}
