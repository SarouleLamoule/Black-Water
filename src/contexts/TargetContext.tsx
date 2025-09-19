'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface TargetContextType {
  score: number;
  incrementScore: () => void;
  resetScore: () => void;
}

const TargetContext = createContext<TargetContextType | undefined>(undefined);

export function TargetProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore((prev) => Math.min(prev + 1, 50));
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <TargetContext.Provider value={{ score, incrementScore, resetScore }}>
      {children}
    </TargetContext.Provider>
  );
}

export function useTarget() {
  const context = useContext(TargetContext);
  if (context === undefined) {
    throw new Error('useTarget must be used within a TargetProvider');
  }
  return context;
}
