
import React from 'react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const t = TRANSLATIONS[language];
  return (
    <header className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 shadow-md flex justify-between items-center flex-shrink-0">
      <h1 className="text-xl font-bold">{t.title}</h1>
      <div className="relative">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="bg-white/20 text-white rounded-md py-1 px-2 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
        >
          <option value="en" className="text-black">{t.english}</option>
          <option value="hi" className="text-black">{t.hindi}</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
