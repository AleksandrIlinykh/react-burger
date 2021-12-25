import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import LogIn from "../auth/log-in/log-in";
import Registration from "../auth/registration/registration";
import PasswordRecovery from "../auth/password-recovery/password-recovery";
import PasswordUpdating from "../auth/password-updating/password-updating";
import Profile from "../profile/profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/forgot-password">
            <PasswordRecovery />
          </Route>
          <Route path="/password-updating">
            <PasswordUpdating />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/constructor">
            <>
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
          </Route>
        </Switch>
      </Router>
    </>

    /*
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
    */
  );
}

export default App;
