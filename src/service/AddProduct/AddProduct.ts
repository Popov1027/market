import http from '../http';

export interface AddProduct {
  title: string;
}

export const addProduct = async (product: AddProduct): Promise<any> => {
  try {
    const response = await http.post('products/add', product);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
