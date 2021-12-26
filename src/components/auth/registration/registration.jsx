import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { registration } from "../../../services/actions/auth/authActions";
import registrationStyles from "./registration.module.css";

function Registration() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  /*
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
*/
  const isRegistrationSucess = useSelector(
    (state) => state.authData.isRegistrationSucess
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
            console.log(name);
          }}
          //icon={"ShowIcon"}
          value={name}
          name={"name"}
          error={false}
          ref={nameRef}
          //onIconClick={onIconClick}
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
            console.log(email);
          }}
          //icon={"ShowIcon"}
          value={email}
          name={"email"}
          error={false}
          ref={emailRef}
          //={onIconClick}
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
            console.log(password);
          }}
          icon={"ShowIcon"}
          value={password}
          name={"password"}
          error={false}
          ref={passwordRef}
          //onIconClick={onIconClick}
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
