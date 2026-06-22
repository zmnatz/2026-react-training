import { AppProvider } from './state/app/AppContext';
import ModelPicker from './components/ModelPicker';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import '../../common/style.css';

export default function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <header className="header">
          <img src="/logo.png" alt="Logo" className="logo" />
          <div className="brand-name">Jimbot 2.0: your highly trained AI Bot</div>
        </header>
        <ModelPicker />
        <div className="chat-area">
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
    </AppProvider>
  );
}
