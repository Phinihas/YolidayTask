import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import ProjectCard from './components/ProjectCard';
import EmptyState from './components/EmptyState';
import { useSearch } from './hooks/useSearch';
import { projects } from './data/projects';

function App() {
  const { searchTerm, filteredItems, handleSearch } = useSearch(projects);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="ml-0 md:ml-64 transition-all duration-300">
          <Navbar searchValue={searchTerm} onSearchChange={handleSearch} />
          <main className="p-6">
            <div className="max-w-7xl mx-auto">
              {filteredItems.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;