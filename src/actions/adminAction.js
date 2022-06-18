import axios from "axios";
import {
  GET_ALL_REQUESTS,
  GET_DETAIL_USER_REQUEST,
  LOADING,
  ACCEPT_USER_REQUEST,
} from "./types";

export const getRequests = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/admin/allRequests");
    dispatch({
      type: GET_ALL_REQUESTS,
      payload: response.data,
    });
  } catch (error) {}
};

export const getRequestDetail = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      `http://localhost:5000/admin/requestDetails/${id}`
    );
    dispatch({
      type: GET_DETAIL_USER_REQUEST,
      payload: response.data,
    });
  } catch (error) {}
};
export const acceptRequest = (id) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `http://localhost:5000/admin/acceptRequest/${id}`
    );
    dispatch({
      type: ACCEPT_USER_REQUEST,
      payload: response.data,
    });
  } catch (error) {}
};
