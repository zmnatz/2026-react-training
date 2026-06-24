import { useState, SubmitEvent } from 'react';
// TODO: Import useChatMutation from '../hooks/useChatMutation' once you've implemented it

export default function ChatInput() {
  const [text, setText] = useState('');
  // TODO: Replace this by calling the useChatMutation hook, and pull out its mutate function and pending status

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      // TODO: Call the mutation here instead, passing along the current input text
      setText('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="chat-input-form"
    >
      {/* TODO: Consider disabling the input/button while the mutation is pending */}
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
