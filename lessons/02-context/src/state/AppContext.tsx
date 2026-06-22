import React, { createContext } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Define the shape of the data you want to share globally
export interface AppContextType {
  messages: Message[];
  model: string;
  setModel: (model: string) => void;
  sendMessage: (text: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // TODO: Model state goes here
  // TODO: Message state goes here

  // TODO: Define callback function for sending a message

  //   <AppContext.Provider value={{ context goes here }}>
  //     {children}
  //   </AppContext.Provider>

  // );
}
