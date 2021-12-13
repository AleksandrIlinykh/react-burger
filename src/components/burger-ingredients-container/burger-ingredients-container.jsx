import burgerIngredientsContainerStyles from "./burger-ingredients-container.module.css";
import { useSelector } from "react-redux";
import IngredientCard from "../ingredient-card/ingredient-card";

const BurgerIngredientsContainer = ({ header, reference, type }) => {
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
            .filter((cardData) => cardData.type === type)
            .map((cardData) => (
              <div key={cardData._id}>
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
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerIngredientsContainer;
