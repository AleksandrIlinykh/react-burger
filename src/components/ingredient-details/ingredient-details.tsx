import ingredientDetailsStyles from "./ingredient-details.module.css";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";

import { TIngredientType } from "../../services/types/data";

function IngredientDetails() {
  let { ingredientId } = useParams<{ ingredientId: string }>();
  ingredientId = ingredientId.slice(0, -1);
  const ingredient = useSelector(
    (store) =>
      store.burgerIngredients.ingredients.filter(
        (ingredient: TIngredientType) => ingredient._id === ingredientId
      )[0]
  );

  return (
    <>
      {ingredient && (
        <section className={ingredientDetailsStyles.ingredientdetails}>
          <h2
            className={
              ingredientDetailsStyles.header +
              " text text_type_main-large mt-10 ml-10 mr-10"
            }
          >
            Детали ингредиента
          </h2>
          <div className={ingredientDetailsStyles.content}>
            <img src={ingredient.image_large} alt="Тут картинка из props" />
            <p className="text text_type_main-medium mt-4" data-test-id={'ingredient-name'}>{ingredient.name}</p>
            <ul
              className={
                ingredientDetailsStyles.parameters +
                " text_color_inactive mt-8 mb-15"
              }
            >
              <li className={ingredientDetailsStyles.parameter}>
                <p className="text text_type_main-small">Каллории, ккал</p>
                <p className="text text_type_digits-default mt-2" data-test-id={'ingredient-calories'}>
                  {ingredient.calories}
                </p>
              </li>
              <li className={ingredientDetailsStyles.parameter}>
                <p className="text text_type_main-small">Белки, г</p>
                <p className="text text_type_digits-default mt-2" data-test-id={'ingredient-proteins'}>
                  {ingredient.proteins}
                </p>
              </li>
              <li className={ingredientDetailsStyles.parameter}>
                <p className="text text_type_main-small">Жиры, г</p>
                <p className="text text_type_digits-default mt-2" data-test-id={'ingredient-fat'}>
                  {ingredient.fat}
                </p>
              </li>
              <li className={ingredientDetailsStyles.parameter}>
                <p className="text text_type_main-small">Углеводы, г</p>
                <p className="text text_type_digits-default mt-2" data-test-id={'ingredient-carbohydrates'}>
                  {ingredient.carbohydrates}
                </p>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default IngredientDetails;
