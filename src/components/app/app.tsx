import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCookie } from "../../utils/cookies";
import { BrowserRouter as Router } from "react-router-dom";

import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import { getUserInfo } from "../../services/actions/auth";
import { store } from "../../services/store";
import { ModalSwitch } from "../modal-switch/modal-switch";
export default function App() {
  const dispatch = useDispatch();

  const accessToken = getCookie("acessToken");

  useEffect(() => {
    dispatch(getBurgerIngredients());
    if (accessToken) {
      dispatch(getUserInfo());
    }
  }, [accessToken, dispatch]);

  return (
    <>
      <Router>
        <ModalSwitch />
      </Router>
    </>
  );
}
