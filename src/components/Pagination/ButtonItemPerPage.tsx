import React from 'react';
import { Dropdown } from 'flowbite-react';
import { onItemsPerPage } from '../ProductsPage/interface-response';
export const DropdownItems: React.FC<onItemsPerPage> = ({ onItemsPerPageChange }) => {
  const itemsPerPageOptions = [10, 30, 50];
  return (
    <Dropdown inline label="Select Item per Page">
      {itemsPerPageOptions.map((option) => (
        <Dropdown.Item key={option} onClick={() => onItemsPerPageChange(option)}>
          {option} per page
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
