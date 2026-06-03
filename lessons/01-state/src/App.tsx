import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import ModelPicker from './components/ModelPicker';
import '../../common/style.css';

export default function App() {
  // TODO: Define state to track the conversation history and the active AI model

  const handleSend = (text: string) => {
    const userMsg = { role: 'user' as const, content: text };
    // TODO: Update the conversation history when a user sends a message

    // Simulate AI response
    setTimeout(() => {
      const aiMsg = { role: 'assistant' as const, content: `This is a simulated response to "${text}"` };
      // TODO: Update the conversation history when the AI responds
    }, 1000);
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="brand-name">Jimbot 2.0: your highly trained AI Bot</div>
      </header>
      <ModelPicker selectedModel='' onModelChange={() => {}} />
      <div className="chat-area">
        <ChatMessages messages={[]} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
