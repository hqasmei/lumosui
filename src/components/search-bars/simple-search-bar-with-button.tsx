'use client';

import React, { useState } from 'react';

import { Search } from 'lucide-react';

type SearchBarWithButtonProps = {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
};

export default function SearchBarWithButton({
  onSearch = () => {},
  placeholder = 'Search...',
}: SearchBarWithButtonProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center max-w-md w-full">
      <div className="relative flex-grow">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-l-md border border-accent focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2.5 bg-accent border border-accent border-l-0 rounded-r-md focus:outline-none hover:bg-accent/80"
      >
        <Search size={20} className="text-gray-500" />
      </button>
    </form>
  );
}
