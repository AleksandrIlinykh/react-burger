import { TAppThunk, TAppDispatch } from "../types/index";
import { getCookie } from "../../utils/cookies";
import { ENDPOINT } from "../../utils/api";
import { checkResponse } from "../../utils/utils";

import {
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_ERROR,
} from "../constants/order-data";

import { CLEAR_INGREDIENTS } from "../constants/burger-constructor";

export interface IGetOrderNumberRequest {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST;
}

export interface IGetOrderNumberSuccess {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly payload: number;
}

export interface IGetOrderNumberError {
  readonly type: typeof GET_ORDER_NUMBER_ERROR;
}

export type TOrderDataActions =
  | IGetOrderNumberRequest
  | IGetOrderNumberSuccess
  | IGetOrderNumberError;

const getOrderNumberRequest = () => {
  return {
    type: GET_ORDER_NUMBER_REQUEST,
  };
};

const getOrderNumberSuccess = (orderNumber: number) => {
  return {
    type: GET_ORDER_NUMBER_SUCCESS,
    payload: orderNumber,
  };
};

export const getOrderNumber: TAppThunk =
  (bodyData: Array<string>) => (dispatch: TAppDispatch) => {
    const accessToken = getCookie("acessToken");

    dispatch(getOrderNumberRequest());

    fetch(`${ENDPOINT}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => {
        dispatch(getOrderNumberSuccess(data.order.number));
        dispatch({ type: CLEAR_INGREDIENTS });
      })
      .catch((e) => {
        dispatch({
          type: GET_ORDER_NUMBER_ERROR,
        });
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
