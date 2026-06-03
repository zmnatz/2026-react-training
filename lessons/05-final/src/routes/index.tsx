import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import ModelPicker from '../components/ModelPicker';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
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
  ),
});
