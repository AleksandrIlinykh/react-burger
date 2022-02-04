import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_CONNECTION_СLOSE,
} from "../constants/ws";

export type IwsInit = {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
};
export type IwsClose = {
  readonly type: typeof WS_CONNECTION_СLOSE;
};
export type IwsConnectionSuccess = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};
export type IwsConnectionError = {
  readonly type: typeof WS_CONNECTION_ERROR;
};
export type IwsConnectionClosed = {
  readonly type: typeof WS_CONNECTION_CLOSED;
};
export type IwsGetMessage = {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: string;
};
export type IwsSendMessage = {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: string;
};

export const wsInit = (url: string) => {
  return {
    type: WS_CONNECTION_START,
    payload: url,
  };
};

export const wsClose = () => {
  return {
    type: WS_CONNECTION_СLOSE,
  };
};

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (message: string) => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};

export const wsSendMessage = (message: string) => {
  return {
    type: WS_SEND_MESSAGE,
    payload: message,
  };
};

export type TwsActions =
  | IwsInit
  | IwsClose
  | IwsConnectionSuccess
  | IwsConnectionError
  | IwsConnectionClosed
  | IwsGetMessage
  | IwsSendMessage;
