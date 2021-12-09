import {
  SHOW_ORDER_DETAILS,
  HIDE_ORDER_DETAILS,
} from "../actions/order-details";

const orderDetailsInitialState = {
  isOrderDetailsActive: false,
};

export const orderDetailsReducer = (
  state = orderDetailsInitialState,
  action
) => {
  switch (action.type) {
    case SHOW_ORDER_DETAILS: {
      return {
        ...state,
        isOrderDetailsActive: true,
      };
    }
    case HIDE_ORDER_DETAILS: {
      return {
        ...state,
        isOrderDetailsActive: false,
      };
    }
    default:
      return state;
  }
};
