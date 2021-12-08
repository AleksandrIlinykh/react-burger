import { store } from "../../index";

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from "../actions/burger-constructor";

const initialState = {
  constructorIngredients: [],
  totalPrice: 0,
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        constructorIngredients: [
          ...state.constructorIngredients,
          action.payload,
        ],
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: [
          ...state,
          [...state.constructorIngredients].filter(
            (ingredient) => ingredient._id !== action.payload.id
          ),
        ],
      };
    }
    default:
      return state;
  }
};
