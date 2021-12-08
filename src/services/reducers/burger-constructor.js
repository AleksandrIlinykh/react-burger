import { store } from "../../index";

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from "../actions/burger-constructor";

const initialState = {
  bun: {},
  sausesAndFillings: [],
  constructorIngredients: [],
  totalPrice: 0,
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === "bun") {
        if (!state.bun.hasOwnProperty("_id"))
          return {
            ...state,
            totalPrice: state.totalPrice + action.payload.price,
            bun: action.payload,
          };
        else return { ...state };
      } else
        return {
          ...state,
          totalPrice: state.totalPrice + action.payload.price,
          sausesAndFillings: [...state.sausesAndFillings, action.payload],
        };
    }

    case DELETE_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: [
          ...state,
          [...state.sausesAndFillings].filter(
            (ingredient) => ingredient._id !== action.payload.id
          ),
        ],
      };
    }
    default:
      return state;
  }
};
