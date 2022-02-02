import React from "react";
import { useSelector } from "../../services/hooks";
import OrderCard from "../../components/order-card/order-card";
import orderContainerStyles from "./order-container.module.css";
import { RootState } from "../../services/types/index";
export default function OrderContainer() {
  const { orders } = useSelector((store: any) => ({
    orders: store.ws.orders,
  }));

  const cards = () => {
    return orders?.map((orderData: any) => (
      <OrderCard
        id={orderData.number}
        createdAt={orderData.createdAt}
        name={orderData.name}
        ingredientsIds={orderData.ingredients}
      ></OrderCard>
    ));
  };

  return (
    <>
      <div className={orderContainerStyles.contentColumn}>{cards()}</div>
    </>
  );
}
