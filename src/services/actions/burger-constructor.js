export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const MOVE_INGREDIENTS = "MOVE_INGREDIENTS";

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  };
};

export const deleteIngredient = (index) => {
  return {
    type: DELETE_INGREDIENT,
    index: index,
  };
};

export const moveIngredients = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_INGREDIENTS,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex,
  };
};
