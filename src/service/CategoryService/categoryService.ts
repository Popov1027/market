import http from '../http';

export const getCategories = () => {
  return http.get('products/categories').then((response) => response.data);
};

export const getProductsByCategory = (category: string) => {
  return http.get(`products/category/${category}`).then((response) => response.data.products);
};

export const getAllProducts = () => {
  return http.get('products').then((response) => response.data.products);
};
