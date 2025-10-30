
import React from 'react';
import type { View, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Icon from './Icon';

interface BottomNavProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  language: Language;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setCurrentView, language }) => {
  const t = TRANSLATIONS[language];
  
  const navItems = [
    { view: 'home' as View, label: t.home, icon: 'home' as const },
    { view: 'report' as View, label: t.report, icon: 'report' as const },
    { view: 'track' as View, label: t.track, icon: 'track' as const },
    { view: 'rewards' as View, label: t.rewards, icon: 'rewards' as const },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-up">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setCurrentView(item.view)}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-sm ${
              currentView === item.view ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <Icon name={item.icon} className={`w-6 h-6 mb-1 ${currentView === item.view ? 'text-green-600' : 'text-gray-500'}`} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
