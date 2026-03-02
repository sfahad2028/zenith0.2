import React, { useState } from 'react';
import { Play, Pause, Square, Mic, Volume2, AlertCircle, Loader } from 'lucide-react';

const Timer = () => {
  // UI States for demonstration
  const [isWorking, setIsWorking] = useState(true);
  const [cravingDetected, setCravingDetected] = useState(true); // Toggle to see the Friction UI

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      
      {/* LEFT COLUMN: Deep Work Engine */}
      <div className="flex flex-col space-y-6">
        
        {/* Main Immersive Timer */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden h-96 shadow-2xl">
          <div className="absolute top-4 left-4">
            <h2 className="text-xl font-bold text-white">Work Mode</h2>
            <p className="text-slate-400 text-sm">Phase 1: Deep Work (Level I Guide)</p>
          </div>
          
          {/* Circular Progress (Visual only for layout) */}
          <div className="relative w-64 h-64 flex items-center justify-center rounded-full border-8 border-slate-800 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
              <circle cx="120" cy="120" r="112" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
              <circle cx="120" cy="120" r="112" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="703" strokeDashoffset="150" className="text-cyan-400 transition-all duration-1000" />
            </svg>
            <span className="text-6xl font-light text-white tracking-wider">23:14</span>
          </div>

          <div className="mt-8 bg-slate-800/50 border border-slate-700 px-6 py-2 rounded-full backdrop-blur-sm">
            <span className="text-slate-200">Analyze Research Paper (Semantic PoW)</span>
          </div>
        </div>

        {/* Timer Controls & Settings */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center text-white bg-slate-800 p-2 rounded">
                <span>1. Research</span>
                <AlertCircle size={14} className="text-slate-400" />
              </li>
              <li className="flex justify-between items-center text-slate-500 px-2">
                <span>2. Coding</span>
                <span>14:02</span>
              </li>
              <li className="flex justify-between items-center text-slate-500 px-2">
                <span>3. Break</span>
                <span>15:00</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-center space-y-4">
             <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition">
                <div>
                  <p className="text-xs text-slate-400">Focus Sounds</p>
                  <p className="text-sm text-white">Deep Ambient</p>
                </div>
                <Volume2 size={18} className="text-slate-400" />
             </div>
             <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition">
                <div>
                  <p className="text-xs text-slate-400">Voice Assistant</p>
                  <p className="text-sm text-green-400">Active</p>
                </div>
                <Mic size={18} className="text-slate-400" />
             </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Anti-Addiction Engine (Conditional Render based on Craving state) */}
      <div className="h-full">
        {cravingDetected ? (
          <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl h-full flex flex-col relative overflow-hidden">
            {/* Variable Delay Section */}
            <div className="p-8 border-b border-slate-800 flex flex-col items-center justify-center text-center h-1/3 bg-slate-950/50">
              <h3 className="text-red-400 font-bold tracking-widest text-sm mb-4">VARIABLE DELAY INITIATED / CRAVING DETECTED</h3>
              <Loader size={32} className="text-indigo-500 animate-spin mb-3" />
              <p className="text-slate-400 text-sm mb-1">56kbps loading simulation...</p>
              <p className="text-slate-500 text-xs">Blocked Domain: <span className="text-white">instagram.com</span></p>
            </div>

            {/* Breath-Hold Section */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold text-white mb-8 leading-relaxed max-w-sm">
                COMPLETE 60s BREATH-HOLD TO UNLOCK DISTRACTION <br/>
                <span className="text-sm font-normal text-slate-400">(Level II Friction)</span>
              </h3>
              
              {/* Breathing Circle */}
              <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-4 border-slate-800 mb-8 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                  <circle cx="76" cy="76" r="72" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-800" />
                  <circle cx="76" cy="76" r="72" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="452" strokeDashoffset="40" className="text-sky-400" />
                </svg>
                <span className="text-4xl font-bold text-white">55s</span>
              </div>

              <div className="flex flex-col w-full max-w-xs space-y-3">
                <button 
                  onClick={() => setCravingDetected(false)} 
                  className="bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-200 transition"
                >
                  Abstain (Close Distraction)
                </button>
                <button className="bg-transparent border border-slate-700 text-slate-400 font-semibold py-3 rounded-xl hover:bg-slate-800 transition text-sm">
                  Retry Breath-Hold
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl h-full flex flex-col items-center justify-center text-slate-500">
            <Square size={48} className="mb-4 opacity-20" />
            <p>No active cravings detected.</p>
            <p className="text-sm">Stay focused.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Timer;