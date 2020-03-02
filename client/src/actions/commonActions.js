import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_PARSED_DATA, USER_LOADING } from "./types";

export const fetchParsedData = userData => dispatch => {
  axios
    .post("/api/users/fetch", userData)
    .then(res => {
      const { data } = res.data;
      console.log({ data });
      dispatch(setParsedData(data));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response && err.response.data
      })
    );
};
export const setParsedData = decoded => {
  return {
    type: SET_PARSED_DATA,
    payload: decoded
  };
};
// Set logged in user
