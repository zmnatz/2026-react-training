import { SubmitEvent } from 'react';

interface ChatInputProps {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  // TODO: Manage the state for the text input field

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement the logic to send the current input text and reset the field
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="chat-input-form"
    >
      <input 
        type="text" 
        // TODO: Link the input element to the state
        placeholder="Type a message..." 
        className="chat-input"
      />
      <button type="submit" className="chat-submit-btn">Send</button>
    </form>
  );
}