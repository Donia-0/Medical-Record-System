import { GET_SURGERY, LOADING } from "../../actions/types";

const initialState = {
  loading: false,
  suregries: {},
};

export default function name(state = initialState, action) {
  switch (action.type) {
    case GET_SURGERY:
      return {
        ...state,
        loading: false,
        suregries: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
