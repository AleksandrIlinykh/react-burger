import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import passwordRecoveryStyles from "./password-recovery.module.css";
import { recoverPassword } from "../../../services/actions/auth/authActions";

function PasswordRecovery() {
  const [email, setEmail] = React.useState("");
  const emailRef = React.useRef(null);
  const isPasswordRecoverySucess = useSelector(
    (state) => state.authData.isPasswordRecoverySucess
  );
  /*
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
*/
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
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
    
    //history.replace({ pathname: "/password-updating" });
  };

  if (isPasswordRecoverySucess)
    history.replace({ pathname: "/password-updating" });

  return (
    <section className={passwordRecoveryStyles.passwordRecoveryContainer}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Укажите e-mail"}
          onChange={(e) => setEmail(e.target.value)}
          //icon={"ShowIcon"}
          value={email}
          name={"email"}
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
