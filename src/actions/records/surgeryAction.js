import axios from "axios";
import { GET_ERRORS, GET_SURGERY, LOADING } from "./../types";
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
