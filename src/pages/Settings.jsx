import React from 'react';
import { Shield, ShieldAlert, Key, Link as LinkIcon, PowerOff, AlertOctagon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      
      {/* Column 1: Profile & RPG Skill Tree */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-sm font-bold text-slate-400 tracking-wider mb-6">PROFILE & RPG SKILL TREE</h3>
        
        {/* Profile Card */}
        <div className="flex items-center space-x-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700 mb-8">
           <div className="w-12 h-12 bg-indigo-500 rounded-full border-2 border-indigo-400"></div>
           <div className="flex-1">
              <h4 className="text-white font-bold">Aria</h4>
              <p className="text-xs text-slate-400">Day 14, Phase 2</p>
           </div>
           <div className="w-24 bg-slate-900 rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full" style={{ width: '80%' }}></div></div>
        </div>

        {/* Mock Skill Tree */}
        <h4 className="text-white font-bold mb-4 flex justify-between"><span>SKILL TREE</span> <span className="text-xs text-slate-500">Life as RPG</span></h4>
        <div className="flex justify-between text-center text-sm relative">
           {/* Connection Lines Simulation */}
           <div className="absolute top-8 left-1/6 right-1/6 h-px bg-slate-700 -z-10"></div>
           
           <div className="space-y-4">
              <span className="block text-slate-400 text-xs">Strength Pillar</span>
              <div className="w-10 h-10 mx-auto bg-amber-900/40 border border-amber-500 rounded-full flex items-center justify-center text-amber-500 font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]">Lv 7</div>
              <span className="block text-slate-300 text-xs">Physical</span>
           </div>
           <div className="space-y-4">
              <span className="block text-slate-400 text-xs">Focus Pillar</span>
              <div className="w-10 h-10 mx-auto bg-indigo-900/40 border border-indigo-500 rounded-full flex items-center justify-center text-indigo-400 font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">Lv 5</div>
              <span className="block text-slate-300 text-xs">Deep Work</span>
           </div>
           <div className="space-y-4">
              <span className="block text-slate-400 text-xs">Architect Pillar</span>
              <div className="w-10 h-10 mx-auto bg-emerald-900/40 border border-emerald-500 rounded-full flex items-center justify-center text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]">Lv 5</div>
              <span className="block text-slate-300 text-xs">Planning</span>
           </div>
        </div>
      </div>

      {/* Column 2: App Governance & Friction */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-sm font-bold text-slate-400 tracking-wider mb-2">APP GOVERNANCE & FRICTION</h3>
        <p className="text-xs text-slate-500 mb-6">Idea 1 core mechanics</p>

        {/* Enforcement Levels */}
        <h4 className="text-slate-300 font-bold text-sm mb-3">SELECT ENFORCEMENT LEVEL</h4>
        <div className="space-y-3 mb-8">
           {/* Active Level */}
           <div className="bg-emerald-900/20 border-2 border-emerald-600/50 p-4 rounded-lg cursor-pointer">
              <div className="flex justify-between items-start">
                 <div>
                    <h5 className="text-emerald-400 font-bold text-sm flex items-center"><Shield size={14} className="mr-2"/> Level I: Guide - Gentle</h5>
                    <p className="text-slate-400 text-xs mt-1">Minimal friction, gentle nudges.</p>
                 </div>
                 <span className="text-emerald-400 text-xs font-bold">Active</span>
              </div>
              <p className="text-emerald-500/70 text-xs mt-2">0.5 DP Multiplier</p>
           </div>
           
           {/* Level II */}
           <div className="bg-slate-800/40 border border-slate-700 p-4 rounded-lg cursor-pointer hover:border-amber-500/50 transition">
              <div className="flex justify-between items-start">
                 <div>
                    <h5 className="text-amber-400 font-bold text-sm flex items-center"><ShieldAlert size={14} className="mr-2"/> Level II: Warden - Moderate</h5>
                    <p className="text-slate-400 text-xs mt-1">Breath-holds, Variable Delay.</p>
                 </div>
              </div>
              <p className="text-slate-500 text-xs mt-2">1.0 DP Multiplier</p>
           </div>

           {/* Level III (Locked) */}
           <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg opacity-60">
              <div className="flex justify-between items-start">
                 <div>
                    <h5 className="text-slate-500 font-bold text-sm flex items-center"><Key size={14} className="mr-2"/> Level III: Sovereign - High</h5>
                    <p className="text-slate-600 text-xs mt-1">Financial stakes, hard-locks.</p>
                 </div>
                 <Lock size={14} className="text-slate-600" />
              </div>
           </div>
        </div>
      </div>

      {/* Column 3: Integrations & Fail-Safe */}
      <div className="space-y-6">
         {/* Integrations */}
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-400 tracking-wider mb-4">INTEGRATIONS</h3>
            <ul className="space-y-3">
               <li className="flex justify-between items-center text-sm text-slate-300 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <div className="flex items-center space-x-2"><LinkIcon size={16} /> <span>GitHub Commit Validation</span></div>
                  <span className="text-emerald-400 text-xs">Active</span>
               </li>
               <li className="flex justify-between items-center text-sm text-slate-300 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <div className="flex items-center space-x-2"><LinkIcon size={16} /> <span>Notion Sync</span></div>
                  <button className="text-slate-500 hover:text-white text-xs">Connect</button>
               </li>
            </ul>
         </div>

         {/* THE FAIL-SAFE (Break Glass) */}
         <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
               <AlertOctagon size={48} className="text-red-500 mb-4 opacity-80 group-hover:opacity-100 transition duration-300" />
               <h3 className="text-lg font-black text-white mb-2 tracking-widest">EMERGENCY OVERRIDE</h3>
               <p className="text-red-400 text-xs font-bold mb-6">(BREAK GLASS)</p>
               
               <button className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold py-4 rounded-lg border-2 border-red-400/50 shadow-[0_0_30px_rgba(220,38,38,0.4)] transition transform hover:scale-[1.02] active:scale-95">
                  Initiate Override
               </button>
               
               <p className="text-slate-400 text-xs mt-4 max-w-xs">
                  Overrides all locks but triggers <span className="text-red-400 font-bold">HEAVY PENALTY</span> (-1 RPG Level and $20 Fine).
               </p>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Settings;