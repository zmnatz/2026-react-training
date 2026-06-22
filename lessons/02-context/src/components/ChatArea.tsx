import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { Message } from '../../../common/shared';

// TODO: No props needed
interface ChatAreaProps {
  messages: Message[];
  onSend: (text: string) => void;
}

export default function ChatArea({ messages, onSend }: ChatAreaProps) {
  // TODO: Remove parameters — ChatMessages and ChatInput should read from AppContext instead of having these props drilled through ChatArea
  return (
    <div className="chat-area">
      <ChatMessages messages={messages} />
      <ChatInput onSend={onSend} />
    </div>
  );
}
