'use client';

import React, { useState } from 'react';

type AdvancedSearchBarProps = {
  placeholder: string;
  filters: string[];
  onSearch: (query: string, selectedFilters: string[]) => void;
};

export default function AdvancedSearchBar({
  placeholder,
  filters,
  onSearch,
}: AdvancedSearchBarProps) {
  const [query, setQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  const handleSearch = () => {
    onSearch(query, selectedFilters);
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-4 py-2 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
        >
          Search
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterToggle(filter)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedFilters.includes(filter)
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
