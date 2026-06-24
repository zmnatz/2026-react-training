export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AI_MODELS = ['gemma-4-26b-a4b-it', 'gemma-4-9b-it', 'gemma-3-27b-it', 'gemma-3-12b-it'];
