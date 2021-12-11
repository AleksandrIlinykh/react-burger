import React, { useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../ingredient-card/ingredient-card";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import { hideIngredientDetails } from "../../services/actions/ingredient-details";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = () => {
  const [bunCounter, setBunCounter] = React.useState(0);
  const [activeTabLink, setactiveTabLink] = React.useState("bun");

  const { iSIngredientDetailsActive, ingredientDetailsId, ingredients } =
    useSelector((store) => ({
      ingredientDetailsId: store.ingredientDetails.ingredientDetailsId,
      iSIngredientDetailsActive:
        store.ingredientDetails.iSIngredientDetailsActive,
      ingredients: store.burgerIngredients.ingredients,
    }));

  function handleTab(e) {
    switch (e) {
      case "one":
        setactiveTabLink("bun");
        break;
      case "two":
        setactiveTabLink("sauces");
        break;
      case "three":
        setactiveTabLink("fillings");
        break;
      default:
        setactiveTabLink("bun");
        break;
    }
  }

  const { isLoading } = useSelector((state) => ({
    isLoading: state.burgerIngredients.loading,
  }));

  //---------------------------------------------------------------------
  //scroll
  const refBun = useRef(null);
  const refSauce = useRef(null);
  const refFilling = useRef(null);

  const onScroll = (e) => {
    const bunPosition = refBun.current.getBoundingClientRect().top - 300;
    const saucePosition = refSauce.current.getBoundingClientRect().top - 300;
    const fillingPosition =
      refFilling.current.getBoundingClientRect().top - 300;
    console.log(`${bunPosition}, ${saucePosition}, ${fillingPosition}`);

    if (
      Math.abs(bunPosition) < Math.abs(saucePosition) &&
      Math.abs(bunPosition) < Math.abs(fillingPosition)
    ) {
      setactiveTabLink("bun");
    }

    if (
      Math.abs(saucePosition) < Math.abs(bunPosition) &&
      Math.abs(saucePosition) < Math.abs(fillingPosition)
    ) {
      setactiveTabLink("sauces");
    }

    if (
      Math.abs(fillingPosition) < Math.abs(bunPosition) &&
      Math.abs(fillingPosition) < Math.abs(saucePosition)
    ) {
      setactiveTabLink("fillings");
    }
  };

  const content = useMemo(() => {
    return isLoading ? (
      <p className="text text_type_main-large">Загрузка...</p>
    ) : (
      <>
        <div
          className={burgerIngredientsStyles.ingredientscontainer}
          onScroll={onScroll}
        >
          <div>
            <h1 className="mt-10" id="bun" ref={refBun}>
              Булки
            </h1>
            <div className="ml-4 mt-6 mb-10">
              <div
                className={burgerIngredientsStyles.ingredientconteinercontent}
              >
                {ingredients
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
                        bunCounter={bunCounter}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-10" id="sauce" ref={refSauce}>
              Соусы
            </h1>
            <div className="ml-4 mt-6 mb-10">
              <div
                className={burgerIngredientsStyles.ingredientconteinercontent}
              >
                {ingredients
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
            <h1 className="mt-10" id="main" ref={refFilling}>
              Начинки
            </h1>
            <div className="ml-4 mt-6 mb-10">
              <div
                className={burgerIngredientsStyles.ingredientconteinercontent}
              >
                {ingredients
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
  }, [isLoading, bunCounter, ingredients]);

  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(hideIngredientDetails());
  };
  const ingredientDetailsData = ingredients.filter(
    (ingredient) => ingredient._id === ingredientDetailsId
  )[0];

  return (
    <>
      {!iSIngredientDetailsActive || (
        <Modal handleModalClose={handleModalClose}>
          <IngredientDetails
            image={ingredientDetailsData.image}
            image_large={ingredientDetailsData.image_large}
            name={ingredientDetailsData.name}
            calories={ingredientDetailsData.calories}
            proteins={ingredientDetailsData.proteins}
            fat={ingredientDetailsData.fat}
            carbohydrates={ingredientDetailsData.carbohydrates}
          />
        </Modal>
      )}

      <div className={burgerIngredientsStyles.tab}>
        <Tab value="one" active={activeTabLink === "bun"} onClick={handleTab}>
          <a
            className={`${burgerIngredientsStyles.linkinactive} ${
              activeTabLink === "bun" && burgerIngredientsStyles.linkactive
            }`}
            href="#bun"
          >
            {" "}
            Булки{" "}
          </a>
        </Tab>
        <Tab
          value="two"
          active={activeTabLink === "sauces"}
          onClick={handleTab}
        >
          <a
            className={`${burgerIngredientsStyles.linkinactive} ${
              activeTabLink === "sauces" && burgerIngredientsStyles.linkactive
            }`}
            href="#sauce"
          >
            {" "}
            Соусы{" "}
          </a>
        </Tab>
        <Tab
          value="three"
          active={activeTabLink === "fillings"}
          onClick={handleTab}
        >
          <a
            className={`${burgerIngredientsStyles.linkinactive} ${
              activeTabLink === "fillings" && burgerIngredientsStyles.linkactive
            }`}
            href="#main"
          >
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
