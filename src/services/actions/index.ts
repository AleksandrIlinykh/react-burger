//import { TUserActions } from "./auth";
import { TUserActions } from "../actions/auth";
import { TBurgerConstructorActions } from "./burger-constructor";
import { TIngredientsActions } from "./burger-ingredients";
import { TIngredientDetailsActions } from "./ingredient-details";
import { TOrderDataActions } from "./order-data";
import { TOrderDetailsActions } from "./order-details";
import { wsActions } from "../actions/wsActionTypes";

export type TActions =
  | TUserActions
  | TBurgerConstructorActions
  | TIngredientsActions
  | TIngredientDetailsActions
  | TOrderDataActions
  | TOrderDetailsActions
  | wsActions;
