
import React from 'react';
import { MOCK_REWARDS, TRANSLATIONS } from '../constants';
import type { Language } from '../types';
import RewardCard from './RewardCard';
import Icon from './Icon';

interface RewardsScreenProps {
  language: Language;
}

const RewardsScreen: React.FC<RewardsScreenProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const userPoints = 450;
  
  return (
    <div className="space-y-6">
      <div className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg text-white text-center">
        <p className="text-lg font-medium">{t.your_points}</p>
        <p className="text-5xl font-bold">{userPoints}</p>
      </div>
      
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-3">{t.available_rewards}</h2>
        <div className="space-y-3">
          {MOCK_REWARDS.map((reward) => (
            <RewardCard key={reward.id} reward={reward} language={language} userPoints={userPoints}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsScreen;
