import axios from 'axios';
import { UserCredentials } from '../components/ProductsPage/interface-response';

const http = axios.create({
  baseURL: 'https://dummyjson.com/'
});
export const login = async (userData: UserCredentials) => {
  return await http.post('auth/login', JSON.stringify(userData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
export default {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete
};
