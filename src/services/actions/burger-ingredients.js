export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";
export const SHOW_DETAILS = "SHOW_DETAILS";
export const HIDE_DETAILS = "HIDE_DETAILS";

const ENDPOINT = "https://norma.nomoreparties.space";

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

export const hideDetails = () => {
  return {
    type: HIDE_DETAILS,
  };
};

export const showDetails = (id) => {
  return {
    type: SHOW_DETAILS,
    payload: id,
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
        }
      })
      .then((res) => res.json())
      .then((data) => dispatch(getIngredientsSuccess(data.data)));
  };
}



