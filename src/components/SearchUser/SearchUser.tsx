import React, { useState, useEffect, ChangeEvent } from 'react';
import { searchUsers } from '../../service/SearchUserService/searchUserService';
import { User } from '../ProductsPage/interface-response';

interface SearchUserProps {
  setSearchResults: React.Dispatch<React.SetStateAction<User[]>>;
}

const SearchUser: React.FC<SearchUserProps> = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (query.trim() === '') {
      return;
    }

    searchUsers(query)
      .then((response) => {
        if (response && response.length > 0) {
          console.log('Searched user', response[0]);
          setError(null);
          setSearchResults(response);
        } else {
          setSearchResults([]);
          setUser(null);
          setError('No users found');
        }
        setSearched(true);
      })
      .catch((error) => {
        console.error('Error searching for users:', error);
      });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searched) {
      handleSearch();
    }
  }, [query, searched]);

  return (
    <div className="mb-5 text-center">
      <div className="mx-auto max-w-lg relative">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full h-10 px-4 py-2 border border-black focus:ring-transparent focus:border-black rounded-md"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="h-10 absolute top-0 ml-[-10px] px-4 py-2 bg-black text-white rounded-md"
          onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && searched && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default SearchUser;
