import React, { useEffect, useState } from 'react';
import { getProducts } from '../../service/ProductService/productServise';
import { Product } from './interface-response';
import ProductCard from './ProductCard';
import { PaginationWithIcons } from '../Pagination/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonItemPerPage } from '../Pagination/ButtonItemPerPage';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const navigate = useNavigate();
  const location = useLocation();
  const onPageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('Page', selectedPage.toString());
    navigate({
      pathname: location.pathname,
      search: queryParams.toString()
    });
  };
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('ItemsPerPage', newItemsPerPage.toString());
    navigate({
      pathname: location.pathname,
      search: queryParams.toString()
    });
  };

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const pageFromQuery = queryParams.get('Page');
    const itemsPerPageFromQuery = queryParams.get('ItemsPerPage');
    if (pageFromQuery) {
      setCurrentPage(parseInt(pageFromQuery, 10));
    }
    if (itemsPerPageFromQuery) {
      setItemsPerPage(parseInt(itemsPerPageFromQuery, 10));
    }
  }, [location.search]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-end mb-10">
        <ButtonItemPerPage onItemsPerPageChange={handleItemsPerPageChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <PaginationWithIcons
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={pageCount}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
