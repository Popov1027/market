import { AddProduct } from './AddProduct';

export const ModalAddProduct = () => {
  return (
    <>
      <div className="z-50 bg-gray-500 bg-opacity-50 fixed flex justify-center items-center w-screen h-screen ">
        <AddProduct />
      </div>
    </>
  );
};
