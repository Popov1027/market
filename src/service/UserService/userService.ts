import http from '../http';

export const allUser = async () => {
  const response = await http.get('users');
  return response.data.users;
};
