import React, { useEffect, useState } from 'react';
import { allUser } from '../../service/UserService/userService';
import { User } from '../ProductsPage/interface-response';
import { useNavigate } from 'react-router-dom';

const AllUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    allUser().then((data) => {
      setUsers(data);
    });
  }, []);
  const userClick = (userId: number) => {
    navigate(`/userprofile/${userId}`);
  };

  return (
    <div className='flex-col"'>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className="text-center text-3xl text-gray-950">All Users</h1>
            <table className="min-w-full text-left text-sm font-light mt-[20px]">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Last Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    MaidenName
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 cursor-pointer"
                    onClick={() => userClick(user.id)}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{user.firstName}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{user.lastName}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{user.maidenName}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{user.age}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{user.gender}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{user.email}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllUser;
