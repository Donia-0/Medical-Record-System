import axios from "axios";
import {
  GET_BLOODPRESSURE,
  GET_DETAIL_BLOODPRESSURE,
  GET_ERRORS,
  LOADING,
} from "./../types";
import { toast } from "react-toastify";
toast.configure();
export const addBloodPressure = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addBloodPressure",
      userData
    );
    toast.success("Successfully");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
  }
};
export const getBloodPressure = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await axios.get(
      "http://localhost:5000/records/BloodPressure"
    );
    dispatch({
      type: GET_BLOODPRESSURE,
      payload: response.data,
    });
  } catch (error) {}
};
export const getBloodPressureDetailById = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await axios.get(
      `http://localhost:5000/records/BloodPressure/${id}`
    );
    dispatch({
      type: GET_DETAIL_BLOODPRESSURE,
      payload: response.data,
    });
  } catch (error) {}
};
export const loading = () => {
  return {
    type: LOADING,
  };
};
