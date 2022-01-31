import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

import { store } from "../store";
import { TOrderDataActions } from "../actions/order-data";

export type RootState = ReturnType<typeof store.getState>;

export type TOrderDataThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TOrderDataActions>
>;

export type TOrderDataDispatch = typeof store.dispatch;
