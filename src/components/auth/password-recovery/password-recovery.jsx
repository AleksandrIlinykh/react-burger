import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import passwordRecoveryStyles from "./password-recovery.module.css";
import { recoverPassword } from "../../../services/actions/auth/authActions";

function PasswordRecovery() {
  const [email, setEmail] = React.useState("value");
  const emailRef = React.useRef(null);
  /*
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
*/
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      recoverPassword({
        email: email,
      })
    );
  };

  return (
    <section className={passwordRecoveryStyles.passwordRecoveryContainer}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Укажите e-mail"}
          onChange={(e) => setEmail(e.target.value)}
          //icon={"ShowIcon"}
          //value={value}
          name={"name"}
          error={false}
          ref={emailRef}
          //onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>

      <div className="mt-10">
        <Button type="primary" size="medium" onClick={handleClick}>
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
    </section>
  );
}

export default PasswordRecovery;
