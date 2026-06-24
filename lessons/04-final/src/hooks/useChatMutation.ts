import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessageApi } from '../api';
import { useMessages } from './useMessages';
import { useChatModel } from '../state/AppContext';
import { Message } from '../../../common/shared';

export function useChatMutation() {
  const queryClient = useQueryClient();
  const { data: messages = [] } = useMessages();
  const [model] = useChatModel();

  return useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: ({ text }: { text: string }) => {
      const userMsg: Message = { role: 'user', content: text };
      return sendMessageApi([...messages, userMsg], model);
    },
    onMutate: ({ text }) => {
      const userMsg: Message = { role: 'user', content: text };
      queryClient.setQueryData<Message[]>(['messages'], (old) => [...(old ?? []), userMsg]);
    },
    onSuccess: (aiResponse) => {
      queryClient.setQueryData<Message[]>(['messages'], (old) => [...(old ?? []), aiResponse]);
    },
  });
}
