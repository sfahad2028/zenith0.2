import React, { useState } from 'react';
// Import the icons from the library you installed
import { LayoutGrid, Timer, CheckSquare, Calendar, BarChart2, Settings } from 'lucide-react';

// Import your pages (Make sure these files exist in src/pages/)
import Dashboard from './pages/Dashboard';
import TimerPage from './pages/Timer';
import Todos from './pages/Todos';
import Planner from './pages/Planner';
import Analytics from './pages/Analytics';
import SettingsPage from './pages/Settings';

const App = () => {
  // This 'state' keeps track of which page is currently active
  const [activePage, setActivePage] = useState('Dashboard');

  // Configuration for your sidebar navigation items
  const navItems = [
    { name: 'Dashboard', icon: LayoutGrid },
    { name: 'Timer', icon: Timer },
    { name: 'To-dos', icon: CheckSquare },
    { name: 'Planner', icon: Calendar },
    { name: 'Analytics', icon: BarChart2 },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
      
      {/* --- SIDEBAR NAVIGATION --- */}
      <nav className="w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col justify-between shadow-xl">
        <div>
          {/* App Logo/Branding */}
          <div className="flex items-center space-x-2 mb-10 px-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.4)]"></div>
            <span className="text-xl font-black tracking-tighter text-white">SOVEREIGN</span>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActivePage(item.name)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activePage === item.name
                      ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-inner'
                      : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <item.icon size={20} className={activePage === item.name ? "text-indigo-400" : "text-slate-500"} />
                  <span className="font-semibold tracking-wide">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Settings/Profile Button at the bottom */}
        <button 
          onClick={() => setActivePage('Settings')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
            activePage === 'Settings'
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
          }`}
        >
          <Settings size={20} />
          <span className="font-semibold">Settings/Profile</span>
        </button>
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        
        {/* Sticky Header */}
        <header className="flex justify-between items-center px-8 py-6 bg-slate-950/50 backdrop-blur-md border-b border-slate-900/50 z-20">
          <h1 className="text-2xl font-black text-white tracking-tight">{activePage.toUpperCase()}</h1>
          <div className="flex items-center space-x-4">
             <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                Focus Mode: Level I
             </div>
             <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-700 transition">
                <Settings size={18} />
             </div>
          </div>
        </header>
        
        {/* Dynamic Page Rendering Section */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto h-full">
            {activePage === 'Dashboard' && <Dashboard />}
            {activePage === 'Timer' && <TimerPage />}
            {activePage === 'To-dos' && <Todos />}
            {activePage === 'Planner' && <Planner />}
            {activePage === 'Analytics' && <Analytics />}
            {activePage === 'Settings' && <SettingsPage />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;