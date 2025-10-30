
import React from 'react';
import type { Reward, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Icon from './Icon';

interface RewardCardProps {
  reward: Reward;
  language: Language;
  userPoints: number;
}

const RewardCard: React.FC<RewardCardProps> = ({ reward, language, userPoints }) => {
  const t = TRANSLATIONS[language];
  const canRedeem = userPoints >= reward.points;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between">
      <div className="flex items-center">
        <div className="p-3 bg-yellow-100 rounded-full mr-4">
          <Icon name="rewards" className="w-6 h-6 text-yellow-500" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{reward.title}</h3>
          <p className="text-sm text-gray-600">{reward.points} Points</p>
        </div>
      </div>
      <button 
        disabled={!canRedeem}
        className="px-4 py-2 text-sm font-semibold rounded-lg transition duration-200 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed bg-green-600 text-white hover:bg-green-700"
      >
        {t.redeem}
      </button>
    </div>
  );
};

export default RewardCard;
