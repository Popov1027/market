import React, { ReactNode, MouseEvent } from 'react';

interface UserButtonsProps {
  children: ReactNode;
  customClassName?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export const UserButtons: React.FC<UserButtonsProps> = ({ children, customClassName, onClick }) => {
  return (
    <button
      type="button"
      className={`opacity-50 flex items-center hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 ${customClassName}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export const UserSelectButtons: React.FC<UserButtonsProps> = ({
  children,
  customClassName,
  onClick
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent hover:border-b-2 hover:border-blue-500 ${customClassName}`}
      onClick={onClick}>
      {children}
    </button>
  );
};
