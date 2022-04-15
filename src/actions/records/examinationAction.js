import axios from "axios";
import { GET_ERRORS, ADD_EXAMINATION } from "./../types";
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
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
  }
};
