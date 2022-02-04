import React from "react";
import { useSelector } from "../../services/hooks";
import OrderCard from "../../components/order-card/order-card";
import orderContainerStyles from "./order-container.module.css";
import { RootState } from "../../services/types/index";
import type { TOrder } from "../../services/types/data";
import { v4 as uuidv4 } from "uuid";
export default function OrderContainer() {
  const { orders } = useSelector((store: RootState) => ({
    orders: store.ws.orders,
  }));

  const cards = () => {
    return orders?.map(
      (orderData: TOrder) =>
        orderData.number && (
          <OrderCard
            id={orderData.number}
            createdAt={orderData.createdAt}
            name={orderData.name}
            ingredientsIds={orderData.ingredients}
            key={uuidv4()}
          ></OrderCard>
        )
    );
  };

  return (
    <>
      <div className={orderContainerStyles.contentColumn}>{cards()}</div>
    </>
  );
}
