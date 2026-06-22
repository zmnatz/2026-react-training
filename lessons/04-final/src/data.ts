import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Message, AI_MODELS } from '../../common/shared';

export async function fetchModels(): Promise<string[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return AI_MODELS;
}

export async function sendMessageApi(text: string, model: string): Promise<Message> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    role: 'assistant',
    content: `Response from ${model}: This is a simulated response to "${text}"`
  };
}

export function useMessages() {
  return useQuery<Message[]>({
    queryKey: ['messages'],
    queryFn: () => [], // Initial state is empty
    initialData: [],
  });
}

export function useModels() {
  return useQuery({
    queryKey: ['models'],
    queryFn: fetchModels,
  });
}

export function useChatMutation(model: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ text }: { text: string }) => sendMessageApi(text, model),
    onMutate: async ({ text }) => {
      const userMsg: Message = { role: 'user', content: text };
      queryClient.setQueryData<Message[]>(['messages'], (old) => [...(old ?? []), userMsg]);
    },
    onSuccess: (aiResponse) => {
      queryClient.setQueryData<Message[]>(['messages'], (old) => [...(old ?? []), aiResponse]);
    },
  });
}
