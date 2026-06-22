import { useState } from 'react';
import ModelPicker from './components/ModelPicker';
import ChatArea from './components/ChatArea';
import { Header } from '../../common/components';
import { AppProvider } from './state/AppContext';
import '../../common/style.css';

export default function App() {
  // TODO: Move these things to AppContext Provider
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
      {/* TODO: Wrap with AppProvider */}
      <Header />
      <ModelPicker selectedModel={model} onModelChange={setModel} />
      {/* TODO: Remove these props — Components should read from AppContext instead of having state drilled through props */}
      <ChatArea messages={messages} onSend={handleSend} />
      {/* TODO: Wrap with AppProvider */}
    </div>
  );
}
