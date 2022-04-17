import { GET_ERRORS, GET_GLUCOSE, LOADING } from "./../types";
import { toast } from "react-toastify";
import axios from "axios";
toast.configure();

export const addGlucose = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addGlucose",
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
export const getGlucose = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get("http://localhost:5000/records/glucoses");
    dispatch({
      type: GET_GLUCOSE,
      payload: response.data,
    });
    console.log(response.data);
  } catch (error) {}
};
