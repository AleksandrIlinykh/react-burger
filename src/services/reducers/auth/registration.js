import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from "../../actions/auth/registration";

const userState = {
  isAuth: false,
  email: "",
  password: "",
  name: "",
  accessToken: "",
};

export const registrationReducer = (state = userState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      //return {
      //  ...state,
      //  loading: true,
      //};
    }
    case REGISTRATION_SUCCESS: {
      //return { ...state, ingredients: action.payload, loading: false };
    }
    case REGISTRATION_ERROR: {
      //return { ...ingredientsInitialState, error: true, loading: false };
    }
    default:
      return state;
  }
};
