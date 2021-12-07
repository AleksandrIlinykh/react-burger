export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  };
};

const deleteIngredient = (ingredient) => {
  return {
    type: DELETE_INGREDIENT,
    payload: ingredient,
  };
};
