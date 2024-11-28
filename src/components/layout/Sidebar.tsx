import React from 'react';
import { Home, Bot, Server, Settings, LifeBuoy, CreditCard } from 'lucide-react';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Hosting Dashboard</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavLink href="/dashboard" icon={Home}>Overview</NavLink>
          <NavLink href="/discord" icon={Bot}>Discord Bots</NavLink>
          <NavLink href="/minecraft" icon={Server}>Minecraft Servers</NavLink>
          <NavLink href="/settings" icon={Settings}>Settings</NavLink>
          <NavLink href="/support" icon={LifeBuoy}>Support</NavLink>
          <NavLink href="/billing" icon={CreditCard}>Billing</NavLink>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}