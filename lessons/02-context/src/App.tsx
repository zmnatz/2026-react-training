import { useState } from 'react';
import ModelPicker from './components/ModelPicker';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import '../../common/style.css';

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
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="brand-name">Jimbot 2.0: your highly trained AI Bot</div>
      </header>
      <ModelPicker selectedModel={model} onModelChange={setModel} />
      <div className="chat-area">
        <ChatMessages messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
