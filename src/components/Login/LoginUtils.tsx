import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/AuthService/authService';
import Login from './Login';
import { LoginProps } from '../ProductsPage/interface-response';

const LoginUtils: React.FC<LoginProps> = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    login({ username, password }).then(({ token, id }) => {
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id.toString());
      navigate('/');
    });
  };

  return (
    <Login
      {...props}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      submitHandler={submitHandler}
    />
  );
};

export default LoginUtils;
