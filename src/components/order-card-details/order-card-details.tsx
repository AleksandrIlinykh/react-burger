import orderCardDetailsStyles from "./order-card-details.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../services/types/index";
import { TIngredientType } from "../../services/types/data";

function OrderCardDetails() {
  /*
  let { ingredientId } = useParams<{ ingredientId: string }>();
  ingredientId = ingredientId.slice(0, -1);
  const ingredient = useSelector(
    (store: RootState) =>
      store.burgerIngredients.ingredients.filter(
        (ingredient: TIngredientType) => ingredient._id === ingredientId
      )[0]
  );
*/
  return (
    <>
      {
        /*ingredient*/ 1 && (
          <section className={orderCardDetailsStyles.ingredientdetails}>
            <h2
              className={
                orderCardDetailsStyles.header +
                " text text_type_main-large mt-10 ml-10 mr-10"
              }
            >
              Детали ингредиента
            </h2>
            <div className={orderCardDetailsStyles.content}>
              <img src={"string"} alt="Тут картинка из props" />
              <p className="text text_type_main-medium mt-4">{"string"}</p>
              <ul
                className={
                  orderCardDetailsStyles.parameters +
                  " text_color_inactive mt-8 mb-15"
                }
              >
                <li className={orderCardDetailsStyles.parameter}>
                  <p className="text text_type_main-small">Каллории, ккал</p>
                  <p className="text text_type_digits-default mt-2">
                    {"string"}
                  </p>
                </li>
                <li className={orderCardDetailsStyles.parameter}>
                  <p className="text text_type_main-small">Белки, г</p>
                  <p className="text text_type_digits-default mt-2">
                    {"string"}
                  </p>
                </li>
                <li className={orderCardDetailsStyles.parameter}>
                  <p className="text text_type_main-small">Жиры, г</p>
                  <p className="text text_type_digits-default mt-2">
                    {"string"}
                  </p>
                </li>
                <li className={orderCardDetailsStyles.parameter}>
                  <p className="text text_type_main-small">Углеводы, г</p>
                  <p className="text text_type_digits-default mt-2">
                    {"string"}
                  </p>
                </li>
              </ul>
            </div>
          </section>
        )
      }
    </>
  );
}

export default OrderCardDetails;
