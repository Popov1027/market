import http from '../http';

export interface AddProduct {
  title: string;
  id: number;
  name: string;
}

export const addProduct = async (product: { title: string }): Promise<AddProduct | undefined> => {
  try {
    const response = await http.post('products/add', product);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
