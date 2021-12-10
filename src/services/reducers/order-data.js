import {
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_ERROR,
} from "../actions/order-data";

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
