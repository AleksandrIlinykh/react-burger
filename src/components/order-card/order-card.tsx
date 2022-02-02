import React from "react";
import ingredientImg from "../../images/bun-01.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import orderCardStyles from "./order-card.module.css";

export default function OrderCard() {
  return (
    <section className={orderCardStyles.content}>
      <div className={orderCardStyles.header + " m-5"}>
        <p className="text text_type_digits-default">#034535</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <h2 className={orderCardStyles.name + " m-5 text text_type_main-medium"}>
        Death Star Starship Main бургер
      </h2>
      <div className={orderCardStyles.info + " m-5"}>
        <div className={orderCardStyles.images}>
          <div className={orderCardStyles.imageContainer}>
            <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          </div>
          <div className={orderCardStyles.imageContainer}>
            <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          </div>
          <div className={orderCardStyles.imageContainer}>
            <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          </div>
          <div className={orderCardStyles.imageContainer}>
            <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          </div>
          <div className={orderCardStyles.imageContainer}>
            <img src={ingredientImg} alt="" className={orderCardStyles.image} />
          </div>
        </div>
        <div className={orderCardStyles.price}>
          <p>480</p>

          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
}
