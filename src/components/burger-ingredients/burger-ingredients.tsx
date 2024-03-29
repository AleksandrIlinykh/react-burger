import React, { useRef } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import BurgerIngredientsContainer from "../burger-ingredients-container/burger-ingredients-container";

const BurgerIngredients = () => {
  const [activeTabLink, setactiveTabLink] = React.useState("bun");

  function handleTab(type: string) {
    switch (type) {
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

  //---------------------------------------------------------------------
  //scroll
  const refBun = useRef<HTMLHeadingElement>(null);
  const refSauce = useRef<HTMLHeadingElement>(null);
  const refFilling = useRef<HTMLHeadingElement>(null);

  const onScroll = (type: string) => {
    let bunPosition: number = 0;
    let saucePosition: number = 0;
    let fillingPosition: number = 0;

    if (refBun && refBun.current) {
      bunPosition = refBun.current.getBoundingClientRect().top - 300;
    }
    if (refSauce && refSauce.current) {
      saucePosition = refSauce.current.getBoundingClientRect().top - 300;
    }
    if (refFilling && refFilling.current) {
      fillingPosition = refFilling.current.getBoundingClientRect().top - 300;
    }

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

  return (
    <>
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
      <div
        className={burgerIngredientsStyles.ingredients}
        onScroll={() => onScroll}
      >
        <BurgerIngredientsContainer
          header={"Булки"}
          type={"bun"}
          reference={refBun}
        />
        <BurgerIngredientsContainer
          header={"Соусы"}
          type={"sauce"}
          reference={refSauce}
        />
        <BurgerIngredientsContainer
          header={"Начинки"}
          type={"main"}
          reference={refFilling}
        />
      </div>
    </>
  );
};

export default BurgerIngredients;
