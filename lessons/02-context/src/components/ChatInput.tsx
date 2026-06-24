import { useState, SubmitEvent } from 'react';

// TODO: No props needed
interface ChatInputProps {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState('');
  // TODO: Use the useChatActions hook from '../state/AppContext' to get the send-message function (remove the prop)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="chat-input-form"
    >
      <input 
        type="text" autoFocus 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type a message..." 
        className="chat-input"
      />
      <button type="submit" className="chat-submit-btn">Send</button>
    </form>
  );
}
