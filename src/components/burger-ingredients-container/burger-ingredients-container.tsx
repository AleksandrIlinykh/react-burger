import React from "react";
import burgerIngredientsContainerStyles from "./burger-ingredients-container.module.css";
import { useSelector } from "../../services/hooks";
import IngredientCard from "../ingredient-card/ingredient-card";
import { TIngredientType } from "../../services/types/data";

type TBurgerIngredientsContainerType = {
  header: string;
  reference: React.RefObject<HTMLDivElement>;
  type: string;
};

const BurgerIngredientsContainer = ({
  header,
  reference,
  type,
}: TBurgerIngredientsContainerType) => {
  const { ingredients } = useSelector((store) => ({
    ingredients: store.burgerIngredients.ingredients,
  }));

  return (
    <div>
      <h1 className="mt-10" id={type} ref={reference}>
        {header}
      </h1>
      <div className="ml-4 mt-6 mb-10">
        <div
          className={
            burgerIngredientsContainerStyles.ingredientconteinercontent
          }
        >
          {ingredients
            .filter((cardData: TIngredientType) => cardData.type === type)
            .map((cardData: TIngredientType) => (
              <div key={cardData._id} data-test-id={cardData._id}>
                {cardData.image &&
                  cardData.image_large &&
                  cardData.name &&
                  cardData.price &&
                  cardData.calories &&
                  cardData.proteins &&
                  cardData.fat &&
                  cardData.carbohydrates &&
                  cardData._id &&
                  cardData.type && (
                    <IngredientCard
                      image={cardData.image}
                      image_large={cardData.image_large}
                      name={cardData.name}
                      price={cardData.price}
                      calories={cardData.calories}
                      proteins={cardData.proteins}
                      fat={cardData.fat}
                      carbohydrates={cardData.carbohydrates}
                      _id={cardData._id}
                      key={cardData._id}
                      type={cardData.type}
                    />
                  )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerIngredientsContainer;
