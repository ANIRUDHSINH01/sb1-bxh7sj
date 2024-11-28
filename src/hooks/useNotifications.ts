import { useState, useEffect } from 'react';
import { Notification } from '../types';

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulated notifications - in a real app, this would fetch from an API
    setNotifications([
      {
        id: '1',
        title: 'Server Status',
        message: 'Minecraft server MC-01 is running low on memory',
        type: 'warning',
        timestamp: new Date(),
        read: false
      },
      {
        id: '2',
        title: 'Discord Bot',
        message: 'Bot successfully updated to latest version',
        type: 'success',
        timestamp: new Date(),
        read: true
      }
    ]);
  }, []);

  return { notifications };
}