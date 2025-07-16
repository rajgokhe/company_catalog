
import React from 'react';
import { DirectoryEntry } from '../types';

interface ResultItemProps {
  entry: DirectoryEntry;
}

const ResultItem: React.FC<ResultItemProps> = ({ entry }) => {
  return (
    <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 shadow-lg hover:bg-slate-700/50 hover:border-sky-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex justify-between items-center space-x-4">
      <div className="flex-grow">
        <p className="text-xl font-bold text-sky-400">{entry.name}</p>
        <p className="text-md text-slate-300 mt-1">{entry.designation}</p>
        <p className="text-sm text-slate-400 mt-2 uppercase tracking-wider">{entry.department}</p>
      </div>
      <div className="flex-shrink-0 text-right pl-4 border-l border-slate-600">
        <p className="text-3xl font-mono font-bold text-slate-100">{entry.extension}</p>
        <p className="text-xs text-slate-400 uppercase tracking-widest">Extension</p>
      </div>
    </div>
  );
};

export default ResultItem;
