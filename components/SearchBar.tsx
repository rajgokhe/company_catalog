
import React from 'react';
import { SearchIcon } from './icons/SearchIcon.tsx';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="search"
        placeholder="Search by name, designation, department..."
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-full text-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow duration-200"
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBar;