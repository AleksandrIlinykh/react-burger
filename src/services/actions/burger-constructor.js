import { ENDPOINT } from "../../utils/api";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const MOVE_INGREDIENTS = "MOVE_INGREDIENTS";
export const GET_ORDER_NUMBER_REQUEST = "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_SUCCESS = "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_ERROR = "GET_ORDER_NUMBER_ERROR";

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  };
};

export const deleteIngredient = (index) => {
  return {
    type: DELETE_INGREDIENT,
    index: index,
  };
};

export const moveIngredients = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_INGREDIENTS,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex,
  };
};

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
