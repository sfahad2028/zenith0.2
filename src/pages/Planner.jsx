import React from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Cpu, AlertTriangle } from 'lucide-react';

const Planner = () => {
  return (
    <div className="flex h-full gap-6">
      
      {/* Sidebar: Tasks & Integrations */}
      <div className="w-64 flex flex-col space-y-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-slate-400 font-bold text-sm tracking-wider">MY TASKS</h3>
            <Plus size={16} className="text-slate-400 cursor-pointer hover:text-white" />
          </div>
          <p className="text-xs text-slate-500 mb-4">(Waitlist Import)</p>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 text-sm text-slate-300 cursor-grab">
              <div className="w-3 h-3 rounded-full border border-slate-500"></div>
              <span>Analyze Research Code Review</span>
            </li>
            <li className="flex items-center space-x-2 text-sm text-slate-300 cursor-grab">
              <div className="w-3 h-3 rounded-full border border-slate-500"></div>
              <span>Physical Health: Workout</span>
            </li>
            <li className="flex items-center space-x-2 text-sm text-slate-300 cursor-grab">
              <div className="w-3 h-3 rounded-full border border-slate-500"></div>
              <span>Admin: Email Inbox</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-slate-400 font-bold text-sm tracking-wider mb-4">DEADLINE SYNC</h3>
          <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded-lg border border-slate-800">
            <CalendarIcon size={18} className="text-blue-400" />
            <span className="text-sm text-slate-200">Google Calendar</span>
          </div>
        </div>
      </div>

      {/* Main Calendar View */}
      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl flex flex-col overflow-hidden relative">
        
        {/* Planner Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900 z-10">
          <h2 className="text-lg font-bold text-white">Week View</h2>
          <div className="flex items-center space-x-4">
            <div className="flex bg-slate-800 rounded-lg overflow-hidden text-sm">
              <button className="px-3 py-1 bg-slate-700 text-white">Today</button>
              <button className="px-3 py-1 text-slate-400 hover:text-white">Week</button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 text-slate-400 hover:text-white"><ChevronLeft size={20} /></button>
              <button className="p-1 text-slate-400 hover:text-white"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>

        {/* Calendar Grid (Simulated) */}
        <div className="flex-1 relative overflow-y-auto">
          {/* Simulated Willpower Heatmap Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-blue-500/5 to-transparent pointer-events-none z-0"></div>
          
          {/* Grid setup */}
          <div className="grid grid-cols-8 h-full min-w-[800px]">
            {/* Time Column */}
            <div className="col-span-1 border-r border-slate-800 text-xs text-slate-500 text-right pr-2 pt-12 space-y-12">
              <div>8 AM</div><div>10 AM</div><div>12 PM</div><div>2 PM</div><div>4 PM</div><div>6 PM</div>
            </div>

            {/* Days Columns */}
            {['Mon 18th', 'Tue 19th', 'Wed 20th', 'Thu 21th', 'Fri 22nd'].map((day, idx) => (
              <div key={day} className="col-span-1 border-r border-slate-800 relative z-10">
                <div className="text-center text-sm font-semibold text-slate-400 py-3 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
                  {day}
                </div>
                
                {/* Mock Blocks for visual representation */}
                {idx === 0 && (
                  <div className="absolute top-20 left-1 right-1 bg-blue-900/40 border border-blue-500/50 rounded p-2 h-48 text-xs">
                    <span className="font-bold text-blue-200">Code Review</span>
                    <span className="block text-slate-400">Semantic PoW (3 Poms)</span>
                  </div>
                )}
                {idx === 4 && (
                  <>
                    <div className="absolute top-20 left-1 right-1 bg-blue-900/40 border border-blue-500/50 rounded p-2 h-40 text-xs">
                       <span className="font-bold text-blue-200">Code Review</span>
                    </div>
                    {/* Adaptive Shifted Block */}
                    <div className="absolute top-64 left-1 right-1 bg-emerald-900/40 border border-emerald-500/50 rounded p-2 h-24 text-xs">
                       <div className="flex items-center space-x-1 text-emerald-300 font-bold mb-1">
                          <Cpu size={12}/> <span>AI Adjust</span>
                       </div>
                       <span className="text-emerald-100 block">Research Paper</span>
                    </div>
                    {/* Deadline Ribbon */}
                    <div className="absolute top-96 -left-4 w-[120%] bg-red-600/80 border border-red-500 text-white text-xs font-bold p-1 z-20 shadow-lg text-center">
                       PROJECT DELTA DUE: 5 PM
                    </div>
                  </>
                )}
                {/* ARB Block Example */}
                {idx === 2 && (
                  <div className="absolute top-80 left-1 right-1 border-2 border-dashed border-slate-600 bg-slate-800/30 rounded p-2 h-10 text-[10px] flex items-center justify-center text-slate-400">
                     <AlertTriangle size={10} className="mr-1"/> ARB: 120s
                  </div>
                )}
              </div>
            ))}
            {/* Weekend */}
            <div className="col-span-2 relative opacity-50 bg-slate-950/50">
               <div className="grid grid-cols-2">
                  <div className="text-center text-sm text-slate-500 py-3 border-b border-slate-800">Sat 23rd</div>
                  <div className="text-center text-sm text-slate-500 py-3 border-b border-slate-800">Sun 24th</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;