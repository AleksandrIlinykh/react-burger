import type { TwsActions } from "../actions/wsActionTypes";
import type { TOrderMessage, TOrders } from "../types/data";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_CONNECTION_CLOSE,
} from "../constants/ws";

type TWState = {
  wsConnected: boolean;
  messages: Array<TOrderMessage>;
  orders: Array<TOrders>;
  error?: any;
};
const wsInitialState: TWState = {
  wsConnected: false,
  messages: [],
  orders: [],
};

export const wsReducer = (state = wsInitialState, action: TwsActions) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: true,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      console.log(action.payload);
      return {
        ...state,
        wsConnected: false,
        messages: [],
        orders: [],
      };

    case WS_GET_MESSAGE:
      const parsedMessage = JSON.parse(action.payload);
      if (parsedMessage.orders.length)
        return {
          ...state,
          messages: [...state.messages, parsedMessage],
          orders: parsedMessage.orders,
        };
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};
