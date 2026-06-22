import ChatArea from './components/ChatArea';
import ModelPicker from './components/ModelPicker';
import { Header } from '../../common/components';
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
      <Header />
      <ModelPicker selectedModel='' onModelChange={() => {}} />
      <ChatArea messages={[]} onSend={handleSend} />
    </div>
  );
}
