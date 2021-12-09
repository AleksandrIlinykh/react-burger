import React, { useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../ingredient-card/ingredient-card";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import { BurgerConstructorContext } from "../../context/burger-context";
import { hideIngredientDetails } from "../../services/actions/ingredient-details";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

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

  const { iSIngredientDetailsActive, ingredientDetailsId, ingredients } =
    useSelector((store) => ({
      ingredientDetailsId: store.ingredientDetails.ingredientDetailsId,
      iSIngredientDetailsActive:
        store.ingredientDetails.iSIngredientDetailsActive,
      ingredients: store.burgerIngredients.ingredients,
    }));

  function handleTab(e) {
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

  const { isLoading } = useSelector((state) => ({
    isLoading: state.burgerIngredients.loading,
  }));

  //---------------------------------------------------------------------
  //scroll
  const refBun = useRef(null);
  const refSauce = useRef(null);
  const refFilling = useRef(null);

  const onScroll = (e) => {
    const bunPosition = refBun.current.getBoundingClientRect().top;
    const saucePosition = refSauce.current.getBoundingClientRect().top;
    const fillingPosition = refFilling.current.getBoundingClientRect().top;
    console.log(`${bunPosition}, ${saucePosition}, ${fillingPosition}`);

    if (
      Math.abs(bunPosition) < Math.abs(saucePosition) &&
      Math.abs(bunPosition) < Math.abs(fillingPosition)
    ) {
      setLink1Style(burgerIngredientsStyles.linkactive);
      setLink2Style(burgerIngredientsStyles.linkinactive);
      setLink3Style(burgerIngredientsStyles.linkinactive);
    }

    if (
      Math.abs(saucePosition) < Math.abs(bunPosition) &&
      Math.abs(saucePosition) < Math.abs(fillingPosition)
    ) {
      setLink1Style(burgerIngredientsStyles.linkinactive);
      setLink2Style(burgerIngredientsStyles.linkactive);
      setLink3Style(burgerIngredientsStyles.linkinactive);
    }

    if (
      Math.abs(fillingPosition) < Math.abs(bunPosition) &&
      Math.abs(fillingPosition) < Math.abs(saucePosition)
    ) {
      setLink1Style(burgerIngredientsStyles.linkinactive);
      setLink2Style(burgerIngredientsStyles.linkinactive);
      setLink3Style(burgerIngredientsStyles.linkactive);
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
            <h1 className="mt-10" id="sauce" ref={refSauce}>
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
            <h1 className="mt-10" id="main" ref={refFilling}>
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
  }, [isLoading, bunCounter, ingredientsData]);

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
