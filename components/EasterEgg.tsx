
import React, { useState, useEffect } from 'react';

const EasterEgg: React.FC = () => {
  const [input, setInput] = useState('');
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newInput = (input + e.key).slice(-8).toLowerCase();
      setInput(newInput);
      if (newInput === 'arquando') {
        setRevealed(true);
      }
    };

    const handleCustomTrigger = () => {
      setRevealed(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('trigger-arquando', handleCustomTrigger);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('trigger-arquando', handleCustomTrigger);
    };
  }, [input]);

  if (!revealed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in duration-500">
      <div className="text-center p-12 border border-zinc-800 bg-zinc-900/50 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-sm mx-4">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white text-3xl font-bold">
          ?
        </div>
        <h2 className="text-3xl font-black mb-2 text-white">Shadow Handle</h2>
        <p className="text-zinc-500 mb-8 text-sm">You've found the secondary channel.</p>
        
        <div className="space-y-4">
          <a 
            href="https://instagram.com/arquando" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 bg-white text-black font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            @arquando
          </a>
          <button 
            onClick={() => setRevealed(false)}
            className="text-zinc-600 text-xs uppercase tracking-widest hover:text-zinc-400 transition-colors"
          >
            Close transmission
          </button>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
