import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  SHOW_DETAILS,
  HIDE_DETAILS,
} from "../actions/burger-ingredients";

const ENDPOINT = "https://norma.nomoreparties.space";

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

const ingredientDetailsInitialState = {
  iSIngredientDetailsActive: false,
  ingredientDetailsId: 0,
};

export const ingredientDetailsReducer = (
  state = ingredientDetailsInitialState,
  action
) => {
  switch (action.type) {
    case SHOW_DETAILS: {
      return {
        ...state,
        iSIngredientDetailsActive: true,
        ingredientDetailsId: action.payload,
      };
    }
    case HIDE_DETAILS: {
      return {
        ...state,
        iSIngredientDetailsActive: false,
        ingredientDetailsId: 0,
      };
    }
    default:
      return state;
  }
};
