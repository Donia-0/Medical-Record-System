import {
  GET_PRESCRIPTION,
  LOADING,
  GET_PRESCRIPTION_FOR_EACH_EXAMINATION,
} from "../../actions/types";

const initialState = {
  prescriptions: [],
  loading: false,
  prescriptionDetail: {},
  prescriptionsForEachExamination: [],
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

    default:
      return state;
  }
}
