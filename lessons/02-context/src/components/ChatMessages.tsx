import { Message } from '../../../common/shared';
import { EmptyState } from '../../../common/components';

// TODO: No props needed
interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  // TODO: Use the useChatMessages hook from '../state/AppContext' to get the message list (remove the prop)

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
