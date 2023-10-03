import http from '../http';

export interface AddProduct {
  title: string;
  id: number;
  name: string;
}

export const addProduct = async (product: { title: string }): Promise<AddProduct | undefined> => {
  return http
    .post('products/add', product)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
