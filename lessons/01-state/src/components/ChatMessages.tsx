interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
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
