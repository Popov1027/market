import http from '../http';
import { Product } from '../../components/ProductsPage/interface-response';
export const getProducts = async (): Promise<Product[]> => {
  const response = await http.get('products');
  return response.data.products;
};
