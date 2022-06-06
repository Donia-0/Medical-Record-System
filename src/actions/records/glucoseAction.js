import {
  GET_ERRORS,
  GET_GLUCOSE,
  LOADING,
  GET_DETAIL_GLUCOSE,
} from "./../types";
import { toast } from "react-toastify";
import axios from "axios";
toast.configure();
const toastNavigate = (msg, navigate) => {
  toast.success(msg, { autoClose: 1500 });
  setTimeout(() => {
    navigate("/records/glucose");
  }, 2000);
};
export const addGlucose = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addGlucose",
      userData
    );
    toastNavigate("Successfully Inserted", navigate);
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
export const getGlucose = (userId) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.post(
      "http://localhost:5000/records/glucoses",
      userId
    );
    dispatch({
      type: GET_GLUCOSE,
      payload: response.data,
    });
  } catch (error) {}
};

export const getGlucoseDetailById = (id) => async (dispatch) => {
  dispatch(dispatch({ type: LOADING }));
  try {
    const response = await axios.get(
      `http://localhost:5000/records/glucose/${id}`
    );
    dispatch({
      type: GET_DETAIL_GLUCOSE,
      payload: response.data,
    });
  } catch (error) {}
};

export const updateGlucose =
  (id, updatedData, navigate) => async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/records/glucose/edit/${id}`,
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
