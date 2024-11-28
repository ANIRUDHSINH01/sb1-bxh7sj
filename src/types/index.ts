export interface ServerStatus {
  id: string;
  name: string;
  status: 'online' | 'offline';
  type: 'discord' | 'minecraft';
  resources?: {
    cpu: number;
    ram: number;
    storage: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  timestamp: Date;
  read: boolean;
}