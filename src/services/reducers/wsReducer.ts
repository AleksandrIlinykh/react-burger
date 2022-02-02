import type { wsActions } from "../actions/wsActionTypes";
import type { TOrderMessage } from "../types/data";
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
  messages: [TOrderMessage] | [];
  error?: any;
};
const wsInitialState: TWState = {
  wsConnected: false,
  messages: [],
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
      console.log(action.payload);
      return {
        ...state,
        messages: [],
      };

    default:
      return state;
  }
};
