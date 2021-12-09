import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import { ingredientCardTypes } from "../../utils/types";
import ingredientCardStyles from "./ingredient-card.module.css";

const IngredientCard = (props) => {
  const [orderCount, setOrderCount] = React.useState(0);
  const [isDetailsHidden, setIsDetailsHidden] = React.useState(true);

  const { sausesAndFillings, bun } = useSelector((store) => ({
    sausesAndFillings: store.burgerConstructor.sausesAndFillings,
    bun: store.burgerConstructor.bun,
  }));

  useEffect(() => {
    const theSameIngredientsAmount =
      sausesAndFillings.filter((ingredient) => ingredient._id === props._id)
        .length +
      (bun._id === props._id);

    setOrderCount(theSameIngredientsAmount);
  }, [sausesAndFillings.length, bun._id]);

  function handleClick(event) {
    setIsDetailsHidden(false);
  }

  function handleModalClose() {
    setIsDetailsHidden(true);
  }

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: { ingredient: props },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const draggingElementClassName = `${
    ingredientCardStyles.ingredientcard__container
  } ${isDrag && ingredientCardStyles.onDrugging}`;
  return (
    <>
      {!isDetailsHidden && (
        <Modal stasus={isDetailsHidden} handleModalClose={handleModalClose}>
          <IngredientDetails
            image={props.image}
            image_large={props.image_large}
            name={props.name}
            calories={props.calories}
            proteins={props.proteins}
            fat={props.fat}
            carbohydrates={props.carbohydrates}
          />
        </Modal>
      )}
      {
        <div
          className={draggingElementClassName}
          onClick={handleClick}
          ref={dragRef}
        >
          <div>
            {orderCount === 0 || <Counter count={orderCount} size="default" />}
            <img src={props.image} alt={props.name} className="ml-4 mr-4" />
          </div>
          <div className="mt-1 mb-1">
            <div className={ingredientCardStyles.ingredientcard__price}>
              <p className="text text_type_digits-default">{props.price}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
          <div className={ingredientCardStyles.ingredientcard__description}>
            <p className="text text_type_main-small">{props.name}</p>
          </div>
        </div>
      }
    </>
  );
};

IngredientCard.propTypes = ingredientCardTypes;

export default IngredientCard;
