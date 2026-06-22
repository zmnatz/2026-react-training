import React, { createContext, useContext, useState } from 'react';

export interface AppContextType {
  model: string;
  setModel: (model: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [model, setModel] = useState<string>('gpt-4');

  return (
    <AppContext.Provider value={{ model, setModel }}>
      {children}
    </AppContext.Provider>
  );
}

export function useChatModel() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useChatModel must be used within an AppProvider');
  return [context.model, context.setModel] as const;
}
