import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";


import ingredientCardStyles from "./ingredient-card.module.css";
import { showIngredientDetails } from "../../services/actions/ingredient-details";
import { v4 as uuidv4 } from "uuid";

import { TIngredientType } from "../../utils/types";

export type TIngredientCardType = {
  image: string;
  image_large: string;
  name: string;
  price: number;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  _id: string;
  type: string;
};

const IngredientCard = ({
  image,
  image_large,
  name,
  price,
  calories,
  proteins,
  fat,
  carbohydrates,
  _id,
  type,
}: TIngredientCardType) => {
  const [orderCount, setOrderCount] = React.useState(0);

  const { sausesAndFillings, bun } = useSelector((store: any) => ({
    sausesAndFillings: store.burgerConstructor.sausesAndFillings,
    bun: store.burgerConstructor.bun,
  }));

  useEffect(() => {
    const theSameIngredientsAmount =
      sausesAndFillings.filter(
        (ingredient: TIngredientType) => ingredient._id === _id
      ).length +
      (bun._id === _id);
    setOrderCount(theSameIngredientsAmount);
  }, [sausesAndFillings.length, bun._id, _id, sausesAndFillings]);

  const dispatch = useDispatch();

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: {
      ingredient: {
        calories: calories,
        carbohydrates: carbohydrates,
        fat: fat,
        image: image,
        image_large: image_large,
        name: name,
        price: price,
        proteins: proteins,
        type: type,
        _id: _id,
        key: uuidv4(),
      },
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const draggingElementClassName = `${
    ingredientCardStyles.ingredientcard__container
  } ${isDrag && ingredientCardStyles.onDrugging}`;

  const location = useLocation();

  return (
    <Link
      key={_id}
      to={{
        // Тут мы формируем динамический путь для нашего ингредиента
        // а также сохраняем в свойство background роут, на котором была открыта наша модалка.
        pathname: `/ingredients/${_id}}`,
        state: { background: location },
      }}
      //className={styles.link}
    >
      <div
        className={draggingElementClassName}
        onClick={() => dispatch(showIngredientDetails(_id))}
        ref={dragRef}
      >
        <div>
          {orderCount === 0 || <Counter count={orderCount} size="default" />}
          <img src={image} alt={name} className="ml-4 mr-4" />
        </div>
        <div className="mt-1 mb-1">
          <div className={ingredientCardStyles.ingredientcard__price}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={ingredientCardStyles.ingredientcard__description}>
          <p className="text text_type_main-small">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default IngredientCard;
