import React, { useEffect, useState } from 'react';
import { getProducts } from '../../service/ProductService/productServise';
import { Product } from './interface-response';
import ProductCard from './ProductCard';
import ProductCategories from '../Categories/ProductCategories';
import { useNavigate } from 'react-router-dom';
const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      getProducts().then((data) => {
        setProducts(data);
      });
    }
  }, [navigate]);

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
