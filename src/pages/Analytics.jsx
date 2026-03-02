import React from 'react';
import { Lock, ShoppingCart, TrendingDown, Activity, ShieldAlert } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      
      {/* Column 1: Performance & Burnout */}
      <div className="space-y-6">
        {/* Performance Overview */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-400 tracking-wider mb-6">FOCUS PERFORMANCE OVERVIEW</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
               <svg className="w-full h-full transform -rotate-90">
                <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="276" strokeDashoffset="33" className="text-sky-400" />
              </svg>
              <span className="absolute text-xl font-bold text-white">88%</span>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">Poms Completed:</p>
              <p className="text-3xl font-bold text-white">24<span className="text-lg text-slate-500">/28</span></p>
            </div>
          </div>
        </div>

        {/* Burnout Detector */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-400 tracking-wider mb-6">BURN-OUT DETECTOR (HEURISTIC AI)</h3>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full border-4 border-amber-500 flex items-center justify-center bg-slate-800 relative overflow-hidden">
               <div className="absolute bottom-0 w-full h-1/2 bg-amber-500/20"></div>
               <Activity className="text-amber-500" />
            </div>
            <div>
              <p className="text-amber-500 font-bold flex items-center"><ShieldAlert size={14} className="mr-1"/> Risk: Moderate</p>
              <p className="text-slate-300 text-sm mt-1">Mandatory Rest Day Indicator</p>
              <button className="mt-2 text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded border border-slate-700 hover:bg-slate-700">
                Suggested: Tomorrow, 24th
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Column 2: Behavioral Insights */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
        <h3 className="text-sm font-bold text-slate-400 tracking-wider mb-6">BEHAVIORAL INSIGHTS</h3>
        
        {/* Willpower Heatmap (Mocked Area Chart) */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>WILLPOWER HEATMAP (DAILY TREND)</span>
            <span>Idea 1</span>
          </div>
          <div className="h-32 w-full bg-gradient-to-b from-blue-500/20 via-orange-500/10 to-transparent border-b-2 border-slate-700 relative">
             <div className="absolute bottom-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwIEwxMDAgMTAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-50"></div>
          </div>
        </div>

        {/* Micro-Procrastination Log */}
        <div className="flex-1">
          <div className="flex justify-between text-xs text-slate-500 mb-4">
            <span>MICRO-PROCRASTINATION (SHADOW LOG) COUNT</span>
          </div>
          <div className="h-40 flex items-end justify-between space-x-2 relative">
             {/* Mocked Bars */}
             {[24, 28, 22, 16, 25, 14, 10, 8].map((val, i) => (
                <div key={i} className="w-full bg-sky-500/80 rounded-t-sm" style={{ height: `${(val/30)*100}%` }}></div>
             ))}
             {/* Decay Line */}
             <div className="absolute top-1/4 left-0 w-full border-t-2 border-dashed border-slate-400"></div>
             <span className="absolute top-8 right-0 text-[10px] text-slate-400 bg-slate-900 px-1">Attention Decay (Avg: 4m)</span>
          </div>
        </div>
      </div>

      {/* Column 3: Economy & Rewards */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
        <h3 className="text-sm font-bold text-slate-400 tracking-wider mb-4">4 ECONOMY & REWARDS</h3>
        
        {/* DP Display */}
        <div className="text-center mb-8 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner">
          <p className="text-slate-500 text-sm font-semibold">DISCIPLINE POINTS (DP)</p>
          <p className="text-5xl font-black text-emerald-400 mt-2">1,450</p>
          <p className="text-slate-400 text-xs mt-2">Current Balance</p>
        </div>

        {/* Reward Store */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-slate-300 font-bold">REWARD STORE</span>
            <ShoppingCart size={16} className="text-slate-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             {/* Locked Reward 1 */}
             <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-not-allowed opacity-80 hover:border-slate-500 transition">
                <Lock size={16} className="text-slate-500 mb-2" />
                <span className="text-sm text-white font-semibold">15 min Instagram</span>
                <span className="text-xs text-emerald-500 font-bold mt-1">100 DP</span>
                <span className="text-[10px] bg-red-900/40 text-red-400 px-2 py-0.5 rounded mt-2">Level II Friction</span>
             </div>
             {/* Locked Reward 2 */}
             <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-not-allowed opacity-80 hover:border-slate-500 transition">
                <Lock size={16} className="text-slate-500 mb-2" />
                <span className="text-sm text-white font-semibold">1 hr Video Games</span>
                <span className="text-xs text-emerald-500 font-bold mt-1">500 DP</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Analytics;