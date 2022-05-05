import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import bloodpressureReducer from "./records/bloodpressureReducer";
import examinationReducer from "./records/examinationReducer";
import glucoseReducer from "./records/glucoseReducer";
import surgeryReducer from "./records/surgeryReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  bloodpressures: bloodpressureReducer,
  examination: examinationReducer,
  glucose: glucoseReducer,
  surgery: surgeryReducer,
});
