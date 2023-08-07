import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Product } from '../ProductsPage/interface-response';
import ProductCard from '../ProductsPage/ProductCard';

const ProductsComponent = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const categoryContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((response) => setCategories(response.data))
      .catch((error) => console.log('Error', error));
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        try {
          const response = await axios.get(`https://dummyjson.com/products/category/${selectedCategory}`);
          setProducts(response.data.products);
        } catch (error) {
          console.log('Error', error);
        }
      } else {
        try {
          const response = await axios.get('https://dummyjson.com/products');
          setProducts(response.data.products);
        } catch (error) {
          console.log('Error', error);
        }
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2 className="text-left mb-5 text-2xl font-semibold">Product Categories:</h2>
      <div ref={categoryContainerRef} className="flex overflow-x-auto gap-3 justify-start p-1 items-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`w-38 p-2 rounded-full flex justify-between
             ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
          } text-xs font-bold cursor-pointer uppercase transition-all duration-200 shadow-sm whitespace-nowrap`}
          >
                #{category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-10">
          <h2 className="text-center mb-5">Products in {selectedCategory} category:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {!selectedCategory && (
        <div className="mt-10">
          <h2 className="text-center mb-5">All Products:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsComponent;
