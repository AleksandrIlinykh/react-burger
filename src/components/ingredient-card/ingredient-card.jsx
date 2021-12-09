import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import { ingredientCardTypes } from "../../utils/types";
import ingredientCardStyles from "./ingredient-card.module.css";
import { showIngredientDetails } from "../../services/actions/ingredient-details";

const IngredientCard = (props) => {
  const [orderCount, setOrderCount] = React.useState(0);

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
  }, [sausesAndFillings.length, bun._id, props._id, sausesAndFillings]);

  const dispatch = useDispatch();

  function handleClick(event) {
    dispatch(showIngredientDetails(props._id));
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
  );
};

IngredientCard.propTypes = ingredientCardTypes;

export default IngredientCard;
