export const SHOW_ORDER_DETAILS = "SHOW_ORDER_DETAILS";
export const HIDE_ORDER_DETAILS = "HIDE_ORDER_DETAILS";

export const hideOrderDetails = () => {
  return {
    type: HIDE_ORDER_DETAILS,
  };
};

export const showOrderDetails = () => {
  return {
    type: SHOW_ORDER_DETAILS,
  };
};
