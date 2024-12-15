import { useState, useCallback } from 'react';
import { Project } from '../types/project';

export function useSearch(items: Project[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.subject.toLowerCase().includes(term.toLowerCase()) ||
      item.author.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [items]);

  return { searchTerm, filteredItems, handleSearch };
}