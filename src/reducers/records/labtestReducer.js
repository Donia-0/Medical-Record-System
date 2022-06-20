import { CLEAR_RECORDS, GET_LABTEST, LOADING } from "./../../actions/types";

const initialState = {
  labTests: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LABTEST:
      return {
        ...state,
        loading: false,
        labTests: action.payload,
      };
    case CLEAR_RECORDS:
      return {
        ...state,
        labTests: [],
        loading: false,
      };
    default:
      return state;
  }
}
