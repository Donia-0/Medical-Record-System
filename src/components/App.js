import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "./layout/Layout";
import Auth from "./Authentication/Auth";
import Register from "./Authentication/Register";
import Signin from "./Authentication/Signin";
import { logoutUser, setCurrentUser } from "./../actions/authAction";
import { clearCurrentProfile } from "./../actions/profileAction";
import setAuthToken from "./../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import Profile from "./user/Profile";
import Landing from "./layout/Landing";
import FormBloodPressure from "./records/bloodPressure/FormBloodPressure";
import ViewExamination from "./records/examination/ViewExamination";
import FormPrescription from "./records/examination/prescription/FormPrescription";
import FormExamination from "./records/examination/FormExamination";
import FormGlucoseMeasure from "./records/glucose/FormGlucoseMeasure";
import ViewBloodPressure from "./records/bloodPressure/ViewBloodPressure";
import Viewglucose from "./records/glucose/Viewglucose";
import Admin from "./Admin/Admin";
import FormSurgery from "./records/surgery/FormSurgery";
import ViewSurgery from "./records/surgery/ViewSurgery";
import BloodChart from "./records/bloodPressure/BloodChart";
import EditExamination from "./records/examination/EditExamination";
import "../Css/ActiveClass.css";
import "../Css/App.css";
import "../Css/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import ViewPrescription from "./records/examination/prescription/ViewPrescription";
import AddAllergy from "./records/Allergy/AddAllergy";
import Allergy from "./records/Allergy/Allergy";
import PillIdentifier from "./Pill/PillIdentifier";

//check for token
if (localStorage.token) {
  //set auth token header auth
  setAuthToken(localStorage.token);
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.token);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());

    window.location.href = "/login";
  }
}

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route exact path="/auth" element={<Auth />}>
              <Route exact path="login" element={<Signin />} />
              <Route exact path="register" element={<Register />} />
            </Route>
            <Route path="/user" element={<Layout />}>
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/records" element={<Layout />}>
              <Route path="bloodpreasure" element={<ViewBloodPressure />} />
              <Route
                path="bloodpreasure/addbloodpressure"
                element={<FormBloodPressure header="Add blood pressure" />}
              />
              <Route
                path="bloodpreasure/edit/:bloodpId"
                element={<FormBloodPressure header="Update blood pressure" />}
              />
              <Route path="glucose" element={<Viewglucose />} />
              <Route
                path="glucose/addglucose"
                element={
                  <FormGlucoseMeasure header="Add Glucose Measurement" />
                }
              />
              <Route
                path="glucose/edit/:glucoseID"
                element={
                  <FormGlucoseMeasure header="Update Glucose Measurement" />
                }
              />

              <Route path="examination" element={<ViewExamination />} />
              <Route
                path="examination/addExamination"
                element={<FormExamination header="Add Examination" />}
              />
              <Route
                path="examination/:examId"
                element={<FormExamination header="Update Examination" />}
              />
              <Route path="editexamination" element={<EditExamination />} />
              <Route
                path="prescriptions/addprescription"
                element={<FormPrescription header="Add Prescription" />}
              />
              <Route
                path="prescriptions/edit/:prescriptionId"
                element={<FormPrescription header="Update Prescription" />}
              />
              {/* <Route
                path="updateprescription"
                element={<Updateprescription />}
              />
              <Route path="ViewBloodPressure" element={<ViewBloodPressure />} />
              <Route path="viewall" element={<ViewPrescription />} />
              /> */}
              <Route path="prescriptions" element={<ViewPrescription />} />
              <Route path="Viewglucose" element={<Viewglucose />} />
              <Route path="addsurgery" element={<FormSurgery />} />
              <Route path="surgery" element={<ViewSurgery />} />
              <Route
                path="surgery/addsurgery"
                element={<FormSurgery header="Add Surgery" />}
              />
              <Route
                path="surgery/edit/:surgeryId"
                element={<FormSurgery header="Update Surgery" />}
              />
              <Route path="bloodpreasure">
                <Route path="graph">
                  <Route path="blood" element={<BloodChart />} />
                </Route>
              </Route>
              <Route path="allergy" element={<Allergy />} />
            </Route>
            <Route path="admin" element={<Admin />} />
            <Route path="/" element={<Layout />}>
              <Route path="pillidentifier" element={<PillIdentifier />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
