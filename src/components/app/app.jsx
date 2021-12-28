import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookies";
import { BrowserRouter as Router } from "react-router-dom";

import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import { getUserInfo } from "../../services/actions/auth/authActions";
import { getRefreshToken } from "../../services/actions/auth/authActions";

import { ModalSwitch } from "../modal-switch/modal-switch";
export default function App() {
  const dispatch = useDispatch();

  /*
  const { accessToken } = useSelector((store) => ({
    accessToken: store.authData.accessToken,
  }));
*/
  const accessToken = getCookie("acessToken");

  useEffect(() => {
    dispatch(getBurgerIngredients());
    if (accessToken) {
      dispatch(getUserInfo());
    }

    /*
    if (accessTokenExpired)
      dispatch(
        getRefreshToken({
          token: `${getCookie("refreshToken")}`,
        })
      );
      */
  }, []);

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
