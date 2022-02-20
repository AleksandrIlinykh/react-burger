import { ingredientsReducer } from './burger-ingredients';
import * as types from '../constants/burger-ingredients';

describe('order-data reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual({
      loading: false,
      ingredients: [],
      error: false,
    });
  });

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(
      ingredientsReducer(
        {
          ingredients: [],
          loading: false,
          error: false,
        },
        {
          type: types.GET_INGREDIENTS_REQUEST,
        }
      )
    ).toEqual({
      ingredients: [],
      loading: true,
      error: false,
    });
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(
      ingredientsReducer(
        {
          ingredients: [],
          loading: true,
          error: false,
        },
        {
          type: types.GET_INGREDIENTS_SUCCESS,
          payload: ['ingredient'],
        }
      )
    ).toEqual({
      ingredients: ['ingredient'],
      loading: false,
      error: false,
    });
  });

  it('should handle GET_INGREDIENTS_ERROR', () => {
    expect(
      ingredientsReducer(
        {
          ingredients: ['ingredient'],
          loading: false,
          error: false,
        },
        {
          type: types.GET_INGREDIENTS_ERROR,
        }
      )
    ).toEqual({
      ingredients: [],
      loading: false,
      error: true,
    });
  });
});
