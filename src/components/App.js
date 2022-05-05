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
import BloodPreasure from "./records/bloodPressure/BloodPreasure";
import Examination from "./records/examination/Examination";
import Addprescription from "./records/examination/Addprescription";
import AddExamination from "./records/examination/AddExamination";
import GlucoseMeasure from "./records/glucose/GlucoseMeasure";
import ViewBloodPressure from "./records/bloodPressure/ViewBloodPressure";
import Viewbloodp from "./records/bloodPressure/Viewbloodp";
import Viewglucose from "./records/glucose/Viewglucose";
import BarChart from "./BarChart";
import AddAllergy from "./records/Allergy/AddAllergy";
import Allergyview from "./records/Allergy/Allergyview";
import Admin from "./Admin/Admin";
import AddSurgery from "./records/surgery/AddSurgery";
import Surgery from "./records/surgery/Surgery";
import BloodChart from "./records/bloodPressure/BloodChart";
import EditExamination from "./records/examination/EditExamination";
import "../Css/ActiveClass.css";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

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
          {/* <Route path="/" element={<Landing />}></Route> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/chart" element={<BarChart />} />
            {/* <Route path="/chart" element={<StackedArea />} /> */}
            <Route exact path="/auth" element={<Auth />}>
              <Route exact path="login" element={<Signin />} />
              <Route exact path="register" element={<Register />} />
            </Route>
            <Route path="/user" element={<Layout />}>
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/records" element={<Layout />}>
              <Route path="bloodpreasure" element={<Viewbloodp />} />
              <Route
                path="bloodpreasure/addbloodp"
                element={<BloodPreasure />}
              />
              <Route
                path="bloodpreasure/:bloodpId"
                element={<BloodPreasure />}
              />
              <Route path="viewbloodpreasure" element={<ViewBloodPressure />} />
              <Route path="glucose" element={<Viewglucose />} />
              <Route path="glucose/addglucose" element={<GlucoseMeasure />} />
              <Route path="glucose/:glucoseId" element={<GlucoseMeasure />} />
              <Route path="examination" element={<Examination />} />
              <Route
                path="examination/addExamination"
                element={<AddExamination header="Add Examination" />}
              />
              <Route
                path="examination/:examId"
                element={<AddExamination header="Update Examination" />}
              />
              <Route path="editexamination" element={<EditExamination />} />
              <Route path="addprescription" element={<Addprescription />} />
              <Route path="surgery" element={<Surgery />} />
              <Route
                path="surgery/addsurgery"
                element={<AddSurgery header="Add Surgery" />}
              />
              <Route
                path="surgery/:surgeryId"
                element={<AddSurgery header="Update Surgery" />}
              />
              <Route path="graph">
                <Route path="blood" element={<BloodChart />} />
              </Route>
            </Route>
            <Route path="admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
