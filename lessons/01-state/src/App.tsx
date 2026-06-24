import ChatArea from './components/ChatArea';
import ModelPicker from './components/ModelPicker';
import { Header } from '../../common/components';
import { sendMessageApi } from './api';
import '../../common/style.css';

export default function App() {
  // TODO: Define state to track the conversation history and the active AI model

  const handleSend = (text: string) => {
    const userMsg = { role: 'user' as const, content: text };
    // TODO: Update the conversation history when a user sends a message

    sendMessageApi(text).then((aiMsg) => {
      // TODO: Update the conversation history when the AI responds
    });
  };

  return (
    <div className="app-container">
      <Header />
      {/* TODO: Pass your model/messages state into these instead of these placeholder values */}
      <ModelPicker selectedModel='' onModelChange={() => {}} />
      <ChatArea messages={[]} onSend={handleSend} />
    </div>
  );
}
