import {
  SHOW_INGREDIENT_DETAILS,
  HIDE_INGREDIENT_DETAILS,
} from "../constants/ingredient-details";

export interface IHideIngredientDetails {
  readonly type: typeof HIDE_INGREDIENT_DETAILS;
}

export interface IShowIngredientDetails {
  readonly type: typeof SHOW_INGREDIENT_DETAILS;
  readonly payload: string;
}

export type TIngredientDetailsActions =
  | IShowIngredientDetails
  | IHideIngredientDetails;

export const hideIngredientDetails = () => {
  return {
    type: HIDE_INGREDIENT_DETAILS,
  };
};

export const showIngredientDetails = (id: string): IShowIngredientDetails => {
  return {
    type: SHOW_INGREDIENT_DETAILS,
    payload: id,
  };
};
