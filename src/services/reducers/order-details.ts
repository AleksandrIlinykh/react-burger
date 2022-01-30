import type { TOrderDetailsActions } from "../actions/order-details";

import {
  SHOW_ORDER_DETAILS,
  HIDE_ORDER_DETAILS,
} from "../constants/order-details";

type TOrderDetailsState = {
  isOrderDetailsActive: boolean;
};

const orderDetailsInitialState: TOrderDetailsState = {
  isOrderDetailsActive: false,
};

export const orderDetailsReducer = (
  state = orderDetailsInitialState,
  action: TOrderDetailsActions
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
