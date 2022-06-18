import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import patientReducer from "./patientReducer";
import profileReducer from "./profileReducer";
import allergyReducer from "./records/allergyReducer";
import bloodpressureReducer from "./records/bloodpressureReducer";
import examinationReducer from "./records/examinationReducer";
import glucoseReducer from "./records/glucoseReducer";
import surgeryReducer from "./records/surgeryReducer";
import prescriptionReducer from "./records/prescriptionReducer";
import adminReducer from "./adminReducer";
import labtestReducer from "./records/labtestReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  bloodpressures: bloodpressureReducer,
  examination: examinationReducer,
  glucose: glucoseReducer,
  surgery: surgeryReducer,
  patient: patientReducer,
  allergy: allergyReducer,
  prescription: prescriptionReducer,
  labtest: labtestReducer,
  admin: adminReducer,
});
