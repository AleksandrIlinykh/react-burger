import { AUTH_ENDPOINT } from "../../utils/api";
import { getCookie } from "../../utils/cookies";
import { TUserData } from "../types/data";
import { TAppThunk, TAppDispatch } from "../types/index";
import { checkResponse } from "../../utils/utils";
import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  PASSWORD_RECOVERY_REQUEST,
  PASSWORD_RECOVERY_SUCCESS,
  PASSWORD_RECOVERY_ERROR,
  PASSWORD_UPDATING_REQUEST,
  PASSWORD_UPDATING_SUCCESS,
  PASSWORD_UPDATING_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
} from "../constants/auth";

export type TUserActions =
  | {
      type: typeof REGISTRATION_REQUEST;
    }
  | {
      type: typeof REGISTRATION_ERROR;
    }
  | {
      type: typeof REGISTRATION_SUCCESS;
      payload: {
        user: {
          email: string;
          name: string;
        };
        accessToken: string;
        refreshToken: string;
      };
    }
  | {
      type: typeof AUTHORIZATION_REQUEST;
    }
  | {
      type: typeof AUTHORIZATION_ERROR;
    }
  | {
      type: typeof AUTHORIZATION_SUCCESS;
      payload: {
        user: {
          email: string;
          name: string;
        };
        accessToken: string;
        refreshToken: string;
      };
    }
  | {
      type: typeof PASSWORD_UPDATING_REQUEST;
    }
  | {
      type: typeof PASSWORD_UPDATING_ERROR;
    }
  | {
      type: typeof PASSWORD_RECOVERY_SUCCESS;
    }
  | {
      type: typeof PASSWORD_RECOVERY_REQUEST;
    }
  | {
      type: typeof PASSWORD_RECOVERY_ERROR;
    }
  | {
      type: typeof PASSWORD_UPDATING_SUCCESS;
    }
  | {
      type: typeof LOGOUT_REQUEST;
    }
  | {
      type: typeof LOGOUT_SUCCESS;
    }
  | {
      type: typeof LOGOUT_ERROR;
    }
  | {
      type: typeof GET_USER_INFO_REQUEST;
    }
  | {
      type: typeof GET_USER_INFO_SUCCESS;
      payload: {
        user: {
          email: string;
          name: string;
        };
      };
    }
  | {
      type: typeof GET_USER_INFO_ERROR;
    }
  | {
      type: typeof UPDATE_USER_INFO_REQUEST;
    }
  | {
      type: typeof UPDATE_USER_INFO_SUCCESS;
      payload: {
        user: {
          email: string;
          name: string;
        };
      };
    }
  | {
      type: typeof UPDATE_USER_INFO_ERROR;
    }
  | {
      type: typeof REFRESH_TOKEN_REQUEST;
    }
  | {
      type: typeof REFRESH_TOKEN_SUCCESS;
      payload: {
        accessToken: string;
        refreshToken: string;
      };
    }
  | {
      type: typeof REFRESH_TOKEN_ERROR;
    };

export const registration: TAppThunk =
  (userData: TUserData) => (dispatch: TAppDispatch) => {
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
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: REGISTRATION_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        dispatch({
          type: REGISTRATION_ERROR,
        });
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

export const authorization: TAppThunk =
  (userData: TUserData) => (dispatch: TAppDispatch) => {
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
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: AUTHORIZATION_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        dispatch({
          type: AUTHORIZATION_ERROR,
        });
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

export const recoverPassword: TAppThunk =
  (emailData: { email: string }) => (dispatch: TAppDispatch) => {
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
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: PASSWORD_RECOVERY_SUCCESS,
        });
      })

      .catch((e) => {
        dispatch({
          type: PASSWORD_RECOVERY_ERROR,
        });
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

export const updatePassword: TAppThunk =
  (newPasswordData: { password: string; token: string }) =>
  (dispatch: TAppDispatch) => {
    dispatch({
      type: PASSWORD_UPDATING_REQUEST,
    });
    fetch(`${AUTH_ENDPOINT}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newPasswordData),
    })
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: PASSWORD_UPDATING_SUCCESS,
        });
      })

      .catch((e) => {
        dispatch({
          type: PASSWORD_UPDATING_ERROR,
        });
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

export const logout: TAppThunk = () => {
  const refreshToken = getCookie("refreshToken");
  const data = {
    token: `${refreshToken}`,
  };
  return function (dispatch: TAppDispatch) {
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
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })

      .catch((e) => {
        dispatch({
          type: LOGOUT_ERROR,
        });
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
};

//---------------------------------------------------------------------------GET_USER_INFO-----------------------------
export const getUserInfo: TAppThunk = () => (dispatch: TAppDispatch) => {
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
    .then((res) => checkResponse(res))
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        payload: data,
      });
    })

    .catch((e) => {
      if ((e.message = "403")) {
        dispatch({
          type: GET_USER_INFO_ERROR,
        });
        console.log(((e.message = "403"), "GET_USER_INFO_ERROR"));
      }
    });
};

//---------------------------------------------------------------------------UPDATE_USER_INFO-----------------------------
export const updateUserInfo: TAppThunk =
  (data: { name: string; email: string }) => (dispatch: TAppDispatch) => {
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
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: UPDATE_USER_INFO_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        if ((e.message = "403")) {
          dispatch({
            type: UPDATE_USER_INFO_ERROR,
          });
          console.log(((e.message = "403"), "UPDATE_USER_INFO_ERROR"));
        }
      });
  };

//---------------------------------------------------------------------------UPDATE_TOKEN-----------------------------
export const refreshToken: TAppThunk =
  (
    isGettingUserInfo: boolean,
    data?: {
      name: string;
      email: string;
    }
  ) =>
  (dispatch: TAppDispatch) => {
    dispatch({
      type: REFRESH_TOKEN_REQUEST,
    });

    fetch(`${AUTH_ENDPOINT}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: `${getCookie("refreshToken")}`,
      }),
    })
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: REFRESH_TOKEN_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        dispatch({
          type: REFRESH_TOKEN_ERROR,
        });
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

