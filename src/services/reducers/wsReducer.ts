import type { wsActions } from "../actions/wsActionTypes";
import type { TOrderMessage, TOrders } from "../types/data";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
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

export const wsReducer = (state = wsInitialState, action: wsActions) => {
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
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      const parsedMessage = JSON.parse(action.payload);
      console.log(parsedMessage.orders);
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
