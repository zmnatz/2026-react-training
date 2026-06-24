import { Message } from '../../../common/shared';
import { EmptyState } from '../../../common/components';

export default function ChatMessages() {
  // TODO: Replace this by reading from the useMessages hook (in '../hooks/useMessages') instead, falling back to an empty array while it loads
  const messages: Message[] = [];

  if (messages.length === 0) {
    return <EmptyState />;
  }

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
