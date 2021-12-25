import { Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children, forAuth }) {
  const { isAuth } = useSelector((store) => ({
    isAuth: store.authData.isAuth,
  }));

  const permissionFlag = forAuth ? !isAuth : isAuth;
  return (
    <Route
      render={() =>
        permissionFlag ? (
          children
        ) : (
          // Если пользователя нет в хранилище, происходит переадресация на роут /login
          <Redirect to="/login" />
        )
      }
    />
  );
}
