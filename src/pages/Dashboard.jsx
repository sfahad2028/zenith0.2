import React from 'react';
import { PlayCircle, Zap } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      
      {/* Top Banner: Status */}
      <div className="col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-slate-700 rounded-full overflow-hidden border-2 border-slate-600">
            {/* Placeholder for User Avatar */}
            <img src="/api/placeholder/64/64" alt="User" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Current Status</h2>
            <p className="text-slate-400">Day 14, Phase 2</p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex justify-between text-sm mb-2 text-slate-400">
            <span>Phase Goal</span>
            <span>Attention Conditioning</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
      </div>

      {/* Left Column: RPG & Goals */}
      <div className="col-span-1 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">RPG & Goals</h3>
          
          {/* Health Bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-slate-800">
              <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="276" strokeDashoffset="41" className="text-green-500" />
              </svg>
              <div className="text-center">
                <span className="block text-xl font-bold text-white">85</span>
                <span className="block text-xs text-slate-400">/100</span>
              </div>
            </div>
            <button className="bg-green-500/10 text-green-500 px-4 py-2 rounded-lg flex items-center space-x-2 border border-green-500/20 hover:bg-green-500/20 transition">
              <Zap size={16} />
              <span>XP Gain</span>
            </button>
          </div>

          {/* Skill Tree Minimap */}
          <div className="space-y-3">
             <div className="flex justify-between text-sm">
                <span className="text-slate-300">Strength (5/10)</span>
                <span className="text-green-400">+100 XP</span>
             </div>
             <div className="w-full bg-slate-800 rounded-full h-1.5"><div className="bg-slate-400 h-1.5 rounded-full" style={{ width: '50%' }}></div></div>
             
             <div className="flex justify-between text-sm">
                <span className="text-slate-300">Focus (7/10)</span>
                <span className="text-green-400">+20 XP</span>
             </div>
             <div className="w-full bg-slate-800 rounded-full h-1.5"><div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '70%' }}></div></div>
          </div>
        </div>
      </div>

      {/* Right Column: Active Challenges & Timers */}
      <div className="col-span-2 space-y-6">
        
        {/* Governance Level */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
          <span className="font-semibold text-slate-300">Current Governance Level</span>
          <span className="text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-sm">Level I: The Guide (Active)</span>
        </div>

        {/* Boss Challenge */}
        <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-red-500 font-bold uppercase text-sm tracking-wider">Active Boss Challenge: The Sprint</h3>
            <span className="text-red-400 text-sm">Countdown</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xl font-bold text-white mb-1">Milestone: Complete Alpha Build</p>
              <p className="text-slate-400 flex items-center"><Timer size={16} className="mr-2"/> Starts in 2h 15m</p>
            </div>
            <button className="bg-white text-red-900 font-bold px-6 py-2 rounded-lg hover:bg-slate-200 transition">
              Enter Sprint State
            </button>
          </div>
        </div>

        {/* Quick Access & Tasks Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Quick Access Timers */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Access Timers</h3>
            <div className="flex justify-between space-x-2">
              <button className="flex flex-col items-center p-3 rounded-lg hover:bg-slate-800 transition text-slate-400 hover:text-white">
                <PlayCircle size={32} className="mb-2" />
                <span className="text-sm">Micro-Block</span>
                <span className="text-xs text-slate-500">3.5min</span>
              </button>
              <button className="flex flex-col items-center p-3 rounded-lg hover:bg-slate-800 transition text-slate-400 hover:text-white">
                <PlayCircle size={32} className="mb-2" />
                <span className="text-sm">Deep Work</span>
                <span className="text-xs text-slate-500">25min</span>
              </button>
              <button className="flex flex-col items-center p-3 rounded-lg hover:bg-slate-800 transition text-slate-400 hover:text-white">
                <PlayCircle size={32} className="mb-2" />
                <span className="text-sm">Break</span>
                <span className="text-xs text-slate-500">5min</span>
              </button>
            </div>
          </div>

          {/* Upcoming Focus Tasks */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Upcoming Focus</h3>
              <span className="text-slate-500 text-sm">4 tasks</span>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full border border-slate-500"></div><span className="text-slate-300">Write Blog Post</span></div>
                <span className="text-slate-500">3 Poms</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full border border-slate-500"></div><span className="text-slate-300">Gym Session</span></div>
                <span className="text-slate-500">1 Pom</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full border border-slate-500"></div><span className="text-slate-300">Meal Prep</span></div>
                <span className="text-slate-500">1 Pom</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;