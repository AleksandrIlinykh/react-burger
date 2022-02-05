import orderCardDetailsStyles from "./order-card-details.module.css";
import { useSelector, useDispatch } from "../../services/hooks";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredientType } from "../../services/types/data";
import { parseDay } from "../../utils/utils";
import { v4 as uuidv4 } from "uuid";

import {
  getOrder,
  getUserOrder,
} from "../../services/actions/order-ingredients";

function OrderCardDetails() {
  const location = useLocation();
  const dispatch = useDispatch();

  const feedRegex = new RegExp("/feed/");
  const orderRegex = new RegExp("/profile/");

  let { orderId } = useParams<{ orderId: string }>();

  useEffect(() => {
    if (feedRegex.test(location.pathname))
      dispatch(getOrder(location.pathname.slice(6)));
    if (orderRegex.test(location.pathname))
      dispatch(getUserOrder(location.pathname.slice(16)));
  }, [dispatch, orderId]);

  const { order, ingredients } = useSelector((store) => ({
    order: store.ws.modalOrder,
    ingredients: store.burgerIngredients.ingredients,
  }));

  const orderIngredientData = [];
  let totalPrice = 0;

  if (order && ingredients) {
    let set = new Set(order.ingredients);
    const uniqueIds = Array.from(set);
    for (const uniqueId of uniqueIds) {
      let amount = 0;
      for (const orderIngredient of order.ingredients) {
        if (orderIngredient === uniqueId) {
          amount++;
        }
      }
      orderIngredientData.push({ uniqueId, amount });
      amount = 0;
    }

    totalPrice = order.ingredients
      .map(
        (ingredientsId: string) =>
          ingredients.filter(
            (ingredient: TIngredientType) => ingredientsId === ingredient._id
          )[0].price
      )
      .reduce((acc: any, price: any) => acc && price && acc + price);
  }

  return (
    <>
      {order && ingredients && (
        <section className={orderCardDetailsStyles.ingredientdetails + " p-10"}>
          <h3
            className={
              orderCardDetailsStyles.header +
              " text text_type_digits-default mb-10 mt-5"
            }
          >
            {"#" + order.number}
          </h3>
          <h2
            className={
              orderCardDetailsStyles.header + " text text_type_main-medium mb-3"
            }
          >
            {order.name}
          </h2>
          <p className="text text_type_main-default mb-15">
            {order.status === "done" ? "Выполнен" : "Готовится"}
          </p>
          <p className="text text_type_main-medium mb-6">{"Состав:"}</p>
          <div className={orderCardDetailsStyles.consist}>
            {orderIngredientData.map((ingredientData) => (
              <div className={orderCardDetailsStyles.ingredient} key={uuidv4()}>
                <div className={orderCardDetailsStyles.ingredientContainer}>
                  <div
                    className={orderCardDetailsStyles.imageContainer + " mr-6"}
                  >
                    <img
                      className={orderCardDetailsStyles.img}
                      src={
                        ingredients.filter(
                          (ingredient) =>
                            ingredient._id === ingredientData.uniqueId
                        )[0].image
                      }
                      alt=""
                    />
                  </div>

                  <p className="text text_type_main-small mr-6">
                    {
                      ingredients.filter(
                        (ingredient) =>
                          ingredient._id === ingredientData.uniqueId
                      )[0].name
                    }{" "}
                  </p>
                </div>
                <div className={orderCardDetailsStyles.ingredientContainer}>
                  <p className="text text_type_main-small mr-2">
                    {ingredientData.amount +
                      "x" +
                      ingredients.filter(
                        (ingredient) =>
                          ingredient._id === ingredientData.uniqueId
                      )[0].price}
                  </p>

                  <CurrencyIcon type="primary" />
                </div>
              </div>
            ))}
          </div>
          <div className={orderCardDetailsStyles.footer + " mt-10"}>
            <p className="text text_type_main-default text_color_inactive">
              {parseDay(order.createdAt)}
            </p>
            <div className={orderCardDetailsStyles.price}>
              <p>{totalPrice}</p>

              <CurrencyIcon type="primary" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

      
export default OrderCardDetails;
