import {
  REQUEST,
  REGISTRATION_SUCCESS,
  PASSWORD_RECOVERY_SUCCESS,
  ERROR,
} from "../../actions/auth/authActions";

const userState = {
  isAuth: false,
  email: "",
  name: "",
  accessToken: "",
  requestToken: "",
  loading: false,
};

export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        email: action.payload.user.email,
        name: action.payload.user.name,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken,
        loading: false,
        loading: false,
      };
    }
    case PASSWORD_RECOVERY_SUCCESS: {
      return {
        ...state,
      };
    }
    case ERROR: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
