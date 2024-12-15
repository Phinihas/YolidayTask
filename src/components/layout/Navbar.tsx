import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { NAV_TABS } from '../../constants/navigation';
import MobileNav from './MobileNav';
import FilterButton from '../filters/FilterButton';
import SearchBar from '../SearchBar';

interface NavbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export default function Navbar({ searchValue, onSearchChange }: NavbarProps) {
  const [activeTab, setActiveTab] = useState(NAV_TABS[0]);

  const handleFilterSelect = (filter: string) => {
    console.log('Selected filter:', filter);
    // Implement filter logic here
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <h1 className="text-xl font-bold">Portfolio</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium">Lorem Ips</p>
              <p className="text-xs text-gray-500">Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <nav className="hidden md:flex space-x-6 mb-4 md:mb-0">
          {NAV_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 ${
                activeTab === tab
                  ? 'border-[#E85C3F] text-[#E85C3F]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4 py-4">
          <div className="flex-1 md:w-64">
            <SearchBar value={searchValue} onChange={onSearchChange} />
          </div>
          <FilterButton onFilterSelect={handleFilterSelect} />
        </div>
      </div>
    </div>
  );
}