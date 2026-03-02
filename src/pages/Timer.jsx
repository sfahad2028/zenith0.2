import React, { useState } from 'react';
import { Play, Pause, Square, Plus, Minus, AlertTriangle, Loader, Bell, Settings, FastForward, Edit2, Link as LinkIcon, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Timer = () => {
  const { 
    groups, timers, activeTimerId, setActiveTimerId,
    cravingDetected, activeAlert,
    toggleTimer, resetTimer, adjustTime, startGroup, resetGroup, addOrUpdateTimer, deleteTimer,
    triggerFriction, resolveFriction, dismissAlert, formatTime
  } = useAppContext();

  const [editingTimer, setEditingTimer] = useState(null); // Holds timer object being edited

  // Calculate Immersive Circle Progress
  const activeTimer = timers.find(t => t.id === activeTimerId) || timers[0];
  const progressPercentage = activeTimer ? activeTimer.timeLeft / (activeTimer.baseMinutes * 60) : 0;
  const strokeDashoffset = 703 - (703 * (isNaN(progressPercentage) ? 0 : progressPercentage));

  const displayTitle = (t) => t.title.includes('[count]') ? t.title.replace('[count]', t.currentLoop) : t.title;

  const handleSaveConfig = (e) => {
    e.preventDefault();
    addOrUpdateTimer(editingTimer);
    setEditingTimer(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full relative">
      
      {/* =========================================
          LEFT: IMMERSIVE FOCUS ENGINE 
          ========================================= */}
      <div className="lg:col-span-5 flex flex-col space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden h-[450px] shadow-2xl">
          <div className="absolute top-4 left-4 w-full pr-8 flex justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Focus Engine</h2>
              <p className="text-slate-400 text-sm truncate max-w-[200px]">{displayTitle(activeTimer)}</p>
            </div>
            {activeTimer.repeatCount > 1 && <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs font-bold h-6 border border-slate-700">Loop {activeTimer.currentLoop}/{activeTimer.repeatCount}</span>}
          </div>
          
          <div className="relative w-64 h-64 flex items-center justify-center rounded-full border-8 border-slate-800 shadow-[0_0_50px_rgba(99,102,241,0.1)] mb-8 mt-4">
            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90 transition-all duration-1000 ease-linear">
              <circle cx="120" cy="120" r="112" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
              <circle 
                cx="120" cy="120" r="112" stroke="currentColor" strokeWidth="8" fill="transparent" 
                strokeDasharray="703" 
                strokeDashoffset={strokeDashoffset} 
                className={`${activeTimer.type === 'break' ? 'text-emerald-400' : 'text-cyan-400'} transition-all duration-1000 ease-linear`}
              />
            </svg>
            <span className="text-6xl font-light text-white tracking-wider">{formatTime(activeTimer.timeLeft)}</span>
          </div>

          <div className="flex items-center space-x-6 z-10">
            <button onClick={() => adjustTime(activeTimer.id, -30)} className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition active:scale-95" title="-30s"><Minus size={16} /></button>
            <button onClick={() => toggleTimer(activeTimer.id)} className="w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-transform active:scale-95">
              {activeTimer.isRunning ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
            </button>
            <button onClick={() => adjustTime(activeTimer.id, 60)} className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition active:scale-95" title="+1m"><Plus size={16} /></button>
          </div>
        </div>

        {/* Global Friction Button */}
        <button onClick={triggerFriction} className="w-full bg-red-900/20 text-red-400 border border-red-900/50 hover:bg-red-900/40 p-4 rounded-xl flex items-center justify-center font-bold tracking-widest transition active:scale-95">
          <AlertTriangle size={18} className="mr-2" /> SIMULATE CRAVING (FRICTION)
        </button>
      </div>

      {/* =========================================
          RIGHT: MULTI-TIMER BOARD (CATFANTOM STYLE)
          ========================================= */}
      <div className="lg:col-span-7 flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Timer Boards</h2>
          <button 
            onClick={() => setEditingTimer({ id: `new`, title: 'New Timer', baseMinutes: 10, type: 'focus', groupId: groups[0].id, linkTargetId: '', sound: 'Bell', animation: 'none', note: '', intervalAlert: 0, repeatCount: 1 })}
            className="flex items-center text-sm bg-slate-800 text-white px-3 py-1.5 rounded hover:bg-slate-700 transition"
          >
            <Plus size={14} className="mr-1" /> Add Timer
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-6">
          {groups.map(group => {
            const groupTimers = timers.filter(t => t.groupId === group.id);
            if(groupTimers.length === 0) return null;

            return (
              <div key={group.id} className="mb-6">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-4">
                  <h3 className="font-bold text-slate-300">{group.name}</h3>
                  <div className="flex space-x-2">
                    <button onClick={() => startGroup(group.id)} className="text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-900/50 px-2 py-1 rounded">Start All</button>
                    <button onClick={() => resetGroup(group.id)} className="text-xs text-slate-400 hover:text-white border border-slate-700 px-2 py-1 rounded">Reset All</button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupTimers.map(timer => (
                    <div 
                      key={timer.id} 
                      className={`bg-slate-950 border ${timer.isRunning ? 'border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.1)]' : 'border-slate-800'} rounded-lg p-4 flex flex-col cursor-pointer transition`}
                      onClick={() => setActiveTimerId(timer.id)} // Set as immersive on tap
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-bold text-sm ${activeTimerId === timer.id ? 'text-indigo-400' : 'text-slate-200'} truncate`}>{displayTitle(timer)}</h4>
                        <button onClick={(e) => { e.stopPropagation(); setEditingTimer(timer); }} className="text-slate-500 hover:text-white"><Settings size={14}/></button>
                      </div>

                      <span className="text-2xl font-light text-white font-mono">{formatTime(timer.timeLeft)}</span>
                      
                      {/* Properties Ribbon */}
                      <div className="flex flex-wrap gap-2 mt-3 text-[10px] text-slate-500">
                        {timer.linkTargetId && <span className="flex items-center text-emerald-500"><LinkIcon size={10} className="mr-1"/>Chain</span>}
                        {timer.intervalAlert > 0 && <span className="flex items-center"><FastForward size={10} className="mr-1"/> {timer.intervalAlert/60}m sub</span>}
                        {timer.repeatCount !== 1 && <span>🔁 {timer.repeatCount === 'infinite' ? '∞' : timer.repeatCount}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================
          MODALS & OVERLAYS 
          ========================================= */}

      {/* ADVANCED CONFIGURATION MODAL */}
      {editingTimer && (
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-40 flex items-center justify-center p-4">
          <form onSubmit={handleSaveConfig} className="bg-slate-900 border border-slate-700 p-6 rounded-xl w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-2">
              <h3 className="text-lg font-bold text-white">Timer Configuration</h3>
              {editingTimer.id !== 'new' && (
                <button type="button" onClick={() => { deleteTimer(editingTimer.id); setEditingTimer(null); }} className="text-red-400 hover:text-red-300 p-1"><Trash2 size={16}/></button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title (Use [count] for dynamic loop #)</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-sm" value={editingTimer.title} onChange={e => setEditingTimer({...editingTimer, title: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Duration (Minutes)</label>
                <input required type="number" step="0.1" className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-sm" value={editingTimer.baseMinutes} onChange={e => setEditingTimer({...editingTimer, baseMinutes: parseFloat(e.target.value)})} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 border-t border-slate-800 pt-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Auto-Link (On Finish start:)</label>
                <select className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-sm" value={editingTimer.linkTargetId || ''} onChange={e => setEditingTimer({...editingTimer, linkTargetId: e.target.value})}>
                  <option value="">None (Stop)</option>
                  {timers.filter(t => t.id !== editingTimer.id).map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Auto-Repeat</label>
                <select className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-sm" value={editingTimer.repeatCount} onChange={e => setEditingTimer({...editingTimer, repeatCount: e.target.value === 'infinite' ? 'infinite' : parseInt(e.target.value)})}>
                  <option value={1}>No Repeat (1x)</option>
                  <option value={2}>2 Times</option>
                  <option value={4}>4 Times</option>
                  <option value={'infinite'}>Infinite Loop</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 border-t border-slate-800 pt-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Sub-Timer (Alert every X mins)</label>
                <input type="number" className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-sm" value={editingTimer.intervalAlert / 60} onChange={e => setEditingTimer({...editingTimer, intervalAlert: parseFloat(e.target.value || 0) * 60})} />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Completion Animation</label>
                <select className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-sm" value={editingTimer.animation} onChange={e => setEditingTimer({...editingTimer, animation: e.target.value})}>
                  <option value="none">None</option>
                  <option value="fireworks">Fireworks</option>
                  <option value="cat">Swinging Tail Cat</option>
                  <option value="bell">Swinging Bell</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs text-slate-500 mb-1">Completion Note / Instruction</label>
              <textarea className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-sm" rows="2" placeholder="e.g. Drink a glass of water!" value={editingTimer.note} onChange={e => setEditingTimer({...editingTimer, note: e.target.value})}></textarea>
            </div>

            <div className="flex justify-end space-x-3 mt-auto">
              <button type="button" onClick={() => setEditingTimer(null)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-500 transition">Save Timer</button>
            </div>
          </form>
        </div>
      )}

      {/* NOTIFICATIONS & FRICTION OVERLAYS */}
      {activeAlert && (
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-900 border border-indigo-500 p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl">
            {activeAlert.animation === 'cat' && <div className="text-6xl mb-4 animate-bounce">🐈</div>}
            {activeAlert.animation === 'fireworks' && <div className="text-6xl mb-4 animate-pulse">🎆</div>}
            <h3 className="text-2xl font-black text-indigo-400 mb-2">{activeAlert.title}</h3>
            <div className="bg-slate-800/50 p-4 rounded-lg mb-8 border-l-4 border-indigo-500 mt-4">
              <p className="text-slate-200 font-semibold italic">{activeAlert.note}</p>
            </div>
            <button onClick={dismissAlert} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl active:scale-95">Dismiss</button>
          </div>
        </div>
      )}

      {cravingDetected && (
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-8">
          <Loader size={48} className="text-indigo-500 animate-spin mb-8" />
          <h2 className="text-3xl font-black text-white mb-4">COMPLETE 60s BREATH-HOLD</h2>
          <p className="text-slate-400 mb-12">To unlock distraction (Level II Friction)</p>
          <button onClick={resolveFriction} className="bg-white text-slate-900 font-bold px-12 py-4 rounded-xl active:scale-95">Abstain</button>
        </div>
      )}
    </div>
  );
};

export default Timer;