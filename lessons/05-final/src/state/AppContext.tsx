import React, { createContext, useContext, useState } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface AppContextType {
  model: string;
  setModel: (model: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [model, setModel] = useState<string>('gpt-4');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <AppContext.Provider value={{ model, setModel, theme, setTheme }}>
      <div className={`theme-${theme}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
