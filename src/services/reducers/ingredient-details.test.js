import { ingredientDetailsReducer } from './ingredient-details';
import * as types from '../constants/ingredient-details';

describe('ingredient-details reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientDetailsReducer(undefined, {})).toEqual({
      iSIngredientDetailsActive: false,
      ingredientDetailsId: '',
    });
  });

  it('should handle SHOW_INGREDIENT_DETAILS', () => {
    expect(
      ingredientDetailsReducer(
        {
          iSIngredientDetailsActive: false,
          ingredientDetailsId: '',
        },
        {
          type: types.SHOW_INGREDIENT_DETAILS,
          payload: 'id',
        }
      )
    ).toEqual({
      iSIngredientDetailsActive: true,
      ingredientDetailsId: 'id',
    });
  });

  it('should handle HIDE_INGREDIENT_DETAILS', () => {
    expect(
      ingredientDetailsReducer(
        {
          iSIngredientDetailsActive: true,
          ingredientDetailsId: 'id',
        },
        {
          type: types.HIDE_INGREDIENT_DETAILS,
        }
      )
    ).toEqual({
      iSIngredientDetailsActive: false,
      ingredientDetailsId: '',
    });
  });
});
