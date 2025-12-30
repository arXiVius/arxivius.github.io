
import React, { useState, useEffect } from 'react';

interface AgeCounterProps {
  birthDate: string;
}

const AgeCounter: React.FC<AgeCounterProps> = ({ birthDate }) => {
  const [age, setAge] = useState<string>('0.0000000000');

  useEffect(() => {
    const birthTime = new Date(birthDate).getTime();
    
    const updateAge = () => {
      const now = Date.now();
      const ageInYears = (now - birthTime) / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(10));
    };

    const interval = setInterval(updateAge, 50);
    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div className="flex flex-col items-start">
      <span className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Current Lifetime</span>
      <div className="text-2xl md:text-3xl font-bold mono text-zinc-100 tabular-nums">
        {age} <span className="text-sm font-normal text-zinc-500">years</span>
      </div>
    </div>
  );
};

export default AgeCounter;
