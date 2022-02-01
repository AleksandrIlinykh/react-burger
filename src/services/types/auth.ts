import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

import { store } from "../store";
import { TUserActions } from "../actions/auth";

export type RootState = ReturnType<typeof store.getState>;

export type TUserThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TUserActions>
>;

export type TUserDispatch = typeof store.dispatch;
