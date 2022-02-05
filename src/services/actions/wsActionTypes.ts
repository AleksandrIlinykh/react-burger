import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_CONNECTION_CLOSE,
} from "../constants/ws";

export type IwsInit = {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
};
export type IwsClose = {
  readonly type: typeof WS_CONNECTION_CLOSE;
};
export type IwsConnectionSuccess = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};
export type IwsConnectionError = {
  readonly type: typeof WS_CONNECTION_ERROR;
};
export type IwsConnectionClosed = {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload: any;
};
export type IwsGetMessage = {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: string;
};
export type IwsSendMessage = {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: string;
};

export const wsInit = (url: string): IwsInit => {
  return {
    type: WS_CONNECTION_START,
    payload: url,
  };
};

export const wsClose = (): IwsClose => {
  return {
    type: WS_CONNECTION_CLOSE,
  };
};

export const wsConnectionSuccess = (): IwsConnectionSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = (): IwsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = (event: any): IwsConnectionClosed => {
  return {
    type: WS_CONNECTION_CLOSED,
    payload: event,
  };
};

export const wsGetMessage = (message: string): IwsGetMessage => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};

export const wsSendMessage = (message: string): IwsSendMessage => {
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

  
