import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import passwordUpdatingStyles from "./password-updating.module.css";
import { updatePassword } from "../../../services/actions/auth/authActions";
function PasswordUpdating() {
  const [password, setPassword] = React.useState("value");
  const [token, setToken] = React.useState("value");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onIconClick = () => {
    setTimeout(() => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);

    alert("Icon Click Callback");
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(
      updatePassword({
        password: password,
        token: token,
      })
    );
    history.replace({ pathname: "/login" });
  };
  return (
    <section className={passwordUpdatingStyles.passwordUpdatingContainer}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Введите новый пароль"}
          onChange={(e) => setPassword(e.target.value)}
          icon={"ShowIcon"}
          value={password}
          name={"password"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>

      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => setToken(e.target.value)}
          //icon={"ShowIcon"}
          value={token}
          name={"token"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>

      <div className="mt-10">
        <Button type="primary" size="medium" onClick={handleClick}>
          Сохранить
        </Button>
      </div>

      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <Link to="login" className={passwordUpdatingStyles.anchor}>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default PasswordUpdating;
