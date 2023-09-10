import http from '../http';
import { User } from '../../components/ProductsPage/interface-response';

export const allUser = async () => {
  const response = await http.get('users');
  return response.data.users;
};

export const getUserByID = async (userId: number): Promise<User> => {
  const response = await http.get(`/users/${userId}`);
  return response.data;
};
