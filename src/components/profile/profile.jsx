import React from "react";
import {
  EditIcon,
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationElement from "../navigation-element/navigation-element";
import { NavLink } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import profileStyles from "./profile.module.css";

function Profile() {
  return (
    <div className={profileStyles.header + " mt-25"}>
      <div className={profileStyles.header__container}>
        <div className={profileStyles.navBar + " pl-5 mr-5"}>
          <div className={profileStyles.navElement}>
            <NavLink
              to="/profile"
              className={
                profileStyles.navElement + " text text_type_main-medium"
              }
              activeClassName={
                profileStyles.activeNavElement + " text text_type_main-medium"
              }
            >
              Профиль
            </NavLink>
          </div>
          <div className={profileStyles.navElement}>
            <NavLink
              to="/profile/orders"
              className={
                profileStyles.navElement + " text text_type_main-medium"
              }
              activeClassName={
                profileStyles.activeNavElement + " text text_type_main-medium"
              }
            >
              История заказов
            </NavLink>
          </div>
          <div className={profileStyles.navElement}>
            <NavLink
              to="/"
              className={
                profileStyles.navElement + " text text_type_main-medium"
              }
            >
              Выход
            </NavLink>
          </div>

          <p className="text text_type_main-default text_color_inactive mt-20">
            В этом разделе вы можете <br></br> изменить свои персональные данные
          </p>
        </div>

        <div className="ml-30">
          <Input
            type={"text"}
            placeholder={"Имя"}
            //onChange={(e) => setValue(e.target.value)}
            icon={"EditIcon"}
            //value={value}
            name={"name"}
            error={false}
            //ref={inputRef}
            //onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
          <div className="mt-6">
            <Input
              type={"text"}
              placeholder={"E-mail"}
              //onChange={(e) => setValue(e.target.value)}
              icon={"EditIcon"}
              //value={value}
              name={"name"}
              error={false}
              //ref={inputRef}
              //onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Input
              type={"text"}
              placeholder={"Пароль"}
              //onChange={(e) => setValue(e.target.value)}
              icon={"CloseIcon"}
              //value={value}
              name={"name"}
              error={false}
              //ref={inputRef}
              //onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={profileStyles.profileButtons + " mt-6"}>
            <p className="text text_type_main-default text_color_inactive mr-7">
              Отмена
            </p>
            <Button type="primary" size="medium">
              Войти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
