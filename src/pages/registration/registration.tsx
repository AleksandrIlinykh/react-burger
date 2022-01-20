import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { registration } from "../../services/actions/auth/authActions";
import registrationStyles from "./registration.module.css";

function Registration() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const isRegistrationSucess = useSelector(
    (store: any) => store.authData.isRegistrationSucess
  );

  const handleClick = () => {
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
    <section className={registrationStyles.registrationContainer}>
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
        <Button type="primary" size="medium" onClick={handleClick}>
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
    </section>
  );
}

export default Registration;
