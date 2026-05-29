import { SubmitEvent, useState } from 'react';
import { useChatMutation } from '../hooks/useChatMutation';
import { useChatModel } from '../state/chat';

export default function ChatInput() {
  const [text, setText] = useState('');
  const [model] = useChatModel();
  const { mutate: sendMessage, isPending: isSending } = useChatMutation(model);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() && !isSending) {
      sendMessage({ text });
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
        placeholder={isSending ? "Sending..." : "Type a message..."} 
        className="chat-input"
        disabled={isSending}
      />
      <button type="submit" className="chat-submit-btn" disabled={isSending}>
        {isSending ? '...' : 'Send'}
      </button>
    </form>
  );
}
