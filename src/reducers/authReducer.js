import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "./../validation/isEmpty";

const initialState = {
  isAuhtenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuhtenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
