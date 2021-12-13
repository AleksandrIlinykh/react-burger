import {
  SHOW_INGREDIENT_DETAILS,
  HIDE_INGREDIENT_DETAILS,
} from "../actions/ingredient-details";

const ingredientDetailsInitialState = {
  iSIngredientDetailsActive: false,
  ingredientDetailsId: 0,
};

export const ingredientDetailsReducer = (
  state = ingredientDetailsInitialState,
  action
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
