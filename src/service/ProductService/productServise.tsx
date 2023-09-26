import http from '../http';
import { Product } from '../../components/ProductsPage/interface-response';
export const getProducts = async (
  limit: number,
  skip: number
): Promise<{ products: Product[]; limit: number; skip: number; total: number }> => {
  const response = await http.get(`products?limit=${limit}&skip=${skip}`);
  return response.data;
};
export const getProductById = async (productId: number): Promise<Product> => {
  const response = await http.get(`/products/${productId}`);
  return response.data;
};

export const updateProduct = async (productId: string, updatedData: any) => {
  const response = await http.put(`/products/${productId}`, updatedData);
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await http.delete(`/products/${productId}`);
  return response.data;
};
