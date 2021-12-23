import { AUTH_ENDPOINT } from "../../../utils/api";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";

const registrationRequest = () => {
  return {
    type: REGISTRATION_REQUEST,
  };
};

const registrationSuccess = (userData) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: userData,
  };
};

const registrationError = (error) => {
  return {
    type: REGISTRATION_ERROR,
    payload: error,
  };
};

export function registration(userData) {
  return function (dispatch) {
    dispatch(registrationRequest());
    fetch(`${AUTH_ENDPOINT}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          dispatch(registrationError);
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then(
        (data) => console.log(data) /*dispatch(registrationSuccess(data.data))*/
      )
      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}
