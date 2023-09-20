import React, { useEffect, useState } from 'react';
import { getProducts } from '../../service/ProductService/productServise';
import { Product } from './interface-response';
import ProductCard from './ProductCard';
import { PaginationWithIcons } from '../Pagination/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { DropdownItems } from '../Pagination/ButtonItemPerPage';
import ProductCategories from '../Categories/ProductCategories';
import { AddProduct } from '../AddProduct/AddProduct';
import { ModalAddProduct } from '../AddProduct/ModalAddProduct';
import { useModal } from '../../context/ModalContext';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(100);
  const [pageCount, setPageCount] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const { isOpen } = useModal();
  const onPageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
    queryparams.set('Page', selectedPage.toString());
    navigate({
      pathname: location.pathname,
      search: queryparams.toString()
    });
  };
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    queryparams.set('ItemsPerPage', newItemsPerPage.toString());
    navigate({
      pathname: location.pathname,
      search: queryparams.toString()
    });
  };
  useEffect(() => {
    const pageFromQuery = queryparams.get('Page');
    const itemsPerPageFromQuery = queryparams.get('ItemsPerPage');
    const limit = itemsPerPageFromQuery ? parseInt(itemsPerPageFromQuery) : itemsPerPage;
    const skip = pageFromQuery ? (parseInt(pageFromQuery) - 1) * limit : 0;
    const pageCount = Math.ceil(total / limit);
    setPageCount(pageCount);
    getProducts(limit, skip).then((data) => {
      setProducts(data.products);
      setTotal(data.total);
    });

    if (pageFromQuery) {
      setCurrentPage(parseInt(pageFromQuery, 10));
    }
    if (itemsPerPageFromQuery) {
      setItemsPerPage(parseInt(itemsPerPageFromQuery, 10));
    }
  }, [location.search]);
  return (
    <>
      {isOpen ? <ModalAddProduct /> : null}
      <div className="container mx-auto py-8">
        <div className="flex justify-end mb-10">
          <DropdownItems onItemsPerPageChange={handleItemsPerPageChange} />
        </div>
        <ProductCategories />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
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
    </>
  );
};

export default ProductsPage;
