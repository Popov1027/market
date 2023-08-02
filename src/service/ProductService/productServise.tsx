import http from '../http';
import { Product } from '../../components/ProductsPage/interface-response';

export const getProducts = async () => {
  const response = await http.get('https://dummyjson.com/products');
  return response.data.products;
};
