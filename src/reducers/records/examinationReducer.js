import {
  ADD_EXAMINATION,
  GET_EXAMINATION,
  LOADING,
} from "./../../actions/types";

const initialState = {
  newExamination: {},
  Examination: [],
  loading: false,
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
    default:
      return state;
  }
}
