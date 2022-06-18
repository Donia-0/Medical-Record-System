import {
  GET_PRESCRIPTION,
  LOADING,
  GET_PRESCRIPTION_FOR_EACH_EXAMINATION,
  GET_DETAIL_PRESCRIPTION,
  CLEAR_RECORDS,
  CLEAR_CURRENT_PROFILE,
} from "../../actions/types";

const initialState = {
  prescriptions: [],
  loading: false,
  prescriptionDetail: {},
  prescriptionsForEachExamination: [],
  prescriptionDetail: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRESCRIPTION:
      return {
        ...state,
        loading: false,
        prescriptions: action.payload,
      };
    case GET_PRESCRIPTION_FOR_EACH_EXAMINATION:
      return {
        ...state,
        loading: false,
        prescriptionsForEachExamination: action.payload,
      };
    case GET_DETAIL_PRESCRIPTION:
      return {
        ...state,
        loading: false,
        prescriptionDetail: action.payload,
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        prescriptions: [],
        loading: false,
        prescriptionDetail: {},
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        prescriptions: [],
        loading: false,
        prescriptionDetail: {},
      };
    default:
      return state;
  }
}
