import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import passwordRecoveryStyles from "./password-recovery.module.css";

function PasswordRecovery() {
  const [value, setValue] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  return (
    <section className={passwordRecoveryStyles.passwordRecoveryContainer}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Укажите e-mail"}
          onChange={(e) => setValue(e.target.value)}
          //icon={"ShowIcon"}
          //value={value}
          name={"name"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
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
    </section>
  );
}

export default PasswordRecovery;
