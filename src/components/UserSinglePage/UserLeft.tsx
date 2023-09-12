import React from 'react';
import { User } from '../ProductsPage/interface-response';

export const UserLeft: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="w-full md:w-3/12 md:mx-2">
      <div className="p-3">
        <div className="image overflow-hidden">
          <img className="h-auto w-full mx-auto max-xl:w-[30vw]" src={user.image} alt="" />
        </div>
        <div className="flex items-center my-10 max-md:my-4">
          <p className="text-xs opacity-25">WORK</p>
          <div className="flex-grow h-0 border-t-[1px] border-black ml-4 opacity-25"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2 max-xl:flex-col-reverse max-md:flex-row">
            <h1 className="text-gray-900 font-medium text-lg leading-8 my-1 max-lg:text-base">
              {user.company.name}
            </h1>
            <div className="text-blue-500 bg-blue-100 font-medium rounded text-sm px-7 py-2 mr-8 max-xl:mr-0">
              Primary
            </div>
          </div>
          <div>
            <p className="text-base opacity-25 max-lg:text-sm">
              {user.company.address.address} Street
            </p>
            <p className="text-base opacity-25 max-lg:text-sm">
              {user.company.address.city}, {user.company.address.state}{' '}
              {user.company.address.postalCode}
            </p>
            <p className="text-base opacity-25 max-lg:text-sm">
              Coordinates: {user.company.address.coordinates.lat}{' '}
              {user.company.address.coordinates.lng}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center my-10 max-lg:my-4">
            <p className="text-xs opacity-25">SKILLS</p>
            <div className="flex-grow h-0 border-t-[1px] border-black ml-4 opacity-25"></div>
          </div>
          <div className="flex flex-col">
            <p className="text-base opacity-25 max-lg:text-sm">
              Departament {user.company.department}
            </p>
            <p className="text-base opacity-25 max-lg:text-sm">{user.company.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
