import orderCardDetailsStyles from "./order-card-details.module.css";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import { RootState } from "../../services/types/index";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredientType } from "../../services/types/data";
import { parseDay } from "../../utils/utils";
import type { TOrder } from "../../services/types/data";

function OrderCardDetails() {
  let { orderId } = useParams<{ orderId: string }>();
  const { order, ingredients } = useSelector((store: RootState) => ({
    order: store.ws.orders.filter(
      (order: TOrder) => order.number === Number(orderId)
    )[0],
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

  /*ingredientId = ingredientId.slice(0, -1);
  const ingredient = useSelector(
    (store: RootState) =>
      store.burgerIngredients.ingredients.filter(
        (ingredient: TIngredientType) => ingredient._id === ingredientId
      )[0]
  );
*/
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
            {"#" + orderId}
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
              <div className={orderCardDetailsStyles.ingredient}>
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
