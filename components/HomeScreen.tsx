
import React, { useState } from 'react';
import { MOCK_BINS, MOCK_SCHEDULE, TRANSLATIONS } from '../constants';
import type { Language } from '../types';
import BinCard from './BinCard';
import ScheduleCard from './ScheduleCard';
import Spinner from './Spinner';
import { getRecyclingTip } from '../services/geminiService';
import Icon from './Icon';

interface HomeScreenProps {
  language: Language;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ language }) => {
  const [tip, setTip] = useState('');
  const [isLoadingTip, setIsLoadingTip] = useState(false);
  const t = TRANSLATIONS[language];

  const handleGetTip = async () => {
    setIsLoadingTip(true);
    setTip('');
    const fetchedTip = await getRecyclingTip();
    setTip(fetchedTip);
    setIsLoadingTip(false);
  };

  return (
    <div className="space-y-6">
      <ScheduleCard schedule={MOCK_SCHEDULE} language={language} />
      
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm">
         <button
            onClick={handleGetTip}
            disabled={isLoadingTip}
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center disabled:bg-green-400"
          >
            {isLoadingTip ? <Spinner /> : <Icon name="idea" className="w-5 h-5 mr-2" />}
            {isLoadingTip ? t.generating_tip : t.get_recycling_tip}
          </button>
          {tip && (
            <p className="mt-3 text-sm text-green-800 bg-green-100 p-3 rounded-md text-center">{tip}</p>
          )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-3">{t.nearby_bins}</h2>
        <div className="space-y-3">
          {MOCK_BINS.map((bin) => (
            <BinCard key={bin.id} bin={bin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
