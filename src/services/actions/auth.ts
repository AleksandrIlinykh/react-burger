import { AUTH_ENDPOINT } from "../../utils/api";
import { getCookie } from "../../utils/cookies";
import { TUserData } from "../types/data";
import { TUserThunk, TUserDispatch } from "../types/auth";

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

export const registration: TUserThunk =
  (userData: TUserData) => (dispatch: TUserDispatch) => {
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

export const authorization: TUserThunk =
  (userData: TUserData) => (dispatch: TUserDispatch) => {
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

export const recoverPassword: TUserThunk =
  (emailData: { email: string }) => (dispatch: TUserDispatch) => {
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
        dispatch({
          type: PASSWORD_RECOVERY_SUCCESS,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

export const updatePassword: TUserThunk =
  (newPasswordData: { password: string; token: string }) => (dispatch: any) => {
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
      .then((res) => {
        if (res.ok) {
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
        dispatch({
          type: PASSWORD_UPDATING_SUCCESS,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

export const logout: TUserThunk = () => {
  const refreshToken = getCookie("refreshToken");
  const data = {
    token: `${refreshToken}`,
  };
  return function (dispatch: TUserDispatch) {
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
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
};

//---------------------------------------------------------------------------GET_USER_INFO-----------------------------
export const getUserInfo: TUserThunk = () => (dispatch: TUserDispatch) => {
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
        throw new Error(`${res.status}`);
      }
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        payload: data,
      });
    })

    .catch((e) => {
      if ((e.message = "403")) {
        dispatch(refreshToken(false));
      }
    });
};

//---------------------------------------------------------------------------UPDATE_USER_INFO-----------------------------
export const updateUserInfo: TUserThunk =
  (data: { name: string; email: string }) => (dispatch: TUserDispatch) => {
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
          return res;
        } else {
          dispatch({
            type: UPDATE_USER_INFO_ERROR,
          });
          throw new Error(`${res.status}`);
        }
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: UPDATE_USER_INFO_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        if ((e.message = "403")) {
          dispatch(refreshToken(false, data));
        }
      });
  };

//---------------------------------------------------------------------------UPDATE_TOKEN-----------------------------
export const refreshToken: TUserThunk =
  (
    isGettingUserInfo: boolean,
    data?: {
      name: string;
      email: string;
    }
  ) =>
  (dispatch: TUserDispatch) => {
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
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          dispatch({
            type: REFRESH_TOKEN_ERROR,
          });
          throw new Error("REFRESH_TOKEN_ERROR");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: REFRESH_TOKEN_SUCCESS,
          payload: data,
        });
        if (isGettingUserInfo) dispatch(getUserInfo());
        else dispatch(updateUserInfo(data));
      })

      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

