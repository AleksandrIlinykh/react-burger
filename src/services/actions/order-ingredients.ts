import {
  GET_ORDER_INFO_REQUEST,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_ERROR,
} from "../constants/order-ingredients";

import { TAppThunk, TAppDispatch } from "../types/index";
import { getCookie } from "../../utils/cookies";
import { checkResponse } from "../../utils/utils";
import { ORDER_ENDPOINT } from "../../utils/api";

export type TOrderIngredientsActions =
  | {
      type: typeof GET_ORDER_INFO_REQUEST;
    }
  | {
      type: typeof GET_ORDER_INFO_SUCCESS;
      payload: any;
    }
  | {
      type: typeof GET_ORDER_INFO_ERROR;
    };

export const getOrder: TAppThunk =
  (orderNumber) => (dispatch: TAppDispatch) => {
    dispatch({
      type: GET_ORDER_INFO_REQUEST,
    });

    fetch(`${ORDER_ENDPOINT}${orderNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_ORDER_INFO_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        if ((e.message = "403")) {
          dispatch({
            type: GET_ORDER_INFO_ERROR,
          });
          console.log(((e.message = "403"), "GET_USER_INFO_ERROR"));
        }
      });
  };

export const getUserOrder: TAppThunk =
  (orderNumber) => (dispatch: TAppDispatch) => {
    dispatch({
      type: GET_ORDER_INFO_REQUEST,
    });

    fetch(`${ORDER_ENDPOINT}${orderNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("acessToken"),
      },
    })
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_ORDER_INFO_SUCCESS,
          payload: data,
        });
      })

      .catch((e) => {
        if ((e.message = "403")) {
          dispatch({
            type: GET_ORDER_INFO_ERROR,
          });
          console.log(((e.message = "403"), "GET_USER_INFO_ERROR"));
        }
      });
  };
