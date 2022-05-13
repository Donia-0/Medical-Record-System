import {
  LOADING,
  GET_BLOODPRESSURE,
  GET_DETAIL_BLOODPRESSURE,
  CLEAR_RECORDS,
} from "./../../actions/types";

const initialState = {
  bloodPressure: [],
  loading: false,
  bloodPressureDetail: {},
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
    case GET_DETAIL_BLOODPRESSURE:
      return {
        ...state,
        loading: false,
        bloodPressureDetail: action.payload,
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        bloodPressure: [],
        loading: false,
        bloodPressureDetail: {},
      };
    default:
      return state;
  }
}
