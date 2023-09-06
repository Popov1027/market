import { Pagination } from 'flowbite-react';
import { useMediaQuery } from 'react-responsive';
import React, { ReactNode } from 'react';

interface PaginationWithIconsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const Default: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 801 });
  return isNotMobile ? <>{children}</> : null;
};
const Mobile: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return isMobile ? <>{children}</> : null;
};
export const PaginationWithIcons: React.FC<PaginationWithIconsProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <>
      <Default>
        <Pagination
          currentPage={currentPage}
          layout="pagination"
          nextLabel="Next"
          onPageChange={onPageChange}
          previousLabel="Previous"
          showIcons
          totalPages={totalPages}
        />
      </Default>
      <Mobile>
        <Pagination
          currentPage={currentPage}
          layout="pagination"
          nextLabel=""
          onPageChange={onPageChange}
          previousLabel=""
          showIcons
          totalPages={totalPages}
        />
      </Mobile>
    </>
  );
};
