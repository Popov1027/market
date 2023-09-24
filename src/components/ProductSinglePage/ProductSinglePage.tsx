import React, { useEffect, useState } from 'react';
import { Product } from '../ProductsPage/interface-response';
import { getProductById } from '../../service/ProductService/productServise';
import { useParams } from 'react-router-dom';
import { CarouselProductSingle } from './CarouselProductSingle';
import { Modal } from '../ProductActivity/ReusableModal/Modal';

export const ProductSinglePage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (productId) {
      getProductById(parseInt(productId)).then((productData) => {
        setProduct(productData);
      });
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const price = Number(product.price);
  const discount = Number(product.discountPercentage);
  const newPrice = price - (price * discount) / 100;
  const imagesProduct = product.images;

  return (
    <div className="container mx-auto mt-[100px] border border-gray-200 rounded-lg shadow px-[10px] py-[10px]">
      <div className="grid grid-cols-5 grid-rows-7 gap-4">
        <div className="flex justify-center items-center col-span-2 row-span-6 border border-gray-200 rounded-lg shadow">
          <div className="h-[500px]">
            <CarouselProductSingle imagesProduct={imagesProduct} />
          </div>
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
        <div className="flex justify-end items-center col-span-3 col-start-3 row-start-7 px-[10px]">
          <Modal
            open={false}
            title={'Modal Product UPDATE'}
            body={
              <>
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" placeholder={product.title} />
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" value={product.stock} />
                    <label htmlFor="Price">Price:</label>
                    <input type="number" id="Price" name="Price" value={product.price} />
                    <label htmlFor="description">Description:</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder={product.description}
                    />
                  </div>
                </form>
              </>
            }
            btnClick={'UPDATE'}
            footer={'Are you sure you want to update this item?'}
            btnModal={'Confirm'}
            productId={productId as string}
          />
          <Modal
            open={false}
            title={'Modal Product DELETE'}
            body={''}
            btnClick={'DELETE'}
            footer={`Are you sure you want to delete this item: ${product.title}?`}
            btnModal={'DELETE'}
            productId={productId as string}
          />
        </div>
      </div>
    </div>
  );
};
