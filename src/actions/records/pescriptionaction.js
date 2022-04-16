import axios from "axios";
import { GET_ERRORS } from "./../types";
import { toast } from "react-toastify";
toast.configure();
export const prescriptionAdd = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addPrescription",
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
