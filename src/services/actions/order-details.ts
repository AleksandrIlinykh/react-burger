import {
  SHOW_ORDER_DETAILS,
  HIDE_ORDER_DETAILS,
} from "../constants/order-details";

export interface IHideOrderDetails {
  readonly type: typeof HIDE_ORDER_DETAILS;
}

export interface IShowOrderDetails {
  readonly type: typeof SHOW_ORDER_DETAILS;
}

export type TOrderDetailsActions = IHideOrderDetails | IShowOrderDetails;

export const hideOrderDetails = (): IHideOrderDetails => {
  return {
    type: HIDE_ORDER_DETAILS,
  };
};

export const showOrderDetails = (): IShowOrderDetails => {
  return {
    type: SHOW_ORDER_DETAILS,
  };
};
