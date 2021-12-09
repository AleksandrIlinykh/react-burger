import React from 'react';
import { useDrag } from "react-dnd";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import { ingredientCardTypes } from "../../utils/types";
import ingredientCardStyles from "./ingredient-card.module.css";
import {
  ChosenIngredientsContext,
  TotalPriceContext,
} from "../../context/burger-context";

const IngredientCard = (props) => {
  const [orderCount, setOrderCount] = React.useState(0);
  const [isDetailsHidden, setIsDetailsHidden] = React.useState(true);




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
