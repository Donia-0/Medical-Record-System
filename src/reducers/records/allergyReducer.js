import { CLEAR_RECORDS, GET_ALLERGIES, LOADING } from "../../actions/types";

const initialState = {
  allergies: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALLERGIES:
      return {
        ...state,
        allergies: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        allergies: [],
        loading: false,
      };
    default:
      return state;
  }
}
