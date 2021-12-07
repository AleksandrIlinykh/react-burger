import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../ingredient-card/ingredient-card";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import { BurgerConstructorContext } from "../../context/burger-context";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("one");
  const [bunCounter, setBunCounter] = React.useState(0);
  const [link1Style, setLink1Style] = React.useState(
    burgerIngredientsStyles.linkactive
  );
  const [link2Style, setLink2Style] = React.useState(
    burgerIngredientsStyles.linkinactive
  );
  const [link3Style, setLink3Style] = React.useState(
    burgerIngredientsStyles.linkinactive
  );
  const ingredientsData = React.useContext(BurgerConstructorContext);

  function handleTab(e) {
    console.log(ingredientsData);
    setCurrent(e);
    switch (e) {
      case "one":
        setLink1Style(burgerIngredientsStyles.linkactive);
        setLink2Style(burgerIngredientsStyles.linkinactive);
        setLink3Style(burgerIngredientsStyles.linkinactive);
        break;
      case "two":
        setLink1Style(burgerIngredientsStyles.linkinactive);
        setLink2Style(burgerIngredientsStyles.linkactive);
        setLink3Style(burgerIngredientsStyles.linkinactive);
        break;
      case "three":
        setLink1Style(burgerIngredientsStyles.linkinactive);
        setLink2Style(burgerIngredientsStyles.linkinactive);
        setLink3Style(burgerIngredientsStyles.linkactive);
        break;
      default:
        break;
    }
  }

  const { burgerIngredients, isLoading } = useSelector((state) => ({
    burgerIngredients: state.burgerIngredients.ingredients,
    isLoading: state.burgerIngredients.loading,
  }));

  const content = useMemo(() => {
    return isLoading ? (
      <p className="text text_type_main-large">Загрузка...</p>
    ) : (
      <>
        <div className={burgerIngredientsStyles.ingredientscontainer}>
          <div>
            <h1 className="mt-10" id="bun">
              Булки
            </h1>
            <div className="ml-4 mt-6 mb-10">
              <div
                className={burgerIngredientsStyles.ingredientconteinercontent}
              >
                {ingredientsData
                  .filter((cardData) => cardData.type === "bun")
                  .map((cardData, index) => (
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
                        setBunCounter={setBunCounter}
                        bunCounter={bunCounter}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-10" id="sauce">
              Соусы
            </h1>
            <div className="ml-4 mt-6 mb-10">
              <div
                className={burgerIngredientsStyles.ingredientconteinercontent}
              >
                {ingredientsData
                  .filter((cardData) => cardData.type === "sauce")
                  .map((cardData, index) => (
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
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-10" id="main">
              Начинки
            </h1>
            <div className="ml-4 mt-6 mb-10">
              <div
                className={burgerIngredientsStyles.ingredientconteinercontent}
              >
                {ingredientsData
                  .filter((cardData) => cardData.type === "main")
                  .map((cardData, index) => (
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
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }, [burgerIngredients, isLoading]);

  return (
    <>
      <div className={burgerIngredientsStyles.tab}>
        <Tab value="one" active={current === "one"} onClick={handleTab}>
          <a className={link1Style} href="#bun">
            {" "}
            Булки{" "}
          </a>
        </Tab>
        <Tab value="two" active={current === "two"} onClick={handleTab}>
          <a className={link2Style} href="#sauce">
            {" "}
            Соусы{" "}
          </a>
        </Tab>
        <Tab value="three" active={current === "three"} onClick={handleTab}>
          <a className={link3Style} href="#main">
            {" "}
            Начинки{" "}
          </a>
        </Tab>
      </div>
      {content}
    </>
  );
};

export default BurgerIngredients;
