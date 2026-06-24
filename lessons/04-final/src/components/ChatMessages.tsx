import { useIsMutating } from '@tanstack/react-query';
import { useMessages } from "../hooks/useMessages";
import { EmptyState } from '../../../common/components';

export default function ChatMessages() {
  const {data: messages} = useMessages();
  const isSending = useIsMutating({ mutationKey: ['sendMessage'] }) > 0;

  if (messages.length === 0 && !isSending) {
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
      {isSending && (
        <div className="message assistant typing-indicator">
          <span className="typing-dot" />
          <span className="typing-dot" />
          <span className="typing-dot" />
        </div>
      )}
    </div>
  );
}
