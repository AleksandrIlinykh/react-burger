import { Interface } from "readline";
import internal from "stream";

import { TIngredientType } from "../types/data";

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
  CLEAR_INGREDIENTS,
} from "../constants/burger-constructor";

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TIngredientType;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly index: number;
}

export interface IMoveIngredients {
  readonly type: typeof MOVE_INGREDIENTS;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface clearIngredients {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export type TBurgerConstructorActions =
  | IAddIngredient
  | IDeleteIngredient
  | IMoveIngredients
  | clearIngredients;

export const addIngredient = (ingredient: TIngredientType) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  };
};

export const deleteIngredient = (index: number) => {
  return {
    type: DELETE_INGREDIENT,
    index: index,
  };
};

export const moveIngredients = (dragIndex: number, hoverIndex: number) => {
  return {
    type: MOVE_INGREDIENTS,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex,
  };
};

export const clearIngredients = () => {
  return {
    type: CLEAR_INGREDIENTS,
  };
};
