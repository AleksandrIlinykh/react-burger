import { ENDPOINT } from "../../utils/api";
import { TIngredientType } from "../types/data";
import { TAppDispatch, TAppThunk } from "../types/index";
import { checkResponse } from "../../utils/utils";
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

export const getBurgerIngredients: TAppThunk =
  () => (dispatch: TAppDispatch) => {
    dispatch(getIngredientsRequest());
    fetch(`${ENDPOINT}/api/ingredients`)
      .then((res) => checkResponse(res))
      .then((res) => res.json())
      .then((data) => dispatch(getIngredientsSuccess(data.data)))
      .catch((e) => {
        dispatch({
          type: GET_INGREDIENTS_ERROR,
        });
        console.log("Error: " + e.message);
        console.log(e.response);
      });
  };

