import { ChatProvider } from './state/chat';
import ModelPicker from './components/ModelPicker';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './style.css';

export default function App() {
  return (
    <ChatProvider>
      <div className="app-container">
        <ModelPicker />
        <div className="chat-area">
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
    </ChatProvider>
  );
}
