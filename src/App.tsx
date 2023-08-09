import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';
import LoginUtils from './components/Login/LoginUtils';

function App() {
  const handleSetUsername = () => {
    console.log('test');
  };

  const handleSetPassword = () => {
    console.log('test');
  };

  const handleSubmit = () => {
    console.log('test');
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginUtils
              username=""
              password=""
              setUsername={handleSetUsername}
              setPassword={handleSetPassword}
              submitHandler={handleSubmit}
            />
          }
        />
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
