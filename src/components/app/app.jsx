import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";

import { getBurgerIngredients } from "../../services/actions/burger-ingredients";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <div className={appStyles.content}>
          <div className={appStyles.contentleft}>
            <h1 className="text text_type_main-large mt-10 mb-5">
              {" "}
              Соберите бургер
            </h1>
            <BurgerIngredients />
          </div>
          <div className={appStyles.contentleft}>
            <BurgerConstructor />
          </div>
        </div>
      </DndProvider>
    </>
  );
}

export default App;
