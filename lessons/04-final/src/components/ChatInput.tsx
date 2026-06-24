import { SubmitEvent, useState } from 'react';
import { useChatMutation } from '../hooks/useChatMutation';

export default function ChatInput() {
  const [text, setText] = useState('');
  const { mutate: sendMessage, isPending: isSending, isError, error } = useChatMutation();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() && !isSending) {
      sendMessage({ text });
      setText('');
    }
  };

  return (
    <>
      {isError && <div className="error-message">{error.message}</div>}
      <form
        onSubmit={handleSubmit}
        className="chat-input-form"
      >
        <input
          type="text" autoFocus
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
    </>
  );
}
