import { combineReducers } from "redux";

import {
  ingredientsReducer,
  ingredientDetailsReducer,
} from "./burger-ingredients";
import {
  burgerConstructorReducer,
  orderDetailsReducer,
} from "./burger-constructor";

export const rootReducer = combineReducers({
  burgerIngredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  orderDetails: orderDetailsReducer,
  ingredientDetails: ingredientDetailsReducer,
});
