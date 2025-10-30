
import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeScreen from './components/HomeScreen';
import ReportScreen from './components/ReportScreen';
import TrackScreen from './components/TrackScreen';
import RewardsScreen from './components/RewardsScreen';
import type { View, Language } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [language, setLanguage] = useState<Language>('en');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeScreen language={language} />;
      case 'report':
        return <ReportScreen language={language} />;
      case 'track':
        return <TrackScreen language={language} />;
      case 'rewards':
        return <RewardsScreen language={language} />;
      default:
        return <HomeScreen language={language} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col items-center">
      <div className="w-full max-w-md mx-auto bg-white shadow-lg flex flex-col h-screen">
        <Header language={language} setLanguage={setLanguage} />
        <main className="flex-grow overflow-y-auto pb-20 p-4">
          {renderView()}
        </main>
        <BottomNav currentView={currentView} setCurrentView={setCurrentView} language={language} />
      </div>
    </div>
  );
};

export default App;
