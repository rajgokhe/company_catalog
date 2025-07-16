
import React, { useState, useEffect, useCallback } from 'react';
import { DirectoryEntry } from './types.ts';
import { directoryData } from './data/directoryData.ts';
import SearchBar from './components/SearchBar.tsx';
import ResultsList from './components/ResultsList.tsx';
import { LogoIcon } from './components/icons/LogoIcon.tsx';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<DirectoryEntry[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const lowercasedFilter = searchTerm.toLowerCase();
    const filtered = directoryData.filter(entry =>
      entry.name.toLowerCase().includes(lowercasedFilter) ||
      entry.designation.toLowerCase().includes(lowercasedFilter) ||
      entry.department.toLowerCase().includes(lowercasedFilter)
    );
    
    // Limit results to improve performance and usability
    setFilteredResults(filtered.slice(0, 50));
  }, [searchTerm]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <header className="text-center mb-10">
          <LogoIcon className="h-20 w-20 mx-auto mb-4 text-sky-500" />
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            Corporate Directory Search
          </h1>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-lg">
            Instantly find contact extensions for any colleague. Start typing a name, designation, or department.
          </p>
        </header>
        
        <div className="max-w-3xl mx-auto">
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
          <div className="mt-8">
            <ResultsList 
              results={filteredResults} 
              isLoading={false} // Loading state can be enhanced later if fetching data
              hasSearched={isSearching}
              searchTerm={searchTerm}
            />
          </div>
        </div>

        <footer className="text-center mt-16 text-slate-500 text-sm">
            <p>Built with React, TypeScript, and Tailwind CSS.</p>
            <p>Data sourced from corporate directory, May 2025.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;