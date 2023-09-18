import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import ProductsPage from '../components/ProductsPage/ProductsPage';
import AllUser from '../components/User/User';
import { ProductSinglePage } from '../components/ProductSinglePage/ProductSinglePage';
import { PrivateRoute } from './PrivateRoute';
import LoginUtils from '../components/Login/LoginUtils';
import { UserSinglePage } from '../components/UserSinglePage/UserSinglePage';
import { ModalProvider } from '../context/ModalContext';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <LoginUtils /> },
      { path: 'user', element: <AllUser /> },
      { path: 'userprofile/:userId', element: <UserSinglePage /> },
      { path: ':productId', element: <ProductSinglePage /> }
    ]
  },
  {
    element: (
      <ModalProvider>
        {' '}
        <PrivateRoute />
      </ModalProvider>
    ),
    children: [
      {
        path: 'product-page',
        element: <ProductsPage />
      }
    ]
  }
]);
