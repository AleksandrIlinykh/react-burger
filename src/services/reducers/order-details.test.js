import { orderDetailsReducer } from './order-details';
import * as types from '../constants/order-details';

describe('order-details reducer', () => {
  it('should return the initial state', () => {
    expect(orderDetailsReducer(undefined, {})).toEqual({
      isOrderDetailsActive: false,
    });
  });

  it('should handle SHOW_ORDER_DETAILS', () => {
    expect(
      orderDetailsReducer(
        {
          isOrderDetailsActive: false,
        },
        {
          type: types.SHOW_ORDER_DETAILS,
        }
      )
    ).toEqual({
      isOrderDetailsActive: true,
    });
  });

  it('should handle SHOW_ORDER_DETAILS', () => {
    expect(
      orderDetailsReducer(
        {
          isOrderDetailsActive: true,
        },
        {
          type: types.HIDE_ORDER_DETAILS,
        }
      )
    ).toEqual({
      isOrderDetailsActive: false,
    });
  });
});
