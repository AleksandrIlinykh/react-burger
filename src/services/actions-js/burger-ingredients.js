import { ENDPOINT } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

const getIngredientsRequest = () => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
};

const getIngredientsSuccess = (ingredientsData) => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    payload: ingredientsData,
  };
};

const getIngredientsError = (error) => {
  return {
    type: GET_INGREDIENTS_ERROR,
    payload: error,
  };
};

export function getBurgerIngredients() {
  return function (dispatch) {
    dispatch(getIngredientsRequest());
    fetch(`${ENDPOINT}/api/ingredients`)
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          dispatch(getIngredientsError);
          throw new Error("Network response was not OK");
        }
      })
      .then((res) => res.json())
      .then((data) => dispatch(getIngredientsSuccess(data.data)))
      .catch((e) => {
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };
}
