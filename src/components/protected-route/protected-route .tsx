import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";

type TProtectedRoute = {
  path: string;
  children: React.ReactNode;
  redirectTo: string;
  forAuth: boolean;
  addPermissionCondition?: boolean;
};
export function ProtectedRoute({
  path,
  children,
  redirectTo,
  forAuth,
  addPermissionCondition = true,
}: TProtectedRoute) {
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
