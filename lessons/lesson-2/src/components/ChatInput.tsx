import { useState, SubmitEvent } from 'react';

interface ChatInputProps {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState('');

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
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type a message..." 
        className="chat-input"
      />
      <button type="submit" className="chat-submit-btn">Send</button>
    </form>
  );
}
