import React from "react";
import ingredientImg from "../../images/bun-01.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import orderCardStyles from "./order-card.module.css";

export default function OrderList() {
  return (
    <section className={orderCardStyles.content}>
      <div className={orderCardStyles.header + " m-5"}>
        <p>#034535</p>
        <p>Сегодня, 16:20 i-GMT+3</p>
      </div>
      <h2 className={orderCardStyles.name + " m-5"}>
        Death Star Starship Main бургер
      </h2>
      <div className={orderCardStyles.info + " m-5"}>
        <div className={orderCardStyles.images}>
          <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          <img src={ingredientImg} alt="" className={orderCardStyles.image} />
        </div>
        <div className={orderCardStyles.price}>
          <p>480</p>

          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
}
