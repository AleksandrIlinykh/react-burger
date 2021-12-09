import { combineReducers } from "redux";

import { ingredientsReducer } from "./burger-ingredients";
import { ingredientDetailsReducer } from "./ingredient-details";
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
