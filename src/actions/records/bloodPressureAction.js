import axios from "axios";
import {
  GET_BLOODPRESSURE,
  GET_DETAIL_BLOODPRESSURE,
  GET_ERRORS,
  LOADING,
} from "./../types";
import { toast } from "react-toastify";
toast.configure();
const toastNavigate = (msg, navigate) => {
  toast.success(msg, { autoClose: 1500 });
  setTimeout(() => {
    navigate("/records/bloodpreasure");
  }, 2000);
};
export const addBloodPressure = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addBloodPressure",
      userData
    );
    toastNavigate("Successfully Inserted", navigate);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
  }
};
export const getBloodPressure = (userId) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await axios.post(
      "http://localhost:5000/records/BloodPressure",
      userId
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

export const updateBloodPressure =
  (id, updatedData, navigate) => async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/records/BloodPressure/edit/${id}`,
        updatedData
      );
      toastNavigate("Successfully Updated", navigate);
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data.errors,
      });
    }
  };
