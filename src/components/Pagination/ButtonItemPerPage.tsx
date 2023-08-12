import React from 'react';
import { Button } from 'flowbite-react';
interface ButtonItemPerPage {
  onItemsPerPageChange: (newItemsPerPage: number) => void;
}
export const ButtonItemPerPage: React.FC<ButtonItemPerPage> = ({ onItemsPerPageChange }) => {
  const itemsPerPageOptions = [4, 12, 30];

  return (
    <Button.Group>
      {itemsPerPageOptions.map((option) => (
        <Button color="gray" key={option} onClick={() => onItemsPerPageChange(option)}>
          {option} per page
        </Button>
      ))}
    </Button.Group>
  );
};
