export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AI_MODELS = ['gpt-4', 'gpt-3.5-turbo', 'claude-3-opus', 'llama-3'];
