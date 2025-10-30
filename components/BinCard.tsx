
import React from 'react';
import type { Bin } from '../types';

interface BinCardProps {
  bin: Bin;
}

const BinCard: React.FC<BinCardProps> = ({ bin }) => {
  const getLevelColor = () => {
    if (bin.level > 80) return 'bg-red-500';
    if (bin.level > 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-700">{bin.location}</h3>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
          bin.status === 'Full' ? 'bg-red-100 text-red-800' : 
          bin.status === 'Needs Attention' ? 'bg-yellow-100 text-yellow-800' : 
          'bg-green-100 text-green-800'
        }`}>
          {bin.status}
        </span>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center text-sm text-gray-600 mb-1">
          <span>Fill Level</span>
          <span>{bin.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${getLevelColor()}`}
            style={{ width: `${bin.level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BinCard;
