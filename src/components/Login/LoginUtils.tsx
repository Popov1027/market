import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/AuthService/authService';
import Login from './Login';

const LoginUtils: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    login({ username, password }).then(({ token, id }) => {
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id.toString());
      navigate('/product-page');
    });
  };

  return (
    <Login
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      submitHandler={submitHandler}
    />
  );
};

export default LoginUtils;
