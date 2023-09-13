import http from '../http';

export const searchProducts = (query: string) => {
    return http.get(`products/search?q=${query}`).then((response) => response.data.products);
};
