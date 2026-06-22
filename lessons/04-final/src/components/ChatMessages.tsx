import { useMessages } from "../data";
import { EmptyState } from '../../../common/components';

export default function ChatMessages() {
  const {data: messages} = useMessages();

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
