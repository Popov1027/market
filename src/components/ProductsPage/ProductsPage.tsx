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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
