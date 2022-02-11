import { burgerConstructorReducer } from './burger-constructor';
import { initialState } from './burger-constructor';
import * as types from '../constants/burger-constructor';

describe('burger-constructor reducer', () => {
  it('should return the initial state', () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_INGREDIENT with "bun" type', () => {
    expect(
      burgerConstructorReducer(initialState, {
        type: types.ADD_INGREDIENT,
        payload: {
          type: 'bun',
          data: 'data',
        },
      })
    ).toEqual({
      ...initialState,
      bun: {
        type: 'bun',
        data: 'data',
      },
    });
  });

  it('should handle ADD_INGREDIENT with "sause" or "main" type', () => {
    expect(
      burgerConstructorReducer(initialState, {
        type: types.ADD_INGREDIENT,
        payload: {
          type: 'main',
          data: 'data',
        },
      })
    ).toEqual({
      ...initialState,
      sausesAndFillings: [
        {
          type: 'main',
          data: 'data',
        },
      ],
    });
  });

  it('should handle DELETE_INGREDIENT', () => {
    expect(
      burgerConstructorReducer(
        {
          bun: null,
          sausesAndFillings: ['ingredient-1', 'ingredient-2', 'ingredient-3'],
        },
        {
          type: types.DELETE_INGREDIENT,
          index: 1,
        }
      )
    ).toEqual({
      bun: null,
      sausesAndFillings: ['ingredient-1', 'ingredient-3'],
    });
  });

  it('should handle MOVE_INGREDIENTS', () => {
    expect(
      burgerConstructorReducer(
        {
          bun: null,
          sausesAndFillings: ['ingredient-1', 'ingredient-2', 'ingredient-3'],
        },
        {
          type: types.MOVE_INGREDIENTS,
          dragIndex: 1,
          hoverIndex: 2,
        }
      )
    ).toEqual({
      bun: null,
      sausesAndFillings: ['ingredient-1', 'ingredient-3', 'ingredient-2'],
    });
  });

  it('should handle CLEAR_INGREDIENTS', () => {
    expect(
      burgerConstructorReducer(
        {
          bun: null,
          sausesAndFillings: ['ingredient-1', 'ingredient-2', 'ingredient-3'],
        },
        {
          type: types.CLEAR_INGREDIENTS,
        }
      )
    ).toEqual({
      bun: null,
      sausesAndFillings: [],
    });
  });
});
