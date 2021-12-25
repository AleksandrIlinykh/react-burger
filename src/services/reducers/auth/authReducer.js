import { setCookie } from "../../../utils/cookies";

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
} from "../../actions/auth/authActions";

const userState = {
  isAuth: false,
  email: "",
  name: "",
  accessToken: "",
  requestToken: "",
  isRegistrationInProcess: false,
  isRegistrationSucess: false,
  isRegistrationFailed: false,
  isAuthorizationInProcess: false,
  isAuthorizationSucess: false,
  isAuthorizationFailed: false,
  isPasswordRecoveryInProcess: false,
  isPasswordRecoveryFailed: false,
};

export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        isRegistrationInProcess: true,
      };
    }
    case REGISTRATION_SUCCESS: {
      setCookie("acessToken", action.payload.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        isAuth: true,
        email: action.payload.user.email,
        name: action.payload.user.name,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken,
        isRegistrationInProcess: false,
      };
    }
    case REGISTRATION_ERROR: {
      return {
        ...state,
        isRegistrationFailed: true,
        isRegistrationInProcess: false,
      };
    }
    case AUTHORIZATION_REQUEST: {
      return {
        ...state,
        isAuthorizationInProcess: true,
      };
    }
    case AUTHORIZATION_SUCCESS: {
      setCookie("acessToken", action.payload.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", action.payload.refreshToken);
      console.log(document.cookie);
      return {
        ...state,
        isAuth: true,
        email: action.payload.user.email,
        name: action.payload.user.name,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken,
        isAuthorizationInProcess: false,
      };
    }
    case REGISTRATION_ERROR: {
      return {
        ...state,
        isAuthorizationFailed: true,
        isAuthorizationInProcess: false,
      };
    }

    case PASSWORD_RECOVERY_SUCCESS: {
      return {
        ...state,
      };
    }
    case PASSWORD_RECOVERY_SUCCESS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
