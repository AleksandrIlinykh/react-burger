import { AUTH_ENDPOINT } from "../../../utils/api";
import { setCookie, getCookie } from "../../../utils/cookies";

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

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR";

export const UPDATE_USER_INFO_REQUEST = "UPDATE_USER_INFO_REQUEST";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
export const UPDATE_USER_INFO_ERROR = "UPDATE_USER_INFO_ERROR";

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
      type: PASSWORD_RECOVERY_REQUEST,
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
      type: PASSWORD_UPDATING_REQUEST,
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
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}

export function logout() {
  const refreshToken = getCookie("refreshToken");
  const data = {
    token: `${refreshToken}`,
  };
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(`${AUTH_ENDPOINT}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res;
        } else {
          dispatch({
            type: LOGOUT_ERROR,
          });
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}

export function getUserInfo() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_INFO_REQUEST,
    });
    fetch(`${AUTH_ENDPOINT}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("acessToken"),
      },
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          dispatch({
            type: GET_USER_INFO_ERROR,
          });
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_USER_INFO_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}

export function updateUserInfo(data) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_INFO_REQUEST,
    });
    fetch(`${AUTH_ENDPOINT}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + getCookie("acessToken"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res;
        } else {
          dispatch({
            type: UPDATE_USER_INFO_ERROR,
          });
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: UPDATE_USER_INFO_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}
