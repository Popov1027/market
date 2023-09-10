import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByID } from '../../service/UserService/userService';
import { User } from '../ProductsPage/interface-response';
import point from '../../assets/userprofile/point.svg';
import bookmark from '../../assets/userprofile/bookmark.svg';
import stars from '../../assets/userprofile/stars.svg';
import starsfull from '../../assets/userprofile/starsfull.svg';
import check from '../../assets/userprofile/check.svg';
import message from '../../assets/userprofile/message.svg';
import userLogo from '../../assets/userprofile/userLogo.svg';
import eye from '../../assets/userprofile/eye.svg';

export const UserSinglePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUsers] = useState<User | null>(null);

  useEffect(() => {
    if (userId) {
      getUserByID(parseInt(userId)).then((usersData) => {
        setUsers(usersData);
      });
    }
  }, [userId]);
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen bg-blue-400 bg-clip-border">
      <div className="container mx-auto p-5 max-md:p-0">
        <div className="bg-white rounded p-10 md:flex no-wrap md:-mx-2 max-md:p-2 max-xl:overflow-scroll">
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
          <div className="w-full md:w-9/12 mx-2 h-64 max-md:mx-0">
            <div className="p-3 max-lg:p-1 max-md:p-0">
              <div className="relative flex items-center ml-1 space-x-2 font-semibold text-gray-900 leading-8 max-md:justify-between">
                <span className="tracking-wide mr-2">
                  {user.firstName} {user.lastName}
                </span>
                <div className="flex items-center text-[10px] opacity-50">
                  <img src={point} alt="point" className="w-5 h-5" />
                  <span className="ml-2 max-md:ml-0">
                    {user.address.city}, {user.address.state}
                  </span>
                </div>
                <button
                  type="button"
                  className="max-md:hidden opacity-50 absolute top-0 right-0 flex items-center hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                  <img src={bookmark} className="w-5 h-5" alt="bookamrk" />
                  <span className="ml-2">Bookmark</span>
                </button>
              </div>
              <div className="relative flex items-center ml-1 space-x-2 font-semibold text-[13px] text-blue-500 leading-1">
                <span className="tracking-wide">{user.company.title}</span>
              </div>
              <div className="flex flex-col gap-4 mt-6 max-md:mt-2 max-md:gap-2">
                <div className="relative flex flex-col space-x-2 font-semibold text-gray-900 leading-8 max-md:flex-row max-md:items-center max-md:justify-between">
                  <p className="text-xs opacity-25 ml-2">RANKINGS</p>
                  <div className="flex items-center">
                    <span className="tracking-wide mr-2 text-[24px]">8,6</span>
                    <img src={starsfull} className="w-6 h-6" alt="STAR" />
                    <img src={starsfull} className="w-6 h-6" alt="STAR" />
                    <img src={starsfull} className="w-6 h-6" alt="STAR" />
                    <img src={starsfull} className="w-6 h-6" alt="STAR" />
                    <img src={stars} className="w-6 h-6" alt="STAR" />
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="opacity-50 flex items-center hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2">
                    <img src={message} className="w-5 h-5" alt="bookamrk" />
                    <span className="ml-2">Send Message</span>
                  </button>
                  <button
                    type="button"
                    className="opacity-50 flex items-center hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2">
                    <img src={check} className="w-5 h-5" alt="bookamrk" />
                    <span className="ml-2">Contacts</span>
                  </button>
                  <button
                    type="button"
                    className="opacity-50 flex items-center hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2">
                    <span className="ml-2">Report User</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-3 max-lg:p-1">
              <div
                className="inline-flex border-b border-stone-950/25 w-full opacity-50 mb-10 max-md:mb-4"
                role="group">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent hover:border-b-2 hover:border-blue-500">
                  <img src={eye} className="w-3 h-3 text-gray-800 " alt="eye" />
                  <span className="ml-2">Timeline</span>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent hover:border-b-2 hover:border-blue-500">
                  <img src={userLogo} className="w-3 h-3 text-gray-800 " alt="userLogo" />
                  <span className="ml-2">About</span>
                </button>
              </div>

              <div className="flex flex-col gap-8 max-md:gap-2 max-lg:gap-4">
                <div className="w-[50%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[100%]">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-8 max-md:mb-2 max-lg:mb-4">
                    <span className="tracking-wide text-xs opacity-25 ml-2">
                      CONTACT INFORMATION
                    </span>
                  </div>
                  <div className="grid grid-cols-2 ml-2">
                    <div className="flex flex-col gap-4 max-md:gap-1">
                      <span className="text-[16px] max-lg:text-[14px]">Phone:</span>
                      <span className="text-[16px] max-lg:text-[14px]">Adress:</span>
                      <span className="text-[16px] max-lg:text-[14px]">E-mail:</span>
                      <span className="text-[16px] max-lg:text-[14px]">Site:</span>
                    </div>
                    <div className="flex flex-col gap-4 max-md:gap-1">
                      <span className="text-blue-400 text-[16px] max-lg:text-[14px]">
                        {user.phone}
                      </span>
                      <span className="text-[16px] max-lg:text-[14px]">{user.address.address}</span>
                      <span className="text-blue-400 text-[16px] max-lg:text-[14px]">
                        {user.email}
                      </span>
                      <span className="text-blue-400 text-[16px] max-lg:text-[14px]">
                        {user.domain}
                      </span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
