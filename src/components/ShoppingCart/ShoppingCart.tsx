import { shoppingCart } from '../../service/ShoppingCart/shoppingCart';
import React, { useEffect, useState } from 'react';
import imageIcon from '../../assets/images/img-icon-20.jpg.png';
import { ShoppingCartImp } from '../ProductsPage/interface-response';
export const ShoppingCart: React.FC = () => {
  const [cartData, setCartData] = useState<ShoppingCartImp[]>([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const products = await shoppingCart();
        setCartData(products);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div className="h-full top-0 overflow-y-auto overflow-x-hidden " id="chec-div">
      <div
        className="w-full absolute z-10 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
        id="checkout">
        <div className="flex md:flex-row flex-col justify-end" id="cart">
          <div
            className="  w-full md:pl-10 pl-4 pr-10 md:pr-10 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
            id="scroll">
            <p className="text-4xl text-center text-blue-950 font-bold pt-3">Shopping Cart</p>

            {cartData.map((product) => (
              <div
                key={product.id}
                className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                <div className="w-1/4">
                  <img
                    src={imageIcon}
                    alt=""
                    className="w-full h-full object-center object-cover rounded-[18px]"
                  />
                </div>
                <div className="md:pl-3 md:w-[70%]">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4"></p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-lg ml-[50px] text-blue-950 font-bold leading-none ">
                      {product.title}
                    </p>
                    <div className="flex items-center">
                      <button
                        id="minusBtn"
                        className="py-2 px-1 border border-gray-200 bg-blue-950 text-white mr-2 focus:outline-none w-[40px]">
                        -
                      </button>
                      <span id="counter" className="py-2 px-1">
                        1
                      </span>
                      <button
                        id="plusBtn"
                        className="py-2 px-1 border bg-blue-950 text-white border-gray-200 ml-2 focus:outline-none w-[40px]">
                        +
                      </button>
                      <div className="ml-[50px]">
                        <p className="text-base font-black leading-none text-gray-800">
                          {product.price} €
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg ml-[50px] leading-3 text-blue-950 font-bold pt-2">
                    Quantity: {product.quantity}
                  </p>
                  <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                      <p className="text-lg ml-[50px] leading-3 text-blue-950 font-bold cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="text-lg  leading-3 text-red-500 pl-5 cursor-pointer">Remove</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
