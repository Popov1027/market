import http from '../http';
import { User } from '../../components/ProductsPage/interface-response';

export const allUser = async (query?: string): Promise<User[]> => {
  if (query) {
    const response = await http.get(`users/search?q=${query}`);
    const users = response.data.users;
    const filteredUsers = users.filter(
      (user: any) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase())
    );
    return filteredUsers;
  } else {
    const response = await http.get('users');
    return response.data.users;
  }
};

export const getUserByID = async (userId: number): Promise<User> => {
  const response = await http.get(`/users/${userId}`);
  return response.data;
};
