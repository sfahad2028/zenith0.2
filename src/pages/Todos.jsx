import React, { useState } from 'react';
import { Plus, ChevronDown, ChevronRight, AlignLeft, Image as ImageIcon, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

const Todos = () => {
  // UI State for the AI Suggestion dropdown simulation
  const [showAISuggestion, setShowAISuggestion] = useState(true);

  return (
    <div className="flex h-full gap-6">
      
      {/* Main Task Area */}
      <div className="flex-1 flex flex-col space-y-6">
        
        {/* Task Creation Input */}
        <div className="relative">
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-2 focus-within:border-indigo-500 transition-colors shadow-lg">
            <span className="text-slate-400 font-semibold px-4">CREATE NEW TASK</span>
            <input 
              type="text" 
              defaultValue="Analyze Research Paper"
              className="flex-1 bg-transparent text-white focus:outline-none px-4 py-2 border-l border-slate-700"
            />
            <HelpCircle size={18} className="text-slate-500 mr-4 cursor-pointer hover:text-white" />
            <button className="bg-slate-800 p-2 rounded hover:bg-slate-700 text-white transition">
              <Plus size={20} />
            </button>
          </div>

          {/* AI Suggestion Dropdown (Simulated) */}
          {showAISuggestion && (
            <div className="absolute top-16 left-48 w-96 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl p-4 z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-green-400 text-sm font-semibold flex items-center">
                  ✨ AI Suggestion: Breakdown
                </span>
                <button onClick={() => setShowAISuggestion(false)} className="text-slate-400 hover:text-white text-xs">Dismiss</button>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex justify-between"><span>1. Outline</span> <span className="text-slate-500">(1 Pom)</span></li>
                <li className="flex justify-between"><span>2. Draft</span> <span className="text-slate-500">(3 Poms)</span></li>
                <li className="flex justify-between"><span>3. Cite</span> <span className="text-slate-500">(1 Pom)</span></li>
              </ul>
              <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded text-sm transition">
                Accept Breakdown
              </button>
            </div>
          )}
        </div>

        {/* Task Lists */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          
          {/* TODAY Category */}
          <div className="p-4 border-b border-slate-800">
            <div className="flex items-center space-x-2 text-white font-bold mb-4 cursor-pointer">
              <ChevronDown size={20} />
              <span>TODAY</span>
            </div>
            
            {/* Headers */}
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-slate-500 uppercase px-4 mb-2">
              <div className="col-span-1">Priority</div>
              <div className="col-span-6">Category / Task</div>
              <div className="col-span-2 text-center">Predicted</div>
              <div className="col-span-3">PoW Validation</div>
            </div>

            {/* Task Items */}
            <div className="space-y-2">
              {/* Task 1: Semantic */}
              <div className="grid grid-cols-12 gap-4 items-center bg-slate-950/50 p-3 rounded-lg border border-slate-800/50 hover:bg-slate-800/50 transition">
                <div className="col-span-1 flex justify-center">
                  <span className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded border border-red-900/50">High</span>
                </div>
                <div className="col-span-6 flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full border border-slate-600"></div>
                  <span className="text-slate-200">Deep Work: Code Review</span>
                </div>
                <div className="col-span-2 text-center text-slate-400 text-sm">2 Poms</div>
                <div className="col-span-3 flex items-center space-x-2 text-emerald-400 text-sm">
                  <AlignLeft size={16} />
                  <span>Semantic PoW (Text)</span>
                </div>
              </div>

              {/* Task 2: Visual */}
              <div className="grid grid-cols-12 gap-4 items-center bg-slate-950/50 p-3 rounded-lg border border-slate-800/50 hover:bg-slate-800/50 transition">
                <div className="col-span-1 flex justify-center">
                  <span className="bg-amber-900/30 text-amber-400 text-xs px-2 py-1 rounded border border-amber-900/50">Med</span>
                </div>
                <div className="col-span-6 flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full border border-slate-600"></div>
                  <span className="text-slate-200">Physical Health: Workout</span>
                </div>
                <div className="col-span-2 text-center text-slate-400 text-sm">3 Poms</div>
                <div className="col-span-3 flex items-center space-x-2 text-emerald-400 text-sm">
                  <ImageIcon size={16} />
                  <span>Visual PoW (Photo)</span>
                </div>
              </div>

              {/* Task 3: Baseline Upload required */}
              <div className="grid grid-cols-12 gap-4 items-center bg-slate-950/50 p-3 rounded-lg border border-slate-800/50 hover:bg-slate-800/50 transition">
                <div className="col-span-1 flex justify-center">
                  <span className="bg-amber-900/30 text-amber-400 text-xs px-2 py-1 rounded border border-amber-900/50">Med</span>
                </div>
                <div className="col-span-6 flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full border border-slate-600"></div>
                  <span className="text-slate-200">Admin: Clean Desk</span>
                </div>
                <div className="col-span-2 text-center text-slate-400 text-sm">1 Pom</div>
                <div className="col-span-3">
                  <button className="flex items-center justify-center space-x-2 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded hover:bg-slate-200 transition">
                    <ImageIcon size={14} />
                    <span>Upload Baseline</span>
                  </button>
                </div>
              </div>

              {/* Task 4: Simple */}
              <div className="grid grid-cols-12 gap-4 items-center bg-slate-950/50 p-3 rounded-lg border border-slate-800/50 hover:bg-slate-800/50 transition">
                <div className="col-span-1 flex justify-center">
                  <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded border border-green-900/50">Low</span>
                </div>
                <div className="col-span-6 flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full border border-slate-600"></div>
                  <span className="text-slate-200">RPG Skill: Focus Practice</span>
                </div>
                <div className="col-span-2 text-center text-slate-400 text-sm">2 Poms</div>
                <div className="col-span-3 flex items-center space-x-2 text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  <span>Simple (Checkmark)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Collapsed Categories */}
          <div className="p-4 border-b border-slate-800 flex items-center space-x-2 text-slate-400 font-bold cursor-pointer hover:text-white transition">
            <ChevronRight size={20} />
            <span>TOMORROW</span>
          </div>
          <div className="p-4 border-b border-slate-800 flex items-center space-x-2 text-slate-400 font-bold cursor-pointer hover:text-white transition">
            <ChevronRight size={20} />
            <span>THIS WEEK</span>
          </div>
          <div className="p-4 flex items-center space-x-2 text-slate-400 font-bold cursor-pointer hover:text-white transition">
            <ChevronRight size={20} />
            <span>SOMEDAY</span>
          </div>
        </div>
      </div>

      {/* Right Sidebar: Planner Preview */}
      <div className="w-72 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col">
        <h3 className="text-slate-400 font-bold text-sm tracking-wider mb-4">PLANNER PREVIEW</h3>
        <div className="flex items-center justify-between text-white font-bold mb-4">
          <span>TODAY</span>
          <ChevronRight size={16} className="text-slate-500" />
        </div>
        
        {/* Mock visual representation of the calendar blocks */}
        <div className="space-y-3 flex-1">
          <div className="bg-indigo-900/40 border border-indigo-500/30 p-3 rounded-lg border-l-4 border-l-indigo-500 text-sm">
            <span className="text-indigo-200">Deep Work: Code Review</span>
          </div>
          <div className="bg-emerald-900/40 border border-emerald-500/30 p-3 rounded-lg border-l-4 border-l-emerald-500 text-sm">
            <span className="text-emerald-200">1. Outline</span>
            <span className="block text-xs text-emerald-400/70 mt-1">Physical Health Paper</span>
          </div>
          <div className="bg-slate-800/40 border border-slate-600/30 p-3 rounded-lg border-l-4 border-l-slate-500 text-sm">
            <span className="text-slate-300">Admin: Email Inbox</span>
          </div>
        </div>
        
        <button className="w-full flex items-center justify-center space-x-2 text-slate-400 hover:text-white text-sm py-2 mt-4 border border-slate-700 rounded-lg hover:bg-slate-800 transition">
          <Plus size={16} />
          <span>Add All</span>
        </button>
      </div>

    </div>
  );
};

export default Todos;