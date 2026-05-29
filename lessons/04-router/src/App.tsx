import { AppProvider } from './state/app/AppContext';
import ModelPicker from './components/ModelPicker';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './style.css';

export default function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <ModelPicker />
        <div className="chat-area">
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
    </AppProvider>
  );
}
