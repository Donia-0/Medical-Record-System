import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import bloodpressureReducer from "./records/bloodpressureReducer";
import examinationReducer from "./records/examinationReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  bloodpressure: bloodpressureReducer,
  newExamination: examinationReducer,
});
