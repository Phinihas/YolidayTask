import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MENU_ITEMS } from '../../constants/navigation';
import { COLORS } from '../../constants/theme';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && !isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsCollapsed(true)}
        />
      )}
      <div 
        className={`bg-[${COLORS.primary}] text-white h-screen transition-all duration-300 ${
          isCollapsed ? (isMobile ? 'w-0' : 'w-20') : 'w-64'
        } fixed left-0 top-0 z-30`}
      >
        <div className="p-4 flex items-center justify-between">
          <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
            {!isCollapsed && <span className="text-xl font-bold ml-2">LOGO</span>}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-white/10"
          >
            {isCollapsed ? <Menu size={24} /> : <X size={24} />}
          </button>
        </div>

        <nav className="mt-8">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="flex items-center px-4 py-3 hover:bg-white/10"
            >
              <item.icon size={24} />
              {!isCollapsed && <span className="ml-4">{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}