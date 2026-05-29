import React, { createContext, useContext, useState } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface AppContextType {
  messages: Message[];
  model: string;
  setModel: (model: string) => void;
  sendMessage: (text: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [model, setModel] = useState<string>('gpt-4');

  const sendMessage = (text: string) => {
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const aiMsg: Message = { role: 'assistant', content: `Response from ${model}: This is a simulated response to "${text}"` };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <AppContext.Provider value={{ messages, model, setModel, sendMessage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useChatMessages() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useChatMessages must be used within an AppProvider');
  return context.messages;
}

export function useChatModel() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useChatModel must be used within an AppProvider');
  return [context.model, context.setModel];
}

export function useChatActions() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useChatActions must be used within an AppProvider');
  return { sendMessage: context.sendMessage };
}
