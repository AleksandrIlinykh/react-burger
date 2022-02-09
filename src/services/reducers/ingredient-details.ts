import type { TIngredientDetailsActions } from "../actions/ingredient-details";

import {
  SHOW_INGREDIENT_DETAILS,
  HIDE_INGREDIENT_DETAILS,
} from "../constants/ingredient-details";

type TIngredientDetailsState = {
  iSIngredientDetailsActive: boolean;
  ingredientDetailsId: string;
};

const ingredientDetailsInitialState: TIngredientDetailsState = {
  iSIngredientDetailsActive: false,
  ingredientDetailsId: "",
};

export const ingredientDetailsReducer = (
  state = ingredientDetailsInitialState,
  action: TIngredientDetailsActions
) => {
  switch (action.type) {
    case SHOW_INGREDIENT_DETAILS: {
      return {
        ...state,
        iSIngredientDetailsActive: true,
        ingredientDetailsId: action.payload,
      };
    }
    case HIDE_INGREDIENT_DETAILS: {
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
