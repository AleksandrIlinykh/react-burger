import { useEffect } from "react";
import { useSelector } from "../../services/hooks";
import { Link, useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { RootState } from "../../services/types/index";
import { parseDay } from "../../utils/utils";
import orderCardStyles from "./order-card.module.css";
import { TIngredientType } from "../../services/types/data";
export type TOrderCard = {
  id: number;
  createdAt: string;
  name: string;
  ingredientsIds: Array<string>;
};

export default function OrderCard({
  id,
  createdAt,
  name,
  ingredientsIds,
}: TOrderCard) {
  const { ingredients, ingredientsPrices } = useSelector(
    (store: RootState) => ({
      ingredients: store.burgerIngredients.ingredients,
      /*
      ingredientsImgs: ingredientsIds.map(
        (ingredientsId: string) =>
          store.burgerIngredients.ingredients.filter(
            (ingredient: TIngredientType) => ingredientsId === ingredient._id
          )[0].image
      ),
      */
      ingredientsPrices: ingredientsIds.map(
        (ingredientsId: string) =>
          store.burgerIngredients.ingredients.filter(
            (ingredient: TIngredientType) => ingredientsId === ingredient._id
          )[0].price
      ),
    })
  );

  type orderIngredientImgData = {
    img: string | undefined;
    amount: number;
  };

  const orderIngredientImgData: Array<orderIngredientImgData> = [];

  if (ingredientsIds && ingredients) {
    let set = new Set(ingredientsIds);
    const uniqueIds = Array.from(set);
    for (const uniqueId of uniqueIds) {
      let amount = 0;
      for (const ingredientsId of ingredientsIds) {
        if (ingredientsId === uniqueId) {
          amount++;
        }
      }
      const img = ingredients.filter(
        (ingredient: TIngredientType) => uniqueId === ingredient._id
      )[0].image;

      orderIngredientImgData.push({ img, amount });
      amount = 0;
    }
  }

  const totalPrice = ingredientsPrices.reduce(
    (acc, price) => acc && price && acc + price
  );

  interface LocationState {
    from: {
      pathname: string;
    };
  }

  const location = useLocation<LocationState>();
  const modalPathname =
    location.pathname === "/profile/orders"
      ? `/profile/orders/${id}`
      : `/feed/${id}`;

  return (
    <section className={orderCardStyles.content}>
      <Link
        key={id}
        to={{
          // Тут мы формируем динамический путь для нашего ингредиента
          // а также сохраняем в свойство background роут, на котором была открыта наша модалка.
          pathname: modalPathname,
          state: { background: location },
        }}
        //className={styles.link}
      >
        <div className={orderCardStyles.header + " m-5"}>
          <p className="text text_type_digits-default">#{id}</p>
          <p className="text text_type_main-default text_color_inactive">
            {parseDay(createdAt)}
          </p>
        </div>
        <h2
          className={orderCardStyles.name + " m-5 text text_type_main-medium"}
        >
          {name}
        </h2>
        <div className={orderCardStyles.info + " m-5"}>
          <div className={orderCardStyles.images}>
            {orderIngredientImgData.map((ingredientImg: any) => (
              <div className={orderCardStyles.imageContainer}>
                <p
                  className={
                    orderCardStyles.amount + " text text_type_main-medium"
                  }
                >
                  {ingredientImg.amount > 1 ? "+" + ingredientImg.amount : ""}
                </p>
                <img
                  src={ingredientImg.img}
                  alt=""
                  className={orderCardStyles.image}
                />
              </div>
            ))}
          </div>
          <div className={orderCardStyles.price}>
            <p>{totalPrice}</p>

            <CurrencyIcon type="primary" />
          </div>
        </div>
      </Link>
    </section>
  );
}
