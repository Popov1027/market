import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import ProductsPage from '../components/ProductsPage/ProductsPage';
import AllUser from '../components/User/User';
import { ProductSinglePage } from '../components/ProductSinglePage/ProductSinglePage';
import { PrivateRoute } from './PrivateRoute';
import LoginUtils from '../components/Login/LoginUtils';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import { UserSinglePage } from '../components/UserSinglePage/UserSinglePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <LoginUtils /> },
      { path: 'user', element: <AllUser /> },
      { path: ':productId', element: <ProductSinglePage /> },
      { path: 'shopping-cart', element: <ShoppingCart /> }
      { path: 'userprofile/:userId', element: <UserSinglePage /> },
      { path: ':productId', element: <ProductSinglePage /> }
    ]
  },
  {
    element: <PrivateRoute />,
    children: [{ path: 'product-page', element: <ProductsPage /> }]
  }
]);
