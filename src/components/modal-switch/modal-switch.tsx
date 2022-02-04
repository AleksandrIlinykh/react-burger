import AppHeader from "../app-header/app-header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { ProtectedRoute } from "../protected-route/protected-route ";
import appStyles from "./app.module.css";
import { useSelector, useDispatch } from "../../services/hooks";
import OrderCardDetails from "../order-card-details/order-card-details";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { hideIngredientDetails } from "../../services/actions/ingredient-details";

import LogIn from "../../pages/log-in/log-in";
import Registration from "../../pages/registration/registration";
import PasswordRecovery from "../../pages/password-recovery/password-recovery";
import PasswordUpdating from "../../pages/password-updating/password-updating";
import Profile from "../../pages/profile/profile";
import IngredientsDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { RootState } from "../../services/types/index";
import Feed from "../../pages/feed/feed";

type TLocationState = {
  from: {
    pathname: string;
    search: string;
    hash: string;
    state: any;
  };
  background: {
    pathname: string;
    search: string;
    hash: string;
    state: any;
  };
};

export const ModalSwitch = () => {
  const location = useLocation<TLocationState>();
  const history = useHistory();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();
  const { isPasswordRecoverySucess } = useSelector((store: RootState) => ({
    isPasswordRecoverySucess: store.authData.isPasswordRecoverySucess,
  }));
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

        <ProtectedRoute
          path="/profile/orders/:ingredientId"
          forAuth={false}
          redirectTo={"/login"}
        >
          <AppHeader />
          <IngredientsDetails />
        </ProtectedRoute>

        <Route path="/feed/:orderId" exact>
          <AppHeader />
          <OrderCardDetails />
        </Route>

        <ProtectedRoute
          path={"/login"}
          forAuth={true}
          redirectTo={
            location.state &&
            location.state.from &&
            location.state.from.pathname
              ? location.state.from.pathname
              : "/"
          }
        >
          <AppHeader />
          <LogIn />
        </ProtectedRoute>

        <ProtectedRoute path="/registration" forAuth={true} redirectTo={"/"}>
          <AppHeader />
          <Registration />
        </ProtectedRoute>

        <ProtectedRoute path="/forgot-password" forAuth={true} redirectTo={"/"}>
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

        <Route path="/feed">
          <Feed />
        </Route>

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
      {background && (
        <Route
          path="/feed/:orderId"
          children={
            <Modal handleModalClose={handleModalClose}>
              <OrderCardDetails />
            </Modal>
          }
        />
      )}
      {background && (
        <Route
          path="/profile/orders/:orderId"
          children={
            <Modal handleModalClose={handleModalClose}>
              <OrderCardDetails />
            </Modal>
          }
        />
      )}
    </>
  );
};

