import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

import { store } from "../store";
import { TActions } from "../actions/index";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TActions;

export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type TAppDispatch = typeof store.dispatch;
