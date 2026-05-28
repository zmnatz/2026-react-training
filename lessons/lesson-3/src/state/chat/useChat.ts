import { useContext } from 'react';
import { ChatContext } from './ChatContext';

export function useChatMessages() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChatMessages must be used within a ChatProvider');
  return context.messages;
}

export function useChatModel() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChatModel must be used within a ChatProvider');
  return [context.model, context.setModel];
}

export function useChatActions() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChatActions must be used within a ChatProvider');
  return { sendMessage: context.sendMessage };
}
