import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';

// import ProductsPage from './components/ProductsPage/ProductsPage';

function App() {
  return (
    <Router>
      <Routes>
        {' '}
        <Route path="/" element={<Login />} /> <Route path="/home" element={<ProductsPage />} />{' '}
      </Routes>{' '}
    </Router>
  );
}

export default App;
