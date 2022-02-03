import { useEffect } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { wsInit, wsClose } from "../../services/actions/wsActionTypes";
import { RootState } from "../../services/types/index";
import OrderContainer from "../../components/order-container/order-container";
import AppHeader from "../../components/app-header/app-header";
import feedStyles from "./feed.module.css";
import type { TOrder } from "../../services/types/data";
export default function Feed() {
  const dispatch = useDispatch();
  const { orders, isDoneToday, isDoneAllTime } = useSelector(
    (store: RootState) => ({
      orders: store.ws.orders,
      isDoneToday: store.ws.messages[store.ws.messages.length - 1]?.totalToday,
      isDoneAllTime: store.ws.messages[store.ws.messages.length - 1]?.total,
    })
  );

  useEffect(() => {
    dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  const readyOrderNumbers = () => {
    return orders
      ?.filter((order: TOrder) => order.status === "done")
      .map((order: TOrder) => (
        <p className="text text_type_digits-default mb-2 mr-4">
          {order.number}
        </p>
      ));
  };

  const inProgressOrderNumbers = () => {
    return orders
      ?.filter((order: TOrder) => order.status !== "done")
      .map((order: TOrder) => (
        <p className="text text_type_digits-default mb-2 mr-4">
          {order.number}
        </p>
      ));
  };

  return (
    <>
      <AppHeader />
      <div className={feedStyles.content}>
        <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
        <div className={feedStyles.container}>
          <div className={feedStyles.contentleft}>
            <OrderContainer></OrderContainer>
          </div>
          <div className={feedStyles.contentleft}>
            <div className={feedStyles.status + " mb-15"}>
              <div className={feedStyles.done}>
                <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
                <div className={feedStyles.statusContainer}>
                  {readyOrderNumbers()}
                </div>
              </div>
              <div className={feedStyles.inProgress}>
                <div className={feedStyles.done}>
                  <h3 className="text text_type_main-medium mb-6">В работе:</h3>
                  <div className={feedStyles.statusContainer}>
                    {inProgressOrderNumbers()}
                    <div className="mb-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text text_type_main-large">
              Выполнено за всё время:
            </h2>
            <p className="text text_type_digits-large mb-15">{isDoneAllTime}</p>
            <h2 className="text text_type_main-large">Выполнено за сегодня:</h2>
            <p className="text text_type_digits-large">{isDoneToday}</p>
          </div>
        </div>
      </div>
    </>
  );
}
