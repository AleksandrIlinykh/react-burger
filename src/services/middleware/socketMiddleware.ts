import type { Middleware, MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookies";

import { TwsThunkActions } from "../actions/wsActionTypes";

import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "../constants/ws";

import { WS_ENDPOINT } from "../../utils/api";

export const socketMiddleware = (
  wsThunkActions: TwsThunkActions
): Middleware => {
  return ((store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      if (action.type === wsThunkActions.wsInit) {
        switch (action.payload) {
          case "all":
            socket = new WebSocket(`${WS_ENDPOINT}/all`);
            break;
          case "profile":
            socket = new WebSocket(
              `${WS_ENDPOINT}?token=${getCookie("acessToken")}`
            );
            break;
          default:
            break;
        }
      }
      if (action.type === wsThunkActions.wsClose) {
        // объект класса WebSocket
        if (socket) {
          socket.close();
        }
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = () => {
          dispatch({ type: WS_CONNECTION_SUCCESS });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = () => {
          dispatch({ type: WS_CONNECTION_ERROR });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: WS_GET_MESSAGE, payload: data });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (action.type === WS_SEND_MESSAGE) {
          const message = action.payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
