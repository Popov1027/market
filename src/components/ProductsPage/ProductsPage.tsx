import React, { useEffect, useState } from 'react';
import { getProducts } from '../../service/ProductService/productServise';
import { Product } from './interface-response';
import ProductCard from './ProductCard';
import ProductCategories from '../Categories/ProductCategories';
const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <ProductCategories />
    </div>
  );
};

export default ProductsPage;
