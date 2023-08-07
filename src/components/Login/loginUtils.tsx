import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/http';
import { UserCredentials } from '../ProductsPage/interface-response';

const LoginUtils = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState<UserCredentials>({
    username: 'kminchelle',
    password: '0lelplR'
  });
  const navigate = useNavigate();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setUserData({
      username: username,
      password: password
    });
    try {
      const response = await login(userData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (error) {
      console.log('eroare', error);
    }
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    submitHandler
  };
};

export default LoginUtils;
