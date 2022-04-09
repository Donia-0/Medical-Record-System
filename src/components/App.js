import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "./layout/Layout";
import Auth from "./Authentication/Auth";
import "../Css/App.css";
import Register from "./Authentication/Register";
import Signin from "./Authentication/Signin";
import { logoutUser, setCurrentUser } from "./../actions/authAction";
import { clearCurrentProfile } from "./../actions/profileAction";
import setAuthToken from "./../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import Profile from "./user/Profile";
import Landing from "./layout/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import BloodPreasure from "./records/bloodPressure/BloodPreasure";
import Examination from "./records/examination/Examination";

import Addprescription from "./records/examination/Addprescription";
import AddExamination from "./records/examination/AddExamination";

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
    <Provider store={store}>
      <BrowserRouter>
        {/* <Route path="/" element={<Landing />}></Route> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/auth" element={<Auth />}>
            <Route exact path="login" element={<Signin />} />
            <Route exact path="register" element={<Register />} />
          </Route>
          <Route path="/user" element={<Layout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="bloodpreasure" element={<BloodPreasure />} />
            <Route path="examination" element={<Examination />} />
            <Route path="addexamination" element={<AddExamination />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
