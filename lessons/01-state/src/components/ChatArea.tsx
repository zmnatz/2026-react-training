import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { Message } from '../../../common/shared';

interface ChatAreaProps {
  messages: Message[];
  onSend: (text: string) => void;
}

export default function ChatArea({ messages, onSend }: ChatAreaProps) {
  return (
    <div className="chat-area">
      <ChatMessages messages={messages} />
      <ChatInput onSend={onSend} />
    </div>
  );
}
