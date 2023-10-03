import React from 'react';
interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

interface ModalComponentProps {
  children: React.ReactNode;
}

export const ModalComponents = ({ children, onClose, open }: ModalProps) => {
  return (
    <div
      className={`z-[99] fixed inset-0 flex justify-center items-center transition-color ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
      onClick={onClose}>
      <div
        className={`w-[30%] bg-white rounded-lg shadow p-6 transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <div className="flex flex-col gap-4">
          <button
            className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

interface DismissButtonProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const DismissButton = ({ children, onClose }: DismissButtonProps) => {
  return (
    <div className="flex flex-row justify-center">
      <button
        className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white"
        onClick={onClose}>
        {children}
      </button>
    </div>
  );
};
export const ModalHeader = ({ children }: ModalComponentProps) => {
  return <h1 className="text-2xl">{children}</h1>;
};

export const ModalBody = ({ children }: ModalComponentProps) => {
  return <p>{children}</p>;
};

export const ModalFooter = ({ children }: ModalComponentProps) => {
  return (
    <>
      <hr className="border-t-solid border-1 border-gray" />
      {children}
    </>
  );
};
