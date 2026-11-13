import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isLogin } = useAuthContext();

  console.log(isLogin);

  if (!isLogin) {
    return <Navigate to={"/auth/login"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
