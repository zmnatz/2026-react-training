import openai from '../../common/utils/openaiClient';
import { Message } from '../../common/shared';

export async function fetchModels(): Promise<string[]> {
  const { data } = await openai.models.list();
  return data.map((model) => model.id.replace(/^models\//, ''));
}

export async function sendMessageApi(history: Message[], model: string): Promise<Message> {
  const completion = await openai.chat.completions.create({
    model,
    messages: history,
  });

  const content = completion.choices[0]?.message?.content ?? '';

  return {
    role: 'assistant',
    content: content.replace(/<(thought|thinking)>[\s\S]*?<\/\1>/g, '').trim(),
  };
}
