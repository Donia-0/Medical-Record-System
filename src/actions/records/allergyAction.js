import axios from "axios";

import { toast } from "react-toastify";
import { GET_ALLERGIES, GET_ERRORS, LOADING } from "../types";
import { GET_DETAIL_ALLERGY } from "./../types";
toast.configure();
export const addAllergy = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addAllergy",
      userData
    );
    toast.success("Successfully");
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
  }
};
export const getAllergies = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get("http://localhost:5000/records/allergies");
    dispatch({
      type: GET_ALLERGIES,
      payload: response.data,
    });
  } catch (error) {}
};
export const getAllergyDetailById = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      `http://localhost:5000/records/allergies/${id}`
    );
    dispatch({
      type: GET_DETAIL_ALLERGY,
      payload: response.data,
    });
  } catch (error) {}
};
export const loading = () => {
  return {
    type: LOADING,
  };
};
