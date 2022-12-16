import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...props }) => {

  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)

  return (
    <>
      {isLoggedIn ? <Outlet /> : <Navigate to='/' />}
    </>
  )
}

export default ProtectedRoute;