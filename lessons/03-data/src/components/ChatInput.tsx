import { useState, SubmitEvent } from 'react';
import { useChatActions } from '../state/chat';

export default function ChatInput() {
  const [text, setText] = useState('');
  const { sendMessage } = useChatActions();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      sendMessage(text);
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
