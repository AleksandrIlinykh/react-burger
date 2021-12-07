import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import {
  BurgerConstructorContext,
  ChosenIngredientsContext,
  TotalPriceContext,
} from "../../context/burger-context";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients";

const ENDPOINT = "https://norma.nomoreparties.space";

const initialState = { price: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "recalculate": {
      return { price: state.price + action.payload };
    }
    default:
  }
}

function App() {
  const chosenIngredientsState = React.useState([]);
  const [ingredientsData, setIngredientsData] = React.useState([]);
  const [totalPriceState, totalPriceDispatcher] = React.useReducer(
    reducer,
    initialState,
    undefined
  );

  const ingredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  React.useEffect(() => {
    const getIngredients = async () => {
      fetch(`${ENDPOINT}/api/ingredients`)
        .then((res) => {
          if (res.ok) {
            return res;
          } else {
            throw new Error("Network response was not OK");
          }
        })
        .then((res) => res.json())

        .then((data) => setIngredientsData(data.data))
        .catch((e) => {
          console.log("Error: " + e.message);
          console.log(e.response);
        });
    };
    getIngredients();
    //setchosenIngredients(chosenIngredientsData);
  }, []);

  return (
    <>
      <AppHeader />
      <BurgerConstructorContext.Provider value={ingredients}>
        <ChosenIngredientsContext.Provider value={chosenIngredientsState}>
          <TotalPriceContext.Provider
            value={{ totalPriceState, totalPriceDispatcher }}
          >
            <div className={appStyles.content}>
              <div className={appStyles.contentleft}>
                <h1 className="text text_type_main-large mt-10 mb-5">
                  {" "}
                  Соберите бургер
                </h1>
                <BurgerIngredients data={ingredientsData} />
              </div>
              <div className={appStyles.contentleft}>
                <BurgerConstructor endpoint={ENDPOINT} />
              </div>
            </div>
          </TotalPriceContext.Provider>
        </ChosenIngredientsContext.Provider>
      </BurgerConstructorContext.Provider>
    </>
  );
}

export default App;
