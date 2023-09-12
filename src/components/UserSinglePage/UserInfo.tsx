import React from 'react';
import { User } from '../ProductsPage/interface-response';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex flex-col gap-8 max-md:gap-2 max-lg:gap-4">
      <div className="w-[50%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[100%]">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-8 max-md:mb-2 max-lg:mb-4">
          <span className="tracking-wide text-xs opacity-25 ml-2">CONTACT INFORMATION</span>
        </div>
        <div className="grid grid-cols-2 ml-2">
          <div className="flex flex-col gap-4 max-md:gap-1">
            <span className="text-[16px] max-lg:text-[14px]">Phone:</span>
            <span className="text-[16px] max-lg:text-[14px]">Adress:</span>
            <span className="text-[16px] max-lg:text-[14px]">E-mail:</span>
            <span className="text-[16px] max-lg:text-[14px]">Site:</span>
          </div>
          <div className="flex flex-col gap-4 max-md:gap-1">
            <span className="text-blue-400 text-[16px] max-lg:text-[14px]">{user.phone}</span>
            <span className="text-[16px] max-lg:text-[14px]">{user.address.address}</span>
            <span className="text-blue-400 text-[16px] max-lg:text-[14px]">{user.email}</span>
            <span className="text-blue-400 text-[16px] max-lg:text-[14px]">{user.domain}</span>
          </div>
        </div>
      </div>
      <div className="w-[50%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[100%]">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-8 max-md:mb-2 max-lg:mb-4">
          <span className="tracking-wide text-xs opacity-25 ml-2">BASIC INFORMATION</span>
        </div>
        <div className="grid grid-cols-2 ml-2">
          <div className="flex flex-col gap-4 max-md:gap-1">
            <span className="text-[16px] max-lg:text-[14px]">Birthday:</span>
            <span className="text-[16px] max-lg:text-[14px]">Gender:</span>
          </div>
          <div className="flex flex-col gap-4 max-md:gap-1">
            <span className="text-[16px] max-lg:text-[14px]">{user.birthDate}</span>
            <span className="text-[16px] max-lg:text-[14px]">{user.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
