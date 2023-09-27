import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByID } from '../../service/UserService/userService';
import { User } from '../ProductsPage/interface-response';
import userLogo from '../../assets/userprofile/userLogo.svg';
import eye from '../../assets/userprofile/eye.svg';
import { UserLeft } from './UserLeft';
import { UserInfo } from './UserInfo';
import { UserHeader } from './UserHeader';
import { UserSelectButtons } from './UserButtons';
import { UserTimeline } from './UserTimeline';

export const UserSinglePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUsers] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'About' | 'Timeline'>('About');

  useEffect(() => {
    if (userId) {
      getUserByID(parseInt(userId)).then((usersData) => {
        setUsers(usersData);
      });
    }
  }, [userId]);

  return (
    <div className="h-screen bg-blue-400 bg-clip-border">
      <div className="container mx-auto p-5 max-md:p-0">
        <div className="bg-white rounded p-10 md:flex no-wrap md:-mx-2 max-md:p-2 max-xl:overflow-scroll">
          {user ? (
            <>
              <UserLeft user={user} />
              <div className="w-full md:w-9/12 mx-2 h-64 max-md:mx-0">
                <UserHeader user={user} />

                <div className="p-3 max-lg:p-1">
                  <div
                    className="inline-flex border-b border-stone-950/25 w-full opacity-50 mb-10 max-md:mb-4"
                    role="group">
                    <UserSelectButtons>
                      <img
                        src={eye}
                        className={`w-3 h-3 text-gray-800 ${
                          activeTab === 'Timeline' ? 'text-blue-400' : ''
                        }`}
                        alt="eye"
                        onClick={() => setActiveTab('Timeline')}
                      />
                      <span
                        className={`ml-2 ${activeTab === 'Timeline' ? 'text-blue-400' : ''}`}
                        onClick={() => setActiveTab('Timeline')}>
                        Timeline
                      </span>
                    </UserSelectButtons>
                    <UserSelectButtons>
                      <img
                        src={userLogo}
                        className={`w-3 h-3 text-gray-800 ${
                          activeTab === 'About' ? 'text-blue-400' : ''
                        }`}
                        alt="userLogo"
                        onClick={() => setActiveTab('About')}
                      />
                      <span
                        className={`ml-2 ${activeTab === 'About' ? 'text-blue-400' : ''}`}
                        onClick={() => setActiveTab('About')}>
                        About
                      </span>
                    </UserSelectButtons>
                  </div>
                  {activeTab === 'About' ? (
                    <UserInfo user={user} />
                  ) : activeTab === 'Timeline' ? (
                    <UserTimeline user={user} />
                  ) : null}
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
