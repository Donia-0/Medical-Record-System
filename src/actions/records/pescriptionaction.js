import axios from "axios";
import {
  GET_ERRORS,
  GET_PRESCRIPTION,
  LOADING,
  GET_PRESCRIPTION_FOR_EACH_EXAMINATION,
} from "./../types";
import { toast } from "react-toastify";
toast.configure();
export const prescriptionAdd = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/records/addPrescription",
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

export const getPrescriptions = (userId) => async (dispatch) => {
  dispatch(
    dispatch({
      type: LOADING,
    })
  );
  try {
    const response = await axios.post(
      "http://localhost:5000/records/prescriptions",
      userId
    );
    dispatch({
      type: GET_PRESCRIPTION,
      payload: response.data,
    });
  } catch (error) {}
};

export const getPrescriptionForEachExamination =
  (examId) => async (dispatch) => {
    dispatch(
      dispatch({
        type: LOADING,
      })
    );
    try {
      const response = await axios.post(
        "http://localhost:5000/records/examination-prescriptions",
        examId
      );
      dispatch({
        type: GET_PRESCRIPTION_FOR_EACH_EXAMINATION,
        payload: response.data,
      });
    } catch (error) {}
  };
