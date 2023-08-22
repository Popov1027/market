import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';
import LoginUtils from './components/Login/LoginUtils';
import { ProductSinglePage } from './components/ProductSinglePage/ProductSinglePage';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  const navBarDislay = location.pathname !== '/login';
  return (
    <Router>
      {navBarDislay && <NavBar />}
      <Routes>
        <Route path="/login" element={<LoginUtils />} />
        <Route path="/" element={<ProductsPage />} />
        <Route path="/:productId" element={<ProductSinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
