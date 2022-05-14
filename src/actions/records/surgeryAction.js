import axios from "axios";
import {
  GET_DETAIL_SURGERY,
  GET_ERRORS,
  GET_SURGERY,
  LOADING,
} from "./../types";
import { toast } from "react-toastify";
toast.configure();
export const addSurgery = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addSurgery",
      userData
    );
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
export const getAllSurgery = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get("http://localhost:5000/records/surgeries");
    dispatch({
      type: GET_SURGERY,
      payload: response.data,
    });
  } catch (error) {}
};

export const getSurgeryDetailById = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await axios.get(
      `http://localhost:5000/records/surgery/${id}`
    );
    dispatch({
      type: GET_DETAIL_SURGERY,
      payload: response.data,
    });
  } catch (error) {}
};
export const loading = () => {
  return {
    type: LOADING,
  };
};

export const updateSurgery =
  (id, updatedData, navigate) => async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/records//surgery/edit/${id}`,
        updatedData
      );
      navigate("/records/surgery");
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data.errors,
      });
    }
  };
