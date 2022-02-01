import React from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { useDrop } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorElement } from "../burger-constructor-element/burger-constructor-element";
import burgerConstructorStyles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { addIngredient } from "../../services/actions/burger-constructor";
import { useHistory } from "react-router-dom";
import { getOrderNumber } from "../../services/actions/order-data";
import { RootState } from "../../services/types/index";
import {
  showOrderDetails,
  hideOrderDetails,
} from "../../services/actions/order-details";

type TDropableIngredient = {
  ingredient: {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    name: string;
    price: number;
    proteins: number;
    type: string;
    _id: string;
    key: string;
  };
};
type TItem = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  _id: string;
  key: string;
};

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: TDropableIngredient) {
      dispatch(addIngredient(item.ingredient));
    },
  });

  const { bun, sausesAndFillings, isOrderDetailsActive, isAuth } = useSelector(
    (store: RootState) => ({
      bun: store.burgerConstructor.bun,
      sausesAndFillings: store.burgerConstructor.sausesAndFillings,
      isOrderDetailsActive: store.orderDetails.isOrderDetailsActive,
      isAuth: store.authData.isAuth,
    })
  );

  const history = useHistory();

  function handleMakeOrderClick() {
    if (!isAuth) {
      history.replace({ pathname: "/login" });
      return;
    }

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
      {bun.price && bun.image && (
        <ConstructorElement
          type="top"
          isLocked
          text={bun.name + " (верх)"}
          price={bun.price}
          thumbnail={bun.image}
        />
      )}
    </div>
  );

  const bunBottomIngredient = (
    <div className={burgerConstructorStyles.element + " pl-8"}>
      {bun.price && bun.image && (
        <ConstructorElement
          type="bottom"
          isLocked
          text={bun.name + " (низ)"}
          price={bun.price}
          thumbnail={bun.image}
        />
      )}
    </div>
  );

  const bunPrice = bun.price && bun.price;
  const innerPrice =
    sausesAndFillings.length &&
    sausesAndFillings
      .map((elem: any) => elem.price)
      .reduce((sum: number, price: number) => sum + price);

  const totalPrice = (innerPrice ? innerPrice : 0) + (bunPrice ? bunPrice : 0);

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
              sausesAndFillings.map((chosenIngredient: any, index: number) => (
                <BurgerConstructorElement
                  name={chosenIngredient.name}
                  price={chosenIngredient.price}
                  image={chosenIngredient.image}
                  key={index}
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
                <CurrencyIcon type="primary" />
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
