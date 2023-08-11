import http from '../http';
import {
  LoginResponseInterface,
  UserCredentials
} from '../../components/ProductsPage/interface-response';

export const login = async (UserCredentials: UserCredentials): Promise<LoginResponseInterface> => {
  const response = await http.post<LoginResponseInterface>('auth/login', UserCredentials);
  return response.data;
};
