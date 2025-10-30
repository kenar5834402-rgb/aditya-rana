
import React from 'react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Icon from './Icon';

interface TrackScreenProps {
  language: Language;
}

const TrackScreen: React.FC<TrackScreenProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.track_vehicle}</h2>
      <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img src="https://picsum.photos/seed/wastemap/600/400" alt="Map" className="w-full h-full object-cover opacity-50"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
           <Icon name="truck" className="w-12 h-12 text-green-700" />
        </div>
      </div>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md border">
        <div className="flex justify-between items-center text-gray-700">
          <div>
            <p className="font-semibold">{t.driver}:</p>
            <p className="font-semibold">{t.vehicle_no}:</p>
            <p className="font-semibold">{t.eta}:</p>
          </div>
          <div className="text-right">
            <p>Ramesh Kumar</p>
            <p>MH 12 AB 3456</p>
            <p>5 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackScreen;
