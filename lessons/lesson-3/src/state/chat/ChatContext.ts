import { createContext } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatContextType {
  messages: Message[];
  model: string;
  setModel: (model: string) => void;
  sendMessage: (text: string) => void;
}

export const ChatContext = createContext<ChatContextType | null>(null);
