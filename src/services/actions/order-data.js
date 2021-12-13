import { ENDPOINT } from "../../utils/api";

export const GET_ORDER_NUMBER_REQUEST = "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_SUCCESS = "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_ERROR = "GET_ORDER_NUMBER_ERROR";

const getOrderNumberRequest = () => {
  return {
    type: GET_ORDER_NUMBER_REQUEST,
  };
};

const getOrderNumberSuccess = (orderNumber) => {
  return {
    type: GET_ORDER_NUMBER_SUCCESS,
    payload: orderNumber,
  };
};

const getOrderNumberError = (error) => {
  return {
    type: GET_ORDER_NUMBER_ERROR,
    payload: error,
  };
};

export function getOrderNumber(bodyData) {
  return function (dispatch) {
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
          dispatch(getOrderNumberError);
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => dispatch(getOrderNumberSuccess(data.order.number)))
      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}
