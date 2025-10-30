
import React from 'react';
import type { Schedule, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Icon from './Icon';

interface ScheduleCardProps {
  schedule: Schedule;
  language: Language;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ schedule, language }) => {
  const t = TRANSLATIONS[language];
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-2">{t.collection_schedule}</h2>
      <div className="flex items-center space-x-4 text-gray-600">
        <Icon name="calendar" className="w-8 h-8 text-green-600" />
        <div>
          <p className="font-semibold">{schedule.day}: {schedule.time}</p>
          <p className="text-sm">{schedule.area}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
