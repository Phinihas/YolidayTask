import React from 'react';
import { Filter } from 'lucide-react';
import { FILTERS } from '../../constants/filters';

interface FilterButtonProps {
  onFilterSelect: (filter: string) => void;
}

export default function FilterButton({ onFilterSelect }: FilterButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
      >
        <Filter className="w-5 h-5" />
        <span>Filter</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                onFilterSelect(filter);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}