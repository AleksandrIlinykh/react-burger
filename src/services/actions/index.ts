import { TUserActions } from "./auth";
import { TBurgerConstructorActions } from "./burger-constructor";
import { TIngredientsActions } from "./burger-ingredients";
import { TIngredientDetailsActions } from "./ingredient-details";
import { TOrderDataActions } from "./order-data";
import { TOrderDetailsActions } from "./order-details";

export type TActions =
  | TUserActions
  | TBurgerConstructorActions
  | TIngredientsActions
  | TIngredientDetailsActions
  | TOrderDataActions
  | TOrderDetailsActions
  | { type: "REFRESH_TOKEN_ERROR" };
