import http from '../http';
import { LoginResponseInterface } from '../../components/ProductsPage/interface-response';

export const login = async (credentials: {
  username: string;
  password: string;
}): Promise<LoginResponseInterface> => {
  const response = await http.post<LoginResponseInterface>('auth/login', credentials);
  console.log(response.data);
  return response.data;
};
