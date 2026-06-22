import { AppProvider } from './state/AppContext';
import ModelPicker from './components/ModelPicker';
import ChatArea from './components/ChatArea';
import { Header } from '../../common/components';
import '../../common/style.css';

export default function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Header />
        <ModelPicker />
        <ChatArea />
      </div>
    </AppProvider>
  );
}
