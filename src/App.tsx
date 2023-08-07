import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductSinglePage from './components/ProductSinglePage/ProductSinglePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:productId" element={<ProductSinglePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
