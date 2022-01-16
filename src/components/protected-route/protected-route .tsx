import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({
  children,
  redirectTo,
  forAuth,
  addPermissionCondition = "true",
}) {
  const { isAuth } = useSelector((store) => ({
    isAuth: store.authData.isAuth,
  }));

  const location = useLocation();
  const permissionFlag = (forAuth ? !isAuth : isAuth) && addPermissionCondition;
  return (
    <Route
      render={() =>
        permissionFlag ? (
          children
        ) : (
          // Если пользователя нет в хранилище, происходит переадресация на роут /login
          <Redirect
            to={{
              // Маршрут, на который произойдёт переадресация
              pathname: redirectTo,
              // В from сохраним текущий маршрут
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
