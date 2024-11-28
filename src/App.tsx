import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { BotCard } from './components/discord/BotCard';
import { ServerCard } from './components/minecraft/ServerCard';

function App() {
  const discordBots = [
    { id: 'bot1', name: 'Moderation Bot', status: 'online', type: 'discord' },
    { id: 'bot2', name: 'Music Bot', status: 'offline', type: 'discord' }
  ];

  const minecraftServers = [
    {
      id: 'mc1',
      name: 'Survival Server',
      status: 'online',
      type: 'minecraft',
      resources: { cpu: 45, ram: 60, storage: 80 }
    },
    {
      id: 'mc2',
      name: 'Creative Server',
      status: 'online',
      type: 'minecraft',
      resources: { cpu: 30, ram: 40, storage: 65 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Discord Bots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discordBots.map(bot => (
                <BotCard key={bot.id} bot={bot} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Minecraft Servers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {minecraftServers.map(server => (
                <ServerCard key={server.id} server={server} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;