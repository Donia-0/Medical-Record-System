import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
} from "./types";

//get current profile
export const getCurrentProfile = () => async (dispatch) => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.get("http://localhost:5000/user/me");
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });
  } catch (error) {}
};

// profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

// profile loading
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};
