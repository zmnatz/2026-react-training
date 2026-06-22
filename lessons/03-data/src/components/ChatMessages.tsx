import { Message } from '../../../common/shared';
import { EmptyState } from '../../../common/components';

export default function ChatMessages() {
  // TODO: Replace this with `const { data: messages = [] } = useMessages();` from '../hooks/useMessages'
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
