import { wsReducer } from './wsReducer';
import * as types from '../constants/ws';
import * as orderIngredientsTypes from '../constants/order-ingredients';
import { wsInitialState } from './wsReducer';

describe('ws reducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(wsInitialState);
  });

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(
      wsReducer(wsInitialState, {
        type: types.WS_CONNECTION_SUCCESS,
      })
    ).toEqual({
      ...wsInitialState,
      error: undefined,
      wsConnected: true,
    });
  });

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(
      wsReducer(wsInitialState, {
        type: types.WS_CONNECTION_ERROR,
      })
    ).toEqual({
      ...wsInitialState,
      error: true,
      wsConnected: false,
    });
  });

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(
      wsReducer(wsInitialState, {
        type: types.WS_CONNECTION_CLOSED,
      })
    ).toEqual({
      ...wsInitialState,
      wsConnected: false,
      messages: [],
      orders: [],
    });
  });

  it('should handle WS_GET_MESSAGE', () => {
    expect(
      wsReducer(wsInitialState, {
        type: types.WS_GET_MESSAGE,
        payload: '{"orders": ["order-1", "order-2"]}',
      })
    ).toEqual({
      ...wsInitialState,
      messages: [{ orders: ['order-1', 'order-2'] }],
      orders: ['order-1', 'order-2'],
    });
  });

  it('should handle GET_ORDER_INFO_REQUEST', () => {
    expect(
      wsReducer(wsInitialState, {
        type: orderIngredientsTypes.GET_ORDER_INFO_REQUEST,
      })
    ).toEqual({
      ...wsInitialState,
      isOrderInfoGettingInProcess: true,
    });
  });

  it('should handle GET_ORDER_INFO_SUCCESS', () => {
    expect(
      wsReducer(wsInitialState, {
        type: orderIngredientsTypes.GET_ORDER_INFO_SUCCESS,
        payload: { orders: ['test-order-data'] },
      })
    ).toEqual({
      ...wsInitialState,
      modalOrder: 'test-order-data',
      isOrderInfoGettingInProcess: false,
      isOrderInfoGettingSuccess: true,
      isOrderInfoGettingError: false,
    });
  });

  it('should handle GET_ORDER_INFO_ERROR', () => {
    expect(
      wsReducer(wsInitialState, {
        type: orderIngredientsTypes.GET_ORDER_INFO_ERROR,
        payload: { orders: ['test-order-data'] },
      })
    ).toEqual({
      ...wsInitialState,
      modalOrder: null,
      isOrderInfoGettingInProcess: false,
      isOrderInfoGettingSuccess: false,
      isOrderInfoGettingError: true,
    });
  });
});
