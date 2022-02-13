import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "../../services/hooks";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import logInStyles from "./log-in.module.css";
import { authorization } from "../../services/actions/auth";

function LogIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      authorization({
        email: email,
        password: password,
      })
    );
  };
  /*
  if (isAuth) {
    return (
      <Redirect
        // Если объект state не является undefined, вернём пользователя назад.
        to={location.state?.from.pathname || "/"}
      />
    );
  }
*/
  return (
    <form onSubmit={handleSubmit} className={logInStyles.logInContainer}>
      <p className="text text_type_main-medium">Вход</p>
      <div className="mt-6" data-test-id={'log-in__e-mail'}>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={'email'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className="mt-6" data-test-id={'log-in__password'}>
        <Input
          type={'text'}
          placeholder={'Пароль'}
          onChange={(e) => setPassword(e.target.value)}
          icon={'ShowIcon'}
          value={password}
          name={'password'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className="mt-10">
        <Button type="primary" size="medium">
          Войти
        </Button>
      </div>

      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive">
          Вы новый пользователь?{' '}
          <Link to="/registration" className={logInStyles.anchor}>
            Зарегистрироваться
          </Link>
        </p>
      </div>

      <div className="mt-4">
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?{' '}
          <Link to="/forgot-password" className={logInStyles.anchor}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LogIn;
