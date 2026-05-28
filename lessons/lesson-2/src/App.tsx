import { useState } from 'react';
import ModelPicker from './components/ModelPicker';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './style.css';

export default function App() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [model, setModel] = useState<string>('gpt-4');

  const handleSend = (text: string) => {
    const userMsg = { role: 'user' as const, content: text };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const aiMsg = { role: 'assistant' as const, content: `Response from ${model}: This is a simulated response to "${text}"` };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div className="app-container">
      <ModelPicker selectedModel={model} onModelChange={setModel} />
      <div className="chat-area">
        <ChatMessages messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
