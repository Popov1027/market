import http from '../http';

export interface addProduct {
  title: string;
}

export const addProduct = async (RestaurantCredentials: addProduct) => {
  try {
    const response = await http.post('https://dummyjson.com/products/add', RestaurantCredentials);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
