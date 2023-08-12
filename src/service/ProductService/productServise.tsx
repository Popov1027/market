import http from '../http';
import { Product } from '../../components/ProductsPage/interface-response';
export const getProducts = async (): Promise<Product[]> => {
  const response = await http.get('products');
  return response.data.products;
};
export const getProductById = async (productId: number): Promise<Product> => {
  const response = await http.get(`https://dummyjson.com/products/${productId}`);
  return response.data;
};
