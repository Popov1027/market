import React, { useEffect, useState } from 'react';
import { Product } from '../ProductsPage/interface-response';
import { getProductById } from '../../service/ProductService/productServise';
import { useParams } from 'react-router-dom';
import { Carousel } from 'flowbite-react';

const ProductSinglePage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = () => {
      if (productId) {
        getProductById(parseInt(productId)).then((productData) => {
          setProduct(productData);
        });
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const price = Number(product.price);
  const discount = Number(product.discountPercentage);
  const newPrice = price - (price * discount) / 100;
  const images = product.images;

  return (
    <div className="container mx-auto mt-[100px] border border-gray-200 rounded-lg shadow px-[10px] py-[10px]">
      <div className="grid grid-cols-5 grid-rows-6 gap-4">
        <div className="flex justify-center items-center col-span-2 row-span-6 border border-gray-200 rounded-lg shadow">
          <Carousel className="w-[500px] h-[264px]">
            {images.map((image, index) => (
              <img key={index} src={image} alt="image 1" />
            ))}
          </Carousel>
        </div>
        <div className="flex items-center col-span-3 col-start-3 px-[10px] border-[1px] border-solid border-black rounded-lg">
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Brand: {product.brand}
          </span>
        </div>
        <div className="flex items-center col-span-3 col-start-3 row-start-2 px-[10px] border-[1px] border-solid border-black rounded-lg">
          Title: {product.title}
        </div>
        <div className="flex items-center col-span-3 col-start-3 row-start-3 px-[10px] border-[1px] border-solid border-black rounded-lg">
          <span className="font-normal text-gray-700 line-clamp-3">
            Description: {product.description}
          </span>
        </div>
        <div className="flex items-center col-span-3 col-start-3 row-start-4 px-[10px] border-[1px] border-solid border-black rounded-lg">
          Rating: {product.rating}
        </div>
        <div className="flex items-center col-span-3 col-start-3 row-start-5 px-[10px] border-[1px] border-solid border-black rounded-lg">
          Stock: {product.stock}
        </div>
        <div className="flex items-center col-span-3 col-start-3 row-start-6 px-[10px] border-[1px] border-solid border-black rounded-lg">
          Price: <span className="ml-[10px] line-through text-slate-700">{product.price}</span>
          <span className="ml-[10px] font-bold text-red-600	text-lg">{newPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSinglePage;
