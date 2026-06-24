import { AI_MODELS, Message } from '../../common/shared';

export function fetchModels(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(AI_MODELS), 500);
  });
}

export function sendMessageApi(text: string): Promise<Message> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ role: 'assistant', content: `This is a simulated response to "${text}"` });
    }, 1000);
  });
}
