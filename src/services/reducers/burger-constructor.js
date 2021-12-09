import { store } from "../../index";
import update from "immutability-helper";

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
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
        if (state.bun.hasOwnProperty("_id"))
          return {
            ...state,
            totalPrice:
              state.totalPrice - state.bun.price + action.payload.price,
            bun: action.payload,
          };
        else
          return {
            ...state,
            totalPrice: state.totalPrice + action.payload.price,
            bun: action.payload,
          };
      } else
        return {
          ...state,
          totalPrice: state.totalPrice + action.payload.price,
          sausesAndFillings: [...state.sausesAndFillings, action.payload],
        };
    }

    case DELETE_INGREDIENT: {
      const index = action.index;
      const deletingPrice = state.sausesAndFillings[index].price;
      return {
        ...state,
        totalPrice: state.totalPrice - deletingPrice,
        sausesAndFillings: update(state.sausesAndFillings, {
          $splice: [[action.index, 1]],
        }),
      };
    }

    case MOVE_INGREDIENTS: {
      const draggingIngredient = state.sausesAndFillings[action.dragIndex];
      return {
        ...state,
        sausesAndFillings: update(state.sausesAndFillings, {
          $splice: [
            [action.dragIndex, 1],
            [action.hoverIndex, 0, draggingIngredient],
          ],
        }),
      };
    }

    default:
      return { ...state };
  }
};
