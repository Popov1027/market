
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';
import LoginUtils from './components/Login/LoginUtils';
import { ProductSinglePage } from './components/ProductSinglePage/ProductSinglePage';
import { useEffect } from 'react';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  const navBarDislay = location.pathname !== '/login';
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Routes>
      {navBarDislay && <NavBar />}
      <Route path={'/login'} element={<LoginUtils />} />
      <Route path={'/'} element={<ProductsPage />} />
      <Route path={'/:productId'} element={<ProductSinglePage />} />
    </Routes>
  );
}

export default App;
