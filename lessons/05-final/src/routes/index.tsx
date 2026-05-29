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
      <ModelPicker />
      <div className="chat-area">
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  ),
});
