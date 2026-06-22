import { useState, SubmitEvent } from 'react';
import { useChatModel } from '../state/AppContext';
// TODO: Import useChatMutation from '../hooks/useChatMutation' once you've implemented it

export default function ChatInput() {
  const [text, setText] = useState('');
  const [model] = useChatModel();
  // TODO: Replace this with `const { mutate: sendMessage, isPending } = useChatMutation(model);`

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      // TODO: Call the mutation here instead, e.g. sendMessage({ text })
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
