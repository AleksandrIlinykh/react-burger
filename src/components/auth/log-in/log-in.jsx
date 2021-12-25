import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import logInStyles from "./log-in.module.css";
import { authorization } from "../../../services/actions/auth/authActions";

function LogIn() {
  const [email, setEmail] = React.useState("value");
  const [password, setPassword] = React.useState("value");

  const inputRef = React.useRef(null);
  /*
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
*/
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuthorizationSucess = useSelector(
    (state) => state.authData.isAuthorizationSucess
  );

  const handleClick = () => {
    dispatch(
      authorization({
        email: email,
        password: password,
      })
    );
    if (isAuthorizationSucess) history.replace({ pathname: "/" });
  };

  return (
    <section className={logInStyles.logInContainer}>
      <p className="text text_type_main-medium">Вход</p>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"E-mail"}
          onChange={(e) => setEmail(e.target.value)}
          //icon={"ShowIcon"}
          //value={value}
          name={"name"}
          error={false}
          ref={inputRef}
          //onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Пароль"}
          onChange={(e) => setPassword(e.target.value)}
          icon={"ShowIcon"}
          //value={value}
          name={"name"}
          error={false}
          ref={inputRef}
          //onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <div className="mt-10">
        <Button type="primary" size="medium" onClick={handleClick}>
          Войти
        </Button>
      </div>

      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive">
          Вы новый пользователь?{" "}
          <Link to="/registration" className={logInStyles.anchor}>
            Зарегистрироваться
          </Link>
        </p>
      </div>

      <div className="mt-4">
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <Link to="/forgot-password" className={logInStyles.anchor}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LogIn;
