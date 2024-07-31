'use client';

import React, { useState } from 'react';

import { Search } from 'lucide-react';

type SimpleSearchBarProps = {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
};

export default function SimpleSearchBar({
  onSearch = () => {},
  placeholder = 'Search...',
}: SimpleSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
          size={18}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 w-64 border border-accent rounded-full focus:outline-none"
        />
      </div>
    </form>
  );
}
