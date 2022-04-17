import { ADD_EXAMINATION } from "./../../actions/types";

const initialState = {
  newExamination: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EXAMINATION:
      return {
        ...state,
        newExamination: action.payload,
      };
    default:
      return state;
  }
}
