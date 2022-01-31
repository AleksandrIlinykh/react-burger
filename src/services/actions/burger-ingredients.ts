import { ENDPOINT } from "../../utils/api";
import { TIngredientType } from "../types/data";
import {
  TIngredientsDispatch,
  TIngredientsThunk,
} from "../types/burger-ingredients";

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../constants/burger-ingredients";

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: Array<TIngredientType>;
}

export interface IGetIngredientsError {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

export type TIngredientsActions =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsError;

const getIngredientsRequest = () => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
};

const getIngredientsSuccess = (
  ingredientsData: Array<TIngredientType>
): IGetIngredientsSuccess => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    payload: ingredientsData,
  };
};

const getIngredientsError = (): IGetIngredientsError => {
  return {
    type: GET_INGREDIENTS_ERROR,
  };
};

export const getBurgerIngredients: TIngredientsThunk =
  () => (dispatch: TIngredientsDispatch) => {
    dispatch(getIngredientsRequest());
    fetch(`${ENDPOINT}/api/ingredients`)
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          dispatch({
            type: GET_INGREDIENTS_ERROR,
          });
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

