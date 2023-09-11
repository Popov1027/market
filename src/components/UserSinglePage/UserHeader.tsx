import React from 'react';
import { User } from '../ProductsPage/interface-response';
import point from '../../assets/userprofile/point.svg';
import bookmark from '../../assets/userprofile/bookmark.svg';
import { RatingUser } from './RatingUser';
import message from '../../assets/userprofile/message.svg';
import check from '../../assets/userprofile/check.svg';
import { UserButtons } from './UserButtons';

export const UserHeader: React.FC<{ user: User }> = ({ user }) => {
  const handleReportUserClick = () => {
    alert('ОК');
  };

  return (
    <div className="p-3">
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
        <UserButtons
          customClassName="max-md:hidden absolute top-0 right-0"
          onClick={handleReportUserClick}>
          <img src={bookmark} className="w-5 h-5" alt="bookamrk" />
          <span className="ml-2">Bookmark</span>
        </UserButtons>
      </div>
      <div className="relative flex items-center ml-1 space-x-2 font-semibold text-[13px] text-blue-500 leading-1">
        <span className="tracking-wide">{user.company.title}</span>
      </div>
      <div className="flex flex-col gap-4 mt-6 max-md:mt-2 max-md:gap-2">
        <div className="relative flex flex-col space-x-2 font-semibold text-gray-900 leading-8 max-md:flex-row max-md:items-center max-md:justify-between">
          <p className="text-xs opacity-25 ml-2">RANKINGS</p>
          <div className="flex items-center">
            <RatingUser />
          </div>
        </div>
        <div className="flex items-center">
          <UserButtons onClick={handleReportUserClick}>
            <img src={message} className="w-5 h-5" alt="SendMessage" />
            <span className="ml-2">Send Message</span>
          </UserButtons>
          <UserButtons onClick={handleReportUserClick}>
            <img src={check} className="w-5 h-5" alt="Contacts" />
            <span className="ml-2">Contacts</span>
          </UserButtons>
          <UserButtons onClick={handleReportUserClick}>
            <span className="ml-2">Report User</span>
          </UserButtons>
        </div>
      </div>
    </div>
  );
};
