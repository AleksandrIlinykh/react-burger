import { useEffect } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { getCookie } from "../../utils/cookies";
import { BrowserRouter as Router } from "react-router-dom";
import { RootState } from "../../services/types/index";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import { getUserInfo, refreshToken } from "../../services/actions/auth";
import { ModalSwitch } from "../modal-switch/modal-switch";
export default function App() {
  const { getUserInfoFailed, refreshTokenSucess } = useSelector(
    (store: RootState) => ({
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
      dispatch(refreshToken(1));
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
