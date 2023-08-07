import React, { useEffect, useState } from 'react';
import { getProducts } from '../../service/ProductService/productServise';
import { Product } from './interface-response';
import ProductCard from './ProductCard';
import Pagination from '../Pagination/Pagination';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const onPageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    const fetchProducts = () => {
      getProducts().then((productsData) => {
        setProducts(productsData);
      });
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination pageCount={pageCount} onPageChange={onPageChange} />
    </div>
  );
};

export default ProductsPage;
