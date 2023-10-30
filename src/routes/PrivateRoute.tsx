import { NavBar } from '../components/NavBar/NavBar';
import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

export const PrivateRoute = () => {
  const auth = localStorage.getItem('token');
  if (auth)
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  return <Navigate to={''} />;
};
