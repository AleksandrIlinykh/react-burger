import React from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import OrderCard from "../../components/order-card/order-card";
import orderContainerStyles from "./order-container.module.css";
import { RootState } from "../../services/types/index";
export default function OrderContainer() {
  const { ingredients } = useSelector((store: RootState) => ({
    ingredients: store.burgerIngredients.ingredients,
  }));

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
