import {
  ADD_EXAMINATION,
  CLEAR_RECORDS,
  GET_EXAMINATION,
  LOADING,
  GET_DETAIL_EXAMINATION,
} from "./../../actions/types";

const initialState = {
  newExamination: {},
  Examination: [],
  loading: false,
  examinationDetail: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EXAMINATION:
      return {
        ...state,
        newExamination: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_EXAMINATION:
      return {
        ...state,
        Examination: action.payload,
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        Examination: [],
        loading: false,
        newExamination: {},
      };
    case GET_DETAIL_EXAMINATION:
      return {
        ...state,
        loading: false,
        examinationDetail: action.payload,
      };
    default:
      return state;
  }
}
