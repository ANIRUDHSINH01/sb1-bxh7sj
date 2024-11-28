import React from 'react';
import { Power, Settings, Activity } from 'lucide-react';
import { ServerStatus } from '../../types';

interface BotCardProps {
  bot: ServerStatus;
}

export function BotCard({ bot }: BotCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{bot.name}</h3>
          <span className={`px-2 py-1 rounded-full text-sm ${
            bot.status === 'online' 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
          }`}>
            {bot.status}
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <button className="flex items-center justify-center p-2 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50">
            <Power className="w-5 h-5 text-blue-700 dark:text-blue-300" />
          </button>
          <button className="flex items-center justify-center p-2 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Settings className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button className="flex items-center justify-center p-2 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Activity className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
}