import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavLink, useHistory } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Switch, Route, useRouteMatch } from "react-router-dom";

import {
  logout,
  updateUserInfo,
} from "../../services/actions/auth/authActions";

import profileStyles from "./profile.module.css";

function Profile() {
  const { storeUserEmail, storeUserName } = useSelector((store) => ({
    storeUserEmail: store.authData.email,
    storeUserName: store.authData.name,
  }));
  const [userEmail, setUserEmail] = useState(storeUserEmail);
  const [userName, setUserName] = useState(storeUserName);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateUserInfo({
        name: userName,
        email: userEmail,
      })
    );
  };

  const handleCancel = (event) => {
    setUserEmail(storeUserEmail);
    setUserName(storeUserName);
  };

  let match = useRouteMatch();
  return (
    <div className={profileStyles.header + " mt-25"}>
      <div className={profileStyles.header__container}>
        <div className={profileStyles.navBar + " pl-5 mr-5"}>
          <div className={profileStyles.navElement}>
            <NavLink
              exact
              to={`/profile`}
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
              to={`/profile/orders`}
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
              to="/profile"
              className={
                profileStyles.navElement + " text text_type_main-medium"
              }
              onClick={() => dispatch(logout())}
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
            <form onSubmit={handleSubmit}>
              <div className="ml-30">
                <Input
                  type={"text"}
                  placeholder={"Имя"}
                  onChange={(e) => setUserName(e.target.value)}
                  icon={"EditIcon"}
                  value={userName}
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
                    onChange={(e) => setUserEmail(e.target.value)}
                    icon={"EditIcon"}
                    value={userEmail}
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
                {userEmail !== storeUserEmail || userName !== storeUserName ? (
                  <div className={profileStyles.profileButtons + " mt-6"}>
                    <p
                      className="text text_type_main-default text_color_inactive mr-7"
                      onClick={handleCancel}
                    >
                      Отмена
                    </p>
                    <Button type="primary" size="medium">
                      Сохранить
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </form>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Profile;
