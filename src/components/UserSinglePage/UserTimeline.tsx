import React from 'react';
import { User } from '../ProductsPage/interface-response';

export const UserTimeline: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex flex-col gap-8 max-md:gap-2 max-lg:gap-4">
      <div className="w-[50%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[100%]">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-8 max-md:mb-2 max-lg:mb-4">
          <span className="tracking-wide text-xs opacity-25 ml-2">CONTACT INFORMATION</span>
        </div>
        <div className="grid grid-cols-2 ml-2">TIMELINE INFO {user.ip}</div>
      </div>
    </div>
  );
};
