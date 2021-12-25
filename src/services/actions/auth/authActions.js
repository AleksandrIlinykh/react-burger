import { AUTH_ENDPOINT } from "../../../utils/api";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";

export const AUTHORIZATION_REQUEST = "AUTHORIZATION_REQUEST";
export const AUTHORIZATION_SUCCESS = "AUTHORIZATION_SUCCESS";
export const AUTHORIZATION_ERROR = "AUTHORIZATION_ERROR";

export const PASSWORD_RECOVERY_REQUEST = "PASSWORD_RECOVERY_REQUEST";
export const PASSWORD_RECOVERY_SUCCESS = "PASSWORD_RECOVERY_SUCCESS";
export const PASSWORD_RECOVERY_ERROR = "PASSWORD_RECOVERY_ERROR";

export const PASSWORD_UPDATING_REQUEST = "PASSWORD_UPDATING_REQUEST";
export const PASSWORD_UPDATING_SUCCESS = "PASSWORD_RECOVERY_SUCCESS";
export const PASSWORD_UPDATING_ERROR = "PASSWORD_UPDATING_ERROR";

export function registration(userData) {
  return function (dispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    fetch(`${AUTH_ENDPOINT}/auth/register`, {
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
          dispatch({
            type: REGISTRATION_ERROR,
          });
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: REGISTRATION_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}

export function authorization(userData) {
  return function (dispatch) {
    dispatch({
      type: AUTHORIZATION_REQUEST,
    });
    fetch(`${AUTH_ENDPOINT}/auth/login`, {
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
          dispatch({
            type: AUTHORIZATION_ERROR,
          });
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: AUTHORIZATION_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}

export function recoverPassword(emailData) {
  return function (dispatch) {
    dispatch({
      type: PASSWORD_RECOVERY_SUCCESS,
    });
    fetch(`${AUTH_ENDPOINT}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(emailData),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res;
        } else {
          dispatch({
            type: PASSWORD_RECOVERY_ERROR,
          });
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: PASSWORD_RECOVERY_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}

export function updatePassword(newData) {
  return function (dispatch) {
    dispatch({
      type: PASSWORD_UPDATING_SUCCESS,
    });
    fetch(`${AUTH_ENDPOINT}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res;
        } else {
          dispatch({
            type: PASSWORD_UPDATING_ERROR,
          });
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: PASSWORD_UPDATING_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}