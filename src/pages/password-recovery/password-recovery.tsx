import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/hooks";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import passwordRecoveryStyles from "./password-recovery.module.css";
import { recoverPassword } from "../../services/actions/auth";

function PasswordRecovery() {
  const [email, setEmail] = React.useState("");
  const isPasswordRecoverySucess = useSelector(
    (store: any) => store.authData.isPasswordRecoverySucess
  );

  const dispatch = useDispatch();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      dispatch(
        recoverPassword({
          email: email,
        })
      );
    }
  };

  if (isPasswordRecoverySucess) {
    return (
      <Redirect
        // Если объект state не является undefined, вернём пользователя назад.
        to="/password-updating"
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={passwordRecoveryStyles.passwordRecoveryContainer}
    >
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Укажите e-mail"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>

      <div className="mt-10">
        <Button type="primary" size="medium">
          Восстановить
        </Button>
      </div>

      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <Link to="login" className={passwordRecoveryStyles.anchor}>
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
}

export default PasswordRecovery;
