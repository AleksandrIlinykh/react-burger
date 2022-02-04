import type { Middleware, MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookies";
import type {
  TApplicationActions,
  TAppDispatch,
  RootState,
} from "../types/index";
import { WS_ENDPOINT } from "../../utils/api";
import type { TwsActions } from "../actions/wsActionTypes";

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<TAppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;

      if (action.type === "WS_CONNECTION_START") {
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
