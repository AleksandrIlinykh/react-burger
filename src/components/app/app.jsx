import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { ProtectedRoute } from "../protected-route/protected-route ";
import appStyles from "./app.module.css";
import { getCookie } from "../../utils/cookies";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { hideIngredientDetails } from "../../services/actions/ingredient-details";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import { getUserInfo } from "../../services/actions/auth/authActions";
import { getRefreshToken } from "../../services/actions/auth/authActions";

import LogIn from "../auth/log-in/log-in";
import Registration from "../auth/registration/registration";
import PasswordRecovery from "../auth/password-recovery/password-recovery";
import PasswordUpdating from "../auth/password-updating/password-updating";
import Profile from "../profile/profile";
import IngredientsDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";

export default function App() {
  const dispatch = useDispatch();

  const { isPasswordRecoverySucess, getUserInfoSucess, refreshToken } =
    useSelector((store) => ({
      isPasswordRecoverySucess: store.authData.isPasswordRecoverySucess,
      getUserInfoSucess: store.authData.getUserInfoSucess,
      refreshToken: store.authData.refreshToken,
    }));

  useEffect(() => {
    dispatch(getBurgerIngredients());
    dispatch(getUserInfo());
    if (!getUserInfoSucess)
      dispatch(
        getRefreshToken({
          token: `${getCookie("refreshToken")}`,
        })
      );
  }, [dispatch]);

  const ModalSwitch = () => {
    const location = useLocation();
    const history = useHistory();
    let background = location.state && location.state.background;

    const handleModalClose = () => {
      dispatch(hideIngredientDetails());

      history.goBack();
    };

    return (
      <>
        <Switch location={background || location}>
          <Route path="/ingredients/:ingredientId" exact>
            <AppHeader />
            <IngredientsDetails />
          </Route>

          <ProtectedRoute path="/login" forAuth={true} redirectTo={"/"}>
            <AppHeader />
            <LogIn />
          </ProtectedRoute>

          <ProtectedRoute path="/registration" forAuth={true} redirectTo={"/"}>
            <AppHeader />
            <Registration />
          </ProtectedRoute>

          <ProtectedRoute
            path="/forgot-password"
            forAuth={true}
            redirectTo={"/"}
          >
            <AppHeader />
            <PasswordRecovery />
          </ProtectedRoute>

          <ProtectedRoute
            path="/password-updating"
            forAuth={true}
            redirectTo={"/"}
            addPermissionCondition={isPasswordRecoverySucess}
          >
            <AppHeader />
            <PasswordUpdating />
          </ProtectedRoute>

          <ProtectedRoute path="/profile" forAuth={false} redirectTo={"/login"}>
            <AppHeader />
            <Profile />
          </ProtectedRoute>

          <Route path="/">
            <AppHeader />
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

        {background && (
          <Route
            path="/ingredients/:ingredientId"
            children={
              <Modal handleModalClose={handleModalClose}>
                <IngredientsDetails />
              </Modal>
            }
          />
        )}
      </>
    );
  };

  return (
    <>
      <Router>
        <ModalSwitch />
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

