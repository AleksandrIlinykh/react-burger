import React from "react";

import OrderCard from "../../components/order-card/order-card";
import orderContainerStyles from "./order-container.module.css";

export default function OrderContainer() {
  return (
    <>
      <div className={orderContainerStyles.contentColumn}>
        <OrderCard></OrderCard>
        <OrderCard></OrderCard>
        <OrderCard></OrderCard>
      </div>
    </>
  );
}
