import { useModal } from '../../context/ModalContext';
import { FormEvent, useState } from 'react';
import { addProduct } from '../../service/AddProduct/AddProduct';

export const AddProduct = () => {
  const { closeModal, isOpen } = useModal();
  const [title, setTitle] = useState<string>('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleAddProduct = (event: FormEvent) => {
    event.preventDefault();

    addProduct({ title })
      .then(closeModal)
      .catch(() => isOpen);

    console.log('Product Info:');
  };

  return (
    <>
      <div className=" bg-gray-500 bg-opacity-30 fixed flex justify-center items-center  ">
        <div className="bg-white rounded-3xl w-auto h-auto">
          <div className=" flex justify-end pr-5 pt-2 cursor-pointer border-none">
            <span onClick={() => closeModal()}> close</span>
          </div>

          <div className="m-20 flex flex-col justify-center  ">
            <h1 className="text-gray-900 text-base  pl-2  font-black">Add Product</h1>
            <input
              type={'text'}
              placeholder={'Titilul produsului dvs'}
              className=" mb-4 mt-3   rounded-xl mx-1"
              onChange={handleNameChange}></input>
            <button
              onClick={handleAddProduct}
              className="bg-blue-500 p-3 rounded-xl text-white text-base">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
