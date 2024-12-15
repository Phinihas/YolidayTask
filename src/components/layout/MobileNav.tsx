import React from 'react';
import { Menu } from 'lucide-react';
import { NAV_TABS } from '../../constants/navigation';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileNav({ activeTab, setActiveTab }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg">
          {NAV_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 ${
                activeTab === tab ? 'bg-gray-100 text-[#E85C3F]' : 'text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}