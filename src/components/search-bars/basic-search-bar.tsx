'use client';

import React, { useState } from 'react';

type BasicSearchBarProps = {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
};

export default function BasicSearchBar({
  onSearch = () => {},
  placeholder = 'Search...',
}: BasicSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="px-4 py-2 border border-accent rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none "
      >
        Search
      </button>
    </form>
  );
}
