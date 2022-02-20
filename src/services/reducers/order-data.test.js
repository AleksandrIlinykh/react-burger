import { orderDataReducer } from './order-data';
import * as types from '../constants/order-data';

describe('order-data reducer', () => {
  it('should return the initial state', () => {
    expect(orderDataReducer(undefined, {})).toEqual({
      orderNumber: 0,
      loading: false,
      error: false,
    });
  });

  it('should handle GET_ORDER_NUMBER_REQUEST', () => {
    expect(
      orderDataReducer(
        {
          orderNumber: 0,
          loading: false,
          error: false,
        },
        {
          type: types.GET_ORDER_NUMBER_REQUEST,
        }
      )
    ).toEqual({
      orderNumber: 0,
      loading: true,
      error: false,
    });
  });

  it('should handle GET_ORDER_NUMBER_SUCCESS', () => {
    expect(
      orderDataReducer(
        {
          orderNumber: 0,
          loading: true,
          error: false,
        },
        {
          type: types.GET_ORDER_NUMBER_SUCCESS,
          payload: 11111,
        }
      )
    ).toEqual({
      orderNumber: 11111,
      loading: false,
      error: false,
    });
  });

  it('should handle GET_ORDER_NUMBER_ERROR', () => {
    expect(
      orderDataReducer(
        {
          orderNumber: 11111,
          loading: true,
          error: false,
        },
        {
          type: types.GET_ORDER_NUMBER_ERROR,
        }
      )
    ).toEqual({
      orderNumber: 0,
      loading: false,
      error: true,
    });
  });
});
