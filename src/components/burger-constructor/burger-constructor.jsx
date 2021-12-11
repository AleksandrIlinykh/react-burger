import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorElement } from "../burger-constructor-element/burger-constructor-element";
import burgerConstructorStyles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { addIngredient } from "../../services/actions/burger-constructor";

import { getOrderNumber } from "../../services/actions/order-data";
import {
  showOrderDetails,
  hideOrderDetails,
} from "../../services/actions/order-details";

const BurgerConstructor = (props) => {
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch(addIngredient(item.ingredient));
    },
  });

  const { bun, sausesAndFillings, isOrderDetailsActive } = useSelector(
    (store) => ({
      bun: store.burgerConstructor.bun,
      sausesAndFillings: store.burgerConstructor.sausesAndFillings,
      isOrderDetailsActive: store.orderDetails.isOrderDetailsActive,
    })
  );

  function handleMakeOrderClick() {
    const chosenIngredientsData = [bun, ...sausesAndFillings];
    const bodyData = {
      ingredients: chosenIngredientsData.map(
        (ingredientData) => ingredientData._id
      ),
    };
    dispatch(getOrderNumber(bodyData));
    dispatch(showOrderDetails());
  }

  function handleModalClose() {
    dispatch(hideOrderDetails());
  }

  const bunTopIngredient = (
    <div className={burgerConstructorStyles.element + " pl-8"}>
      <ConstructorElement
        type="top"
        isLocked
        text={bun.name + " (верх)"}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  );

  const bunBottomIngredient = (
    <div className={burgerConstructorStyles.element + " pl-8"}>
      <ConstructorElement
        type="bottom"
        isLocked
        text={bun.name + " (низ)"}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  );

  const totalPrice =
    (bun.hasOwnProperty("_id") && bun.price) +
    (sausesAndFillings.length &&
      sausesAndFillings
        .map((elem) => elem.price)
        .reduce((sum, price) => sum + price));
  return (
    <>
      {isOrderDetailsActive && (
        <Modal handleModalClose={handleModalClose}>
          <OrderDetails />
        </Modal>
      )}

      <div
        className={burgerConstructorStyles.container + " mt-25 ml-16"}
        ref={dropTarget}
      >
        <>
          {!bun.hasOwnProperty("_id") || bunTopIngredient}

          <div className={burgerConstructorStyles.ingredientsconstructor}>
            {!sausesAndFillings.length ||
              sausesAndFillings.map((chosenIngredient, index) => (
                <BurgerConstructorElement
                  name={chosenIngredient.name}
                  price={chosenIngredient.price}
                  image={chosenIngredient.image}
                  key={chosenIngredient._id}
                  index={index}
                />
              ))}
          </div>

          {!bun.hasOwnProperty("_id") || bunBottomIngredient}

          {
            <div
              className={
                burgerConstructorStyles.priceandconfirmation + " mt-10 mb-10"
              }
            >
              <p className="text text_type_digits-medium">{totalPrice}</p>
              <div className="mr-10">
                <CurrencyIcon className="mr-10" type="primary" />
              </div>
              <div className="mr-8">
                <Button
                  onClick={handleMakeOrderClick}
                  type="primary"
                  size="large"
                >
                  Оформить заказ
                </Button>
              </div>
            </div>
          }
        </>
      </div>
    </>
  );
};

export default BurgerConstructor;
