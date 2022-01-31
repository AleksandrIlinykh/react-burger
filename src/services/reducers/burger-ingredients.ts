import { TIngredientType } from "../types/data";
import { TIngredientsActions } from "../actions/burger-ingredients";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants/burger-ingredients";

type TIngredientsState = {
  loading: boolean;
  ingredients: Array<TIngredientType>;
  error: boolean;
};

const ingredientsInitialState: TIngredientsState = {
  loading: false,
  ingredients: [],
  error: false,
};

export const ingredientsReducer = (
  state = ingredientsInitialState,
  action: TIngredientsActions
) => {
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
      return { ...ingredientsInitialState, error: true, loading: false };
    }
    default:
      return state;
  }
};
