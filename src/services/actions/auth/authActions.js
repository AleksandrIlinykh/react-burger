import { AUTH_ENDPOINT } from "../../../utils/api";

export const REQUEST = "REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const PASSWORD_RECOVERY_SUCCESS = "PASSWORD_RECOVERY_SUCCESS";
export const ERROR = "ERROR";

const request = () => {
  return {
    type: REQUEST,
  };
};

const registrationSuccess = (userData) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: userData,
  };
};

const passwordRecoverySuccess = (userData) => {
  return {
    type: PASSWORD_RECOVERY_SUCCESS,
    payload: userData,
  };
};

const error = (error) => {
  return {
    type: ERROR,
    payload: error,
  };
};

export function registration(userData) {
  return function (dispatch) {
    dispatch(request());
    fetch(`${AUTH_ENDPOINT}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res;
        } else {
          dispatch(error);
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(registrationSuccess(data));
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}

export function recoverPassword(userData) {
  return function (dispatch) {
    dispatch(request());
    fetch(`${AUTH_ENDPOINT}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res;
        } else {
          dispatch(error);
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(passwordRecoverySuccess(data));
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}
