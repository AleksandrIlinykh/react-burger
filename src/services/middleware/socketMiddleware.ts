import type { Middleware, MiddlewareAPI } from "redux";

import type {
  TApplicationActions,
  TAppDispatch,
  RootState,
} from "../types/index";
import type { wsActions } from "../actions/wsActionTypes";

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<TAppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch, getState } = store;
      //const { type, payload } = action;

      if (action.type === "WS_CONNECTION_START") {
        // объект класса WebSocket
        socket = new WebSocket(wsUrl);
      }
      if (action.type === "WS_CONNECTION_СLOSE") {
        // объект класса WebSocket
        if (socket) socket.close(1000);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch({ type: "WS_CONNECTION_SUCCESS" });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch({ type: "WS_CONNECTION_ERROR" });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          console.log("MESSAGE");
          const { data } = event;
          dispatch({ type: "WS_GET_MESSAGE", payload: data });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({ type: "WS_CONNECTION_CLOSED", payload: event });
        };

        if (action.type === "WS_SEND_MESSAGE") {
          const message = action.payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
