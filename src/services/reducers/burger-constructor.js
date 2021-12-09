import { store } from "../../index";
import update from "immutability-helper";

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_ERROR,
} from "../actions/burger-constructor";

const initialState = {
  bun: {},
  sausesAndFillings: [],
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

const initialStateOrder = {
  orderNumber: 0,
  loading: false,
  error: "",
};

export const orderDataReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ORDER_NUMBER_SUCCESS: {
      return { ...state, orderNumber: action.payload, loading: false };
    }

    case GET_ORDER_NUMBER_ERROR: {
      return { ...state, error: true, loading: false };
    }

    default:
      return { ...state };
  }
};  
