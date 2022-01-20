import update from "immutability-helper";

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
  CLEAR_INGREDIENTS,
} from "../actions/burger-constructor";

const initialState = {
  bun: {},
  sausesAndFillings: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
        };
      } else
        return {
          ...state,
          sausesAndFillings: [...state.sausesAndFillings, action.payload],
        };
    }

    case DELETE_INGREDIENT: {
      return {
        ...state,
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

    case CLEAR_INGREDIENTS: {
      return {
        ...initialState,
      };
    }
    default:
      return { ...state };
  }
};
