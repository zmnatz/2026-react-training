import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessageApi } from '../api';
import { Message } from '../state/AppContext';

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