import React, { useState } from 'react';

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Mango'];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;