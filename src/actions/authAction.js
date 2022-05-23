import axios from "axios";
import { CLEAR_RECORDS, GET_ERRORS, LOG_OUT, SET_CURRENT_USER } from "./types";
import setAuthToken from "./../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

toast.configure();
//register
export const registerUser = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/user/register",
      userData
    );
    // navigate("/auth/login");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
    const toArray = Object.values(error.response.data.errors);
    toArray.map((err) => {
      toast.error(err, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    });
  }
};
// Login - get user token
export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/user/login",
      userData
    );
    //save to localstorage
    const { token } = response.data;
    // set to ls
    localStorage.setItem("token", token);
    // set token to authentication header
    setAuthToken(token);
    // decode token to get user data
    const decoded = jwt_decode(token);
    //set current user
    dispatch(setCurrentUser(decoded));
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
    const toArray = Object.values(error.response.data.errors);
    toArray.map((err) => {
      toast.error(err, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    });
  }
};

// set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//log user out
export const logoutUser = (navigate) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/user/logout");
    //remove token from localstorage
    localStorage.removeItem("token");
    // remove auth header for future requests
    setAuthToken(false);
    //set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    dispatch({ type: CLEAR_RECORDS });
    navigate("/");
    return {
      type: LOG_OUT,
    };
  } catch (error) {}
};
