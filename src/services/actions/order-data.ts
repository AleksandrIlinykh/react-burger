import { TOrderDataThunk } from "../types/order-data";
import { TOrderDataDispatch } from "../types/order-data";

import { ENDPOINT } from "../../utils/api";

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

const getOrderNumberError = () => {
  return {
    type: GET_ORDER_NUMBER_ERROR,
  };
};

export const getOrderNumber: TOrderDataThunk =
  (bodyData: Array<string>) => (dispatch: TOrderDataDispatch) => {
    dispatch(getOrderNumberRequest());

    fetch(`${ENDPOINT}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          dispatch({
            type: GET_ORDER_NUMBER_ERROR,
          });
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch(getOrderNumberSuccess(data.order.number));
        dispatch({ type: CLEAR_INGREDIENTS });
      })
      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
