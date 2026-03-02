import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- ECONOMY & FRICTION STATE ---
  const [dp, setDp] = useState(1450);
  const [cravingDetected, setCravingDetected] = useState(false);
  const [activeAlert, setActiveAlert] = useState(null); // Used for Notes, Animations, and Sub-timer nudges

  // --- CATFANTOM STYLE ORGANIZATION ---
  const [groups, setGroups] = useState([
    { id: 'g1', name: 'Deep Work Workflow', sort: 'none' },
    { id: 'g2', name: 'Routines', sort: 'none' }
  ]);

  // --- PARALLEL MULTI-TIMER GRAPH ---
  const [timers, setTimers] = useState([
    { 
      id: 't1', groupId: 'g1', title: 'Pomodoro [count]', baseMinutes: 25, timeLeft: 25 * 60, elapsed: 0, 
      isRunning: false, type: 'focus', linkTargetId: 't2', 
      sound: 'Bell', animation: 'fireworks', note: 'Time for a break!', 
      intervalAlert: 300, // Sub-timer: Alert every 5 mins
      repeatCount: 4, currentLoop: 1 // Auto-repeat logic
    }, 
    { 
      id: 't2', groupId: 'g1', title: 'Short Break', baseMinutes: 5, timeLeft: 5 * 60, elapsed: 0,
      isRunning: false, type: 'break', linkTargetId: 't1', // Links back to t1 (Infinite Loop until repeatCount met)
      sound: 'Chime', animation: 'none', note: 'Back to work.',
      intervalAlert: 0, repeatCount: 1, currentLoop: 1
    }
  ]);

  // The timer currently selected for the "Immersive Focus View"
  const [activeTimerId, setActiveTimerId] = useState('t1');

  // --- THE PARALLEL TICK ENGINE & EVENT CONTROLLER ---
  useEffect(() => {
    let interval = null;

    if (!cravingDetected) {
      interval = setInterval(() => {
        setTimers(prevTimers => {
          let updatedTimers = [...prevTimers];
          let triggeredLinks = [];

          updatedTimers = updatedTimers.map(timer => {
            if (!timer.isRunning) return timer;

            const newTimeLeft = Math.max(0, timer.timeLeft - 1);
            const newElapsed = timer.elapsed + 1;

            // 1. "Timer within a Timer" (Sub-timer/Interval logic)
            if (timer.intervalAlert > 0 && newElapsed % timer.intervalAlert === 0 && newTimeLeft > 0) {
              setActiveAlert({ title: `Interval Nudge: ${timer.title}`, note: `Passed ${timer.intervalAlert / 60} mins`, animation: 'none' });
            }

            // 2. onFinish Event Logic
            if (newTimeLeft === 0) {
              // Show unique note & animation
              if (timer.note || timer.animation !== 'none') {
                 setActiveAlert({ title: timer.title, note: timer.note, animation: timer.animation });
              }
              
              if (timer.type === 'focus') setDp(prev => prev + 50);

              // 3. Auto-Repeat Logic
              if (timer.repeatCount === 'infinite' || timer.currentLoop < timer.repeatCount) {
                return { ...timer, timeLeft: timer.baseMinutes * 60, elapsed: 0, currentLoop: timer.currentLoop + 1 };
              } else {
                // 4. Catfantom Linkage Logic (Trigger next timer)
                if (timer.linkTargetId) triggeredLinks.push(timer.linkTargetId);
                return { ...timer, isRunning: false, timeLeft: timer.baseMinutes * 60, elapsed: 0, currentLoop: 1 }; // Reset itself, wait for next manual/linked trigger
              }
            }
            return { ...timer, timeLeft: newTimeLeft, elapsed: newElapsed };
          });

          // Programmatically start linked timers
          if (triggeredLinks.length > 0) {
            updatedTimers = updatedTimers.map(t => 
              triggeredLinks.includes(t.id) ? { ...t, isRunning: true, timeLeft: t.baseMinutes * 60, elapsed: 0, currentLoop: 1 } : t
            );
            // Optionally auto-switch the immersive view to the newly linked timer
            setActiveTimerId(triggeredLinks[0]); 
          }

          return updatedTimers;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [cravingDetected]);

  // --- COMMANDS & PRECISION ADJUSTMENTS ---
  const toggleTimer = (id) => setTimers(prev => prev.map(t => t.id === id ? { ...t, isRunning: !t.isRunning } : t));
  const resetTimer = (id) => setTimers(prev => prev.map(t => t.id === id ? { ...t, isRunning: false, timeLeft: t.baseMinutes * 60, elapsed: 0, currentLoop: 1 } : t));
  
  const adjustTime = (id, secondsToAdd) => {
    setTimers(prev => prev.map(t => {
      if (t.id === id) return { ...t, timeLeft: Math.max(0, t.timeLeft + secondsToAdd) };
      return t;
    }));
  };

  const startGroup = (groupId) => setTimers(prev => prev.map(t => t.groupId === groupId ? { ...t, isRunning: true } : t));
  const resetGroup = (groupId) => setTimers(prev => prev.map(t => t.groupId === groupId ? { ...t, isRunning: false, timeLeft: t.baseMinutes * 60, elapsed: 0, currentLoop: 1 } : t));

  // --- API FOR CUSTOMIZATION ---
  const addOrUpdateTimer = (timerObj) => {
    setTimers(prev => {
      const exists = prev.find(t => t.id === timerObj.id);
      if (exists) return prev.map(t => t.id === timerObj.id ? { ...t, ...timerObj, timeLeft: timerObj.baseMinutes * 60 } : t);
      return [...prev, { ...timerObj, id: `t${Date.now()}`, timeLeft: timerObj.baseMinutes * 60, elapsed: 0, isRunning: false, currentLoop: 1 }];
    });
  };

  const deleteTimer = (id) => setTimers(prev => prev.filter(t => t.id !== id));

  // --- UI TOGGLES ---
  const triggerFriction = () => {
    setTimers(prev => prev.map(t => ({ ...t, isRunning: false }))); // Pause all globally on craving
    setCravingDetected(true);
  };
  const resolveFriction = () => setCravingDetected(false);
  const dismissAlert = () => setActiveAlert(null);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <AppContext.Provider
      value={{
        dp, setDp,
        groups, timers, activeTimerId, setActiveTimerId,
        cravingDetected, activeAlert,
        toggleTimer, resetTimer, adjustTime, startGroup, resetGroup, addOrUpdateTimer, deleteTimer,
        triggerFriction, resolveFriction, dismissAlert, formatTime
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);