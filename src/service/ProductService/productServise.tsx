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

export const updateProduct = async (productId: string, updatedData: Product) => {
  try {
    const response = await http.put(`/products/${productId}`, updatedData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await http.delete(`/products/${productId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
