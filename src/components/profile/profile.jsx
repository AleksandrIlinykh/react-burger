import React from "react";
import { useSelector } from "react-redux";
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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import profileStyles from "./profile.module.css";

function Profile() {
  useSelector((store) => ({
    email: store.authData.email,
    name: store.authData.name,
  }));

  let match = useRouteMatch();
  let { topicId } = useParams();
  return (
    <div className={profileStyles.header + " mt-25"}>
      <div className={profileStyles.header__container}>
        <div className={profileStyles.navBar + " pl-5 mr-5"}>
          <div className={profileStyles.navElement}>
            <NavLink
              exact
              to={`${match.url}`}
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
              exact
              to={`${match.url}/orders`}
              //to="/profile/orders"
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

        <Switch>
          <Route exact path="/profile/orders">
            <div></div>
          </Route>
          <Route path={match.path}>
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
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
export default Profile;
