import React from 'react';
import { ChevronDown } from 'lucide-react';

const FilterButton = ({ label, isPremium }) => {
  return (
    <button className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-gray-400 transition-colors relative">
      {label}
      <ChevronDown size={16} />
      {isPremium && (
        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
          Premium
        </span>
      )}
    </button>
  );
};

export default FilterButton;