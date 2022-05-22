import axios from "axios";
import { GET_ERRORS, GET_LABTEST, LOADING } from "./../types";
import { toast } from "react-toastify";
toast.configure();
export const addLabtest = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addLabtest",
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
export const getAllTests = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get("http://localhost:5000/records/labtests");
    dispatch({
      type: GET_LABTEST,
      payload: response.data,
    });
  } catch (error) {}
};
