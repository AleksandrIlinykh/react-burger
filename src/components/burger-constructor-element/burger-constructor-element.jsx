import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import burgerConstructorElementStyles from "./burger-constructor-element.module.css";

export const BurgerConstructorElement = ({ name, price, image, index }) => {
  const handleDeletingIngredient = () => {
    console.log(index);
  };
  return (
    <div className={burgerConstructorElementStyles.element} key={index}>
      <div className={burgerConstructorElementStyles.dragIcon + " mr-3"}>
        <DragIcon type="primary" />
      </div>

      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleDeletingIngredient}
      />
    </div>
  );
};
