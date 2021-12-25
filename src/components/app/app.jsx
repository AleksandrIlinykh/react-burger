import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { ProtectedRoute } from "../protected-route/protected-route ";
import appStyles from "./app.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import { getUserInfo } from "../../services/actions/auth/authActions";
import LogIn from "../auth/log-in/log-in";
import Registration from "../auth/registration/registration";
import PasswordRecovery from "../auth/password-recovery/password-recovery";
import PasswordUpdating from "../auth/password-updating/password-updating";
import Profile from "../profile/profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <>
      <Router>
        <AppHeader />
        <Switch>
          <ProtectedRoute path="/login" forAuth={true}>
            <LogIn />
          </ProtectedRoute>
          <ProtectedRoute path="/registration" forAuth={true}>
            <Registration />
          </ProtectedRoute>
          <ProtectedRoute path="/forgot-password" forAuth={true}>
            <PasswordRecovery />
          </ProtectedRoute>
          <ProtectedRoute path="/password-updating" forAuth={true}>
            <PasswordUpdating />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" forAuth={false}>
            <Profile />
          </ProtectedRoute>

          <Route path="/">
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
