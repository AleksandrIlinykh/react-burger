export const SHOW_INGREDIENT_DETAILS = "SHOW_INGREDIENT_DETAILS";
export const HIDE_INGREDIENT_DETAILS = "HIDE_INGREDIENT_DETAILS";

export const hideIngredientDetails = () => {
  return {
    type: HIDE_INGREDIENT_DETAILS,
  };
};

export const showIngredientDetails = (id) => {
  return {
    type: SHOW_INGREDIENT_DETAILS,
    payload: id,
  };
};
