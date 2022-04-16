import { GET_GLUCOSE, LOADING } from "./../../actions/types";

const initialState = {
  glucose: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_GLUCOSE:
      return {
        ...state,
        loading: false,
        glucose: action.payload,
      };
    default:
      return state;
  }
}
