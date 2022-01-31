import type { TOrderDataActions } from "../actions/order-data";

import {
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_ERROR,
} from "../constants/order-data";

type TOrderDataState = {
  orderNumber: number;
  loading: boolean;
  error: boolean;
};

const initialStateOrder: TOrderDataState = {
  orderNumber: 0,
  loading: false,
  error: false,
};

export const orderDataReducer = (
  state = initialStateOrder,
  action: TOrderDataActions
) => {
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
      return { ...initialStateOrder, error: true, loading: false };
    }

    default:
      return { ...state };
  }
};
