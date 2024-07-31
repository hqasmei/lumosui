'use client';

import React, { useState } from 'react';

import { Search, X } from 'lucide-react';

type ResponsiveSearchBarProps = {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
};

export default function ResponsiveSearchBar({
  onSearch = () => {},
  placeholder = 'Search',
}: ResponsiveSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [active, setActive] = useState(false);

  const handleSearchClick = () => {
    setActive(!active);
  };

  const handleCancelClick = () => {
    setSearchTerm('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="grid place-items-center">
      <div
        className={`relative ${active ? 'w-56' : 'w-9'} h-9 rounded-full shadow border border-accent transition-all duration-500`}
      >
        <input
          type="text"
          autoFocus={true}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className={`absolute inset-0 w-full h-full rounded-full outline-none px-9 ${
            active ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        />
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-full cursor-pointer transition-all duration-500 ${
            active
              ? 'transform translate-x-0'
              : 'absolute right-0 top-0 bottom-0'
          }`}
          onClick={handleSearchClick}
        >
          <Search size={18} className="mb-0.5 ml-0.5" />
        </div>
        {active && searchTerm !== '' && (
          <div
            className="absolute right-2 top-0 bottom-0 flex items-center cursor-pointer transition-all duration-500"
            onClick={handleCancelClick}
          >
            <X size={22} className="stroke-muted-foreground" />
          </div>
        )}
      </div>
    </form>
  );
}
