
import React from 'react';
import { DirectoryEntry } from '../types.ts';
import ResultItem from './ResultItem.tsx';

interface ResultsListProps {
  results: DirectoryEntry[];
  isLoading: boolean;
  hasSearched: boolean;
  searchTerm: string;
}

const ResultsList: React.FC<ResultsListProps> = ({ results, isLoading, hasSearched, searchTerm }) => {
  if (isLoading) {
    return <p className="text-center text-slate-400">Searching...</p>;
  }

  if (!hasSearched) {
      return (
        <div className="text-center py-10 px-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-slate-300">Welcome!</h3>
            <p className="text-slate-400 mt-2">Your search results will appear here.</p>
        </div>
      );
  }

  if (results.length === 0 && hasSearched) {
    return (
        <div className="text-center py-10 px-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-slate-300">No Results Found</h3>
            <p className="text-slate-400 mt-2">
                We couldn't find any matches for <span className="font-medium text-sky-400">"{searchTerm}"</span>.
            </p>
        </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((entry, index) => (
        <ResultItem key={`${entry.extension}-${index}`} entry={entry} />
      ))}
    </div>
  );
};

export default ResultsList;