import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...props }) => {
const Admin = useSelector((state) => state.authReducer.isAdmin);

  return <>{Admin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoute;
