import React from 'react';
import { Product } from './interface-response';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-40 object-cover"
          src={product.thumbnail}
          alt={product.title}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 line-clamp-3">{product.description}</p>
        <p className="text-lg font-bold">Preț: {product.price} lei</p>
        <p>Rating: {product.rating}</p>
        <p>Stoc disponibil: {product.stock}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Read more</button>
      </div>
    </div>
  );
};

export default ProductCard;
