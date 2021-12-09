import {
  SHOW_ORDER_DETAILS,
  HIDE_ORDER_DETAILS,
} from "../actions/order-details";

const orderDetailsInitialState = {
  iSOrderDetailsActive: false,
};

export const orderDetailsReducer = (
  state = orderDetailsInitialState,
  action
) => {
  switch (action.type) {
    case SHOW_ORDER_DETAILS: {
      return {
        ...state,
        iSOrderDetailsActive: true,
      };
    }
    case HIDE_ORDER_DETAILS: {
      return {
        ...state,
        iSOrderDetailsActive: false,
      };
    }
    default:
      return state;
  }
};
