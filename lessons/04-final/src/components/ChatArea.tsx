import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

export default function ChatArea() {
  return (
    <div className="chat-area">
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
