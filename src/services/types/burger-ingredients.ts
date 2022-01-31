import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

import { store } from "../store";
import { TIngredientsActions } from "../actions/burger-ingredients";

export type RootState = ReturnType<typeof store.getState>;

export type TIngredientsThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TIngredientsActions>
>;

export type TIngredientsDispatch = typeof store.dispatch;
