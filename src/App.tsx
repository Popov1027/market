import React from 'react';
import './App.css';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductCategories from "./components/Categories/ProductCategories";

function App() {
  return (
    <div>
        <ProductCategories />
      <ProductsPage />
    </div>
  );
}

export default App;
