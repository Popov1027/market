import React, { useState } from 'react';
import { searchProducts } from '../../service/SearchProductsService/searchProductsService';
import { Product } from '../ProductsPage/interface-response';

interface SearchProductProps {
  onSearchResults: (results: Product[]) => void;
}

const SearchProduct: React.FC<SearchProductProps> = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      searchProducts(searchQuery)
        .then(onSearchResults)
        .catch((error) => {
          console.log('Error searching products:', error);
          onSearchResults([]);
        });
    } else {
      onSearchResults([]);
    }
  };

  const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mb-5 text-center">
      <div className="mx-auto max-w-lg relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleSearchKeyPress}
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className=" absolute top-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchProduct;
