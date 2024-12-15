import React from 'react';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message = 'No results found' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <SearchX className="w-16 h-16 text-gray-400 mb-4" />
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
}