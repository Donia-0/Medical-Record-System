import axios from "axios";
import {
  GET_ERRORS,
  ADD_EXAMINATION,
  LOADING,
  GET_EXAMINATION,
} from "./../types";

import { toast } from "react-toastify";
toast.configure();

export const addExamination = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addExamination",
      userData
    );
    dispatch({
      type: ADD_EXAMINATION,
      payload: response.data,
    });
    toast.success("Successfully");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
  }
};

export const getExaminations = (userId) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.post(
      "http://localhost:5000/records/examinations",
      userId
    );
    dispatch({
      type: GET_EXAMINATION,
      payload: response.data,
    });
  } catch (error) {}
};
export const editExamination = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/editExamination",
      userData
    );
    dispatch({
      type: ADD_EXAMINATION,
      payload: response.data,
    });
    toast.success("Successfully");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
  }
};
