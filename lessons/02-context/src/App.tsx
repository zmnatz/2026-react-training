import { useState } from 'react';
import ModelPicker from './components/ModelPicker';
import ChatArea from './components/ChatArea';
import { Header } from '../../common/components';
import { AppProvider } from './state/AppContext';
import { sendMessageApi } from './api';
import '../../common/style.css';

export default function App() {
  // TODO: Move these things to AppContext Provider
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [model, setModel] = useState<string>('gemma-4-26b-a4b-it');

  const handleSend = (text: string) => {
    const userMsg = { role: 'user' as const, content: text };
    setMessages(prev => [...prev, userMsg]);

    sendMessageApi(text, model).then((aiMsg) => {
      setMessages(prev => [...prev, aiMsg]);
    });
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
