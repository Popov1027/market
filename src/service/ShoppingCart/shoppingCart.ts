import http from '../http';
export const shoppingCart = async () => {
  try {
    const response = await http.get('carts/user/5');
    return response.data.carts[0].products;
  } catch (error) {
    console.error('Error fetching cart products:', error);
    throw error;
  }
};
