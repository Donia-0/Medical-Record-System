import {
  LOADING,
  SEARCH_PATIENT,
  CLEAR_PATIENT_PROFILE,
  PATIENT_RECORD,
} from "./../actions/types";

const initialState = {
  patientProfile: null,
  loading: false,
  records: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_PATIENT:
      return {
        ...state,
        patientProfile: action.payload,
        loading: false,
      };
    case CLEAR_PATIENT_PROFILE:
      return {
        ...state,
        loading: false,
        patientProfile: null,
      };
    case PATIENT_RECORD:
      return {
        ...state,
        records: action.payload,
      };

    default:
      return state;
  }
}
