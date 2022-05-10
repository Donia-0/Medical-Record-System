import axios from "axios";
import { LOADING, SEARCH_PATIENT, CLEAR_PATIENT_PROFILE } from "./types";

export const searchPatient = (user) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.post(
      "http://localhost:5000/doctor/searchPatient",
      user
    );
    dispatch({
      type: SEARCH_PATIENT,
      payload: response.data.patient,
    });
  } catch (error) {}
};

export const clearPatientProfile = () => (dispatch) => {
  dispatch({
    type: CLEAR_PATIENT_PROFILE,
  });
};
