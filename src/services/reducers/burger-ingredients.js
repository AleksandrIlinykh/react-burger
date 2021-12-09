import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../actions/burger-ingredients";

const ingredientsInitialState = {
  loading: false,
  ingredients: [],
  error: "",
};

export const ingredientsReducer = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, ingredients: action.payload, loading: false };
    }
    case GET_INGREDIENTS_ERROR: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};

