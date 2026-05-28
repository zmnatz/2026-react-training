import React, { useState } from 'react';
import { ChatContext, Message } from './ChatContext';

export function ChatProvider({ children }: { children: React.ReactNode }) {
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
    <ChatContext.Provider value={{ messages, model, setModel, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
