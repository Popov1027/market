import React, { useState } from 'react';
import { ModalBody, ModalComponents, ModalFooter, ModalHeader } from './ModalComponents';
import { deleteProduct, updateProduct } from '../../../service/ProductService/productServise';

// pentru a utiliza codul in alte componente <Modal open={false} onClose={() => {}} />

type propsTypes = {
  open: boolean;
  title: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  btnModal: string;
  btnClick: string;
  productId: string;
};

export const Modal: React.FC<propsTypes> = ({
  title,
  body,
  footer,
  btnModal,
  btnClick,
  productId
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleDelete = async () => {
    const deletedProduct = await deleteProduct(productId);
    if (deletedProduct) {
      console.log('Product deleted successfully');
    } else {
      console.error('Error deleting product');
    }
    setOpen(false);
  };

  const handleUpdate = async (updatedData: any) => {
    const updatedProduct = await updateProduct(productId, updatedData);
    if (updatedProduct) {
      console.log('Product updated successfully');
    } else {
      console.error('Error updating product');
    }
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        {btnClick}
      </button>
      <ModalComponents open={open} onClose={() => setOpen(false)}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          {footer}
          {btnClick === 'DELETE' ? (
            <button
              onClick={handleDelete}
              className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-red-500 hover:bg-red-600 text-white">
              {btnModal}
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white">
              {btnModal}
            </button>
          )}
        </ModalFooter>
      </ModalComponents>
    </>
  );
};
