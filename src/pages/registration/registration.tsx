import React from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { Link, useHistory } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { registration } from "../../services/actions/auth";
import registrationStyles from "./registration.module.css";

function Registration() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const isRegistrationSucess = useSelector(
    (store) => store.authData.isRegistrationSucess
  );

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      registration({
        name: name,
        email: email,
        password: password,
      })
    );
  };

  if (isRegistrationSucess) history.replace({ pathname: "/" });

  return (
    <form
      onSubmit={handleSubmit}
      className={registrationStyles.registrationContainer}
    >
      <p className="text text_type_main-medium">Вход</p>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"E-mail"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Пароль"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          icon={"ShowIcon"}
          value={password}
          name={"password"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <div className="mt-10">
        <Button type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </div>

      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированны?{" "}
          <Link to="login" className={registrationStyles.anchor}>
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Registration;
