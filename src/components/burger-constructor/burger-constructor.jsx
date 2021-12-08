import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorElement } from "../burger-constructor-element/burger-constructor-element";
import burgerConstructorStyles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {
  addIngredient,
  deleteIngredient,
} from "../../services/actions/burger-constructor";
import { ChosenIngredientsContext } from "../../context/burger-context";

const BurgerConstructor = (props) => {
  const [isDetailsHidden, setIsDetailsHidden] = React.useState(true);
  const [chosenIngredientsData] = React.useContext(ChosenIngredientsContext);
  const [orderNumber, setOrderNumber] = React.useState(0);

  const { bun, sausesAndFillings, totalPrice } = useSelector((store) => ({
    bun: store.burgerConstructor.bun,
    sausesAndFillings: store.burgerConstructor.sausesAndFillings,
    totalPrice: store.burgerConstructor.totalPrice,
  }));

  function handleMakeOrderClick(event) {
    const bodyData = {
      ingredients: chosenIngredientsData.map(
        (ingredientData) => ingredientData._id
      ),
    };

    const response = async () => {
      fetch(`${props.endpoint}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((res) => setOrderNumber(res.order.number))
        .catch((e) => {
          console.log("Error: " + e.message);
          console.log(e.response);
        });
    };

    response();
    setIsDetailsHidden(false);
  }

  function handleModalClose() {
    setIsDetailsHidden(true);
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

  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      console.log(item);
      dispatch(addIngredient(item.ingredient));
    },
  });

  const propContainerClassName = `${burgerConstructorStyles.container} ${
    isHover && burgerConstructorStyles.isHover
  }`;

  return (
    <>
      {!isDetailsHidden && (
        <Modal stasus={isDetailsHidden} handleModalClose={handleModalClose}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}

      <div
        className={burgerConstructorStyles.container + " mt-25 ml-16"}
        ref={dropTarget}
      >
        <>
          {!bun.hasOwnProperty("_id") || bunTopIngredient}

          {!sausesAndFillings.length || (
            <div className={burgerConstructorStyles.ingredientsconstructor}>
              {sausesAndFillings.map((chosenIngredient, index) => (
                <>
                  {/*<div className={burgerConstructorStyles.element} key={index}>
                    <div className={burgerConstructorStyles.dragIcon + " mr-3"}>
                      <DragIcon type="primary" />
                    </div>

                    <ConstructorElement
                      text={chosenIngredient.name}
                      price={chosenIngredient.price}
                      thumbnail={chosenIngredient.image}
                      key={index}
                    />
                  </div> */}

                  <BurgerConstructorElement
                    name={chosenIngredient.name}
                    price={chosenIngredient.price}
                    image={chosenIngredient.image}
                    index={index}
                    key={index}
                  />
                </>
              ))}
            </div>
          )}

          {!bun.hasOwnProperty("_id") || bunBottomIngredient}

          {!totalPrice || (
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
          )}
        </>
      </div>
    </>
  );
};

export default BurgerConstructor;