import { useEffect } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { wsInit, wsClose } from "../../services/actions/wsActionTypes";

import OrderContainer from "../../components/order-container/order-container";
import AppHeader from "../../components/app-header/app-header";
import feedStyles from "./feed.module.css";

export default function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <div className={feedStyles.content}>
        <div className={feedStyles.contentleft}>
          <h1 className="text text_type_main-large mt-10 mb-5">
            Лента заказов
          </h1>
          <OrderContainer></OrderContainer>
        </div>
        <div className={feedStyles.contentleft}></div>
      </div>
    </>
  );
}
