import { LOADING, GET_SURGERY } from "./../../actions/types";

const initialState = {
  surgeries: [],
  loading: false,
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
    default:
      return state;
  }
}
