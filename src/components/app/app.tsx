import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookies";
import { BrowserRouter as Router } from "react-router-dom";

import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import { getUserInfo, refreshToken } from "../../services/actions/auth";
import { store } from "../../services/store";
import { ModalSwitch } from "../modal-switch/modal-switch";
export default function App() {
  const { getUserInfoFailed, refreshTokenSucess } = useSelector(
    (store: any) => ({
      getUserInfoFailed: store.authData.getUserInfoFailed,
      refreshTokenSucess: store.authData.refreshTokenSucess,
    })
  );

  const dispatch = useDispatch();

  const accessToken = getCookie("acessToken");

  useEffect(() => {
    dispatch(getBurgerIngredients());
    if (accessToken) {
      dispatch(getUserInfo());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (getUserInfoFailed) {
      refreshToken(1);
    }
  }, [getUserInfoFailed]);

  useEffect(() => {
    if (refreshTokenSucess) {
      dispatch(getUserInfo());
    }
  }, [refreshTokenSucess]);

  return (
    <>
      <Router>
        <ModalSwitch />
      </Router>
    </>
  );
}
