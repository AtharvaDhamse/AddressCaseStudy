import React, { useState } from 'react';

const SearchFilter = ({ profiles, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onFilter(filteredProfiles);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilter;
