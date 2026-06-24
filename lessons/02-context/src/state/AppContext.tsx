import React, { createContext } from 'react';
import { Message } from '../../../common/shared';

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

  // TODO: Define a callback for sending a message — reuse the same simulated-API
  // approach as Lesson 1 (call the API helper with the text and active model, then
  // update message state once the reply comes back)

  //   <AppContext.Provider value={{ context goes here }}>
  //     {children}
  //   </AppContext.Provider>

  // );
}

// TODO: Define and export three hooks here — useChatModel, useChatMessages, and
// useChatActions. Each should read from this context (throwing the same "must be
// used within an AppProvider" error if it's missing — see Lesson 3/4's AppContext for
// the pattern) and return only the slice of state or behavior its name implies.
