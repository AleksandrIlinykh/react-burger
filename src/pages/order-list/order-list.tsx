import React from "react";

import OrderCard from "../../components/order-card/order-card";
import orderListStyles from "./order-list.module.css";

export default function OrderList() {
  return (
    <>
      <h1
        className={
          orderListStyles.header + " text text_type_main-large mt-10 mb-5"
        }
      >
        Лента заказов
      </h1>
      <section className={orderListStyles.content}>
        <div className={orderListStyles.contentColumn}>
          <OrderCard></OrderCard>
          <OrderCard></OrderCard>
          <OrderCard></OrderCard>
        </div>
        <div className={orderListStyles.contentColumn}>2</div>
      </section>
    </>
  );
}
