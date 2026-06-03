interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  if (messages.length === 0) {
    return (
      <div className="empty-state">
        <img src="/logo.png" alt="Logo" className="empty-state-logo" />
        <div className="empty-state-text">Jimbot 2.0: your highly trained AI Bot</div>
      </div>
    );
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
