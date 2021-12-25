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
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
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
  isPasswordUpdatingInProcess: false,
  isPasswordUpdatingFailed: false,
};

export const authReducer = (state = userState, action) => {
  switch (action.type) {
    //---------------------------------------------------------------------------REGISTRATION-----------------------------
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
    //---------------------------------------------------------------------------AUTHORIZATION-----------------------------
    case AUTHORIZATION_REQUEST: {
      return {
        ...state,
        isAuthorizationInProcess: true,
      };
    }
    case AUTHORIZATION_SUCCESS: {
      setCookie("acessToken", action.payload.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", action.payload.refreshToken);
      //window.location = "/constructor";
      console.log(JSON.stringify(window.location));
      return {
        ...state,
        isAuth: true,
        email: action.payload.user.email,
        name: action.payload.user.name,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken,
        isAuthorizationInProcess: false,
        isAuthorizationSucess: true,
      };
    }
    case AUTHORIZATION_ERROR: {
      return {
        ...state,
        isAuthorizationFailed: true,
        isAuthorizationInProcess: false,
        isAuthorizationSucess: false,
      };
    }
    //---------------------------------------------------------------------------PASSWORD_RECOVERY-----------------------------
    case PASSWORD_RECOVERY_REQUEST: {
      return {
        ...state,
        isPasswordRecoveryInProcess: true,
      };
    }
    case PASSWORD_RECOVERY_SUCCESS: {
      return {
        ...state,
        isPasswordRecoveryInProcess: false,
        isPasswordRecoveryFailed: false,
      };
    }
    case PASSWORD_RECOVERY_ERROR: {
      return {
        ...state,
        isPasswordRecoveryInProcess: false,
        isPasswordRecoveryFailed: true,
      };
    }
    //---------------------------------------------------------------------------PASSWORD_UPDATING-----------------------------
    case PASSWORD_UPDATING_REQUEST: {
      return {
        ...state,
        isPasswordUpdatingInProcess: true,
      };
    }
    case PASSWORD_UPDATING_SUCCESS: {
      return {
        ...state,
        isPasswordUpdatingInProcess: false,
        isPasswordUpdatingFailed: false,
      };
    }
    case PASSWORD_UPDATING_ERROR: {
      return {
        ...state,
        isPasswordUpdatingInProcess: false,
        isPasswordUpdatingFailed: true,
      };
    }
    //---------------------------------------------------------------------------LOGOUT-----------------------------
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLogoutInProcess: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...userState,
        isLogoutInProcess: false,
        isLogoutFailed: false,
      };
    }
    case LOGOUT_ERROR: {
      return {
        ...state,
        isLogoutInProcess: false,
        isLogoutFailed: true,
      };
    }

    default:
      return state;
  }
};

