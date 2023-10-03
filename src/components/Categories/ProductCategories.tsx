import React, { useState, useEffect, useRef } from 'react';
import {
  getCategories,
  getProductsByCategory,
  getAllProducts
} from '../../service/CategoryService/categoryService';
import { Product } from '../ProductsPage/interface-response';
import ProductCard from '../ProductsPage/ProductCard';
import SearchProduct from '../SearchProduct/SearchProduct';

const ProductCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const categoryContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getCategories().then(setCategories);
    getAllProducts()
      .then((products) => setAllProducts(products))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const fetchProducts = selectedCategory
      ? getProductsByCategory(selectedCategory)
      : Promise.resolve(allProducts);

    fetchProducts
      .then((products) => setFilteredProducts(products))
      .catch((error) => {
        console.error('Error', error);
        setFilteredProducts([]);
      });
  }, [selectedCategory, allProducts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchResults([]);
  };

  const handleSearchResults = (results: Product[]) => {
    setSearchResults(results);
    console.log('Search results:', results);
  };

  const productsToDisplay = searchResults.length > 0 ? searchResults : filteredProducts;

  return (
    <div>
      <SearchProduct onSearchResults={handleSearchResults} />
      <div>
        <h2 className="text-left mb-5 text-2xl font-semibold">Product Categories:</h2>
        <div
          ref={categoryContainerRef}
          className="flex overflow-x-auto gap-3 justify-start p-1 items-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`w-38 p-2 rounded-full flex justify-between ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-black'
              }
              text-xs font-bold cursor-pointer uppercase transition-all duration-200 shadow-sm whitespace-nowrap`}>
              #{category}
            </button>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-center mb-5">
            {selectedCategory ? `Products in ${selectedCategory} category:` : 'All Products:'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsToDisplay.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
