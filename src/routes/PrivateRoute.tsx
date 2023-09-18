import { NavBar } from '../components/NavBar/NavBar';
import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import { ModalAddProduct } from '../components/AddProduct/ModalAddProduct';
import { useModal } from '../context/ModalContext';

export const PrivateRoute = () => {
  const auth = localStorage.getItem('token');
  const { isOpen } = useModal();
  if (auth)
    return (
      <>
        {isOpen ? <ModalAddProduct /> : null}
        <NavBar />
        <Outlet />
      </>
    );
  return <Navigate to={''} />;
};
