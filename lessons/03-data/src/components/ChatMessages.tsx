import { useChatMessages } from '../state/chat';

export default function ChatMessages() {
  const messages = useChatMessages();

  if (messages.length === 0) return null;

  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div 
          key={index} 
          className={`message ${msg.role === 'user' ? 'user' : 'assistant'}`}
        >
          <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
        </div>
      ))}
    </div>
  );
}
