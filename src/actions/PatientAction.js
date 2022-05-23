import axios from "axios";
import {
  LOADING,
  SEARCH_PATIENT,
  CLEAR_PATIENT_PROFILE,
  PATIENT_RECORD,
} from "./types";

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

export const verified = (userData) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.post(
      "http://localhost:5000/doctor/verify",
      userData
    );
    localStorage.setItem("patientId", response.data.id);
    localStorage.setItem("patientName", response.data.name);
    window.location.reload();
    dispatch({
      type: PATIENT_RECORD,
      payload: response.data,
    });
  } catch (error) {}
};

export const clearPatientProfile = () => (dispatch) => {
  dispatch({
    type: CLEAR_PATIENT_PROFILE,
  });
  localStorage.removeItem("patientId");
};
