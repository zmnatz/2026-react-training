import React, { createContext, useContext, useState } from 'react';
import { Message } from '../../../common/shared';

export interface AppContextType {
  model: string;
  setModel: (model: string) => void;
  // TODO: Remove `messages` — it's server state (it comes from/goes to an API), so it
  // doesn't belong in Context. It moves to the useMessages() hook in src/hooks/ instead.
  messages: Message[];
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [model, setModel] = useState<string>('gemma-4-26b-a4b-it');
  // TODO: Remove this state too, along with `messages` from AppContextType and the
  // value below — see the note above.
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <AppContext.Provider value={{ model, setModel, messages }}>
      {children}
    </AppContext.Provider>
  );
}

export function useChatModel() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useChatModel must be used within an AppProvider');
  return [context.model, context.setModel] as const;
}
