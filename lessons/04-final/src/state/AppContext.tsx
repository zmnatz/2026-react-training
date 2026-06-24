import React, { createContext, useContext, useState } from 'react';

export interface AppContextType {
  model: string;
  setModel: (model: string) => void;
}

const DEFAULT_MODEL = 'gemma-4-26b-a4b-it';

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [model, setModel] = useState<string>(DEFAULT_MODEL);

  return (
    <AppContext.Provider value={{ model, setModel }}>
      {children}
    </AppContext.Provider>
  );
}

export function useChatModel(): [string, (model: string) => void] {
  const context = useContext(AppContext);
  if (!context) throw new Error('useChatModel must be used within an AppProvider');
  return [context.model, context.setModel];
}
