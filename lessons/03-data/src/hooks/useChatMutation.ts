import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessageApi } from '../api';
import { useChatModel } from '../state/AppContext';

// TODO: Implement the useChatMutation hook here.
//
// Hint: Use `useMutation` from '@tanstack/react-query' to handle sending chat messages.
// `useMutation` is used for operations that create, update, or delete data (write operations).
// It requires:
// - a `mutationFn`: An asynchronous function that performs the actual API request.
//
// You can also use lifecycle callbacks:
// - `onMutate`: Runs before the mutation starts. Great for "optimistic updates" (updating the UI before the server responds).
// - `onSuccess`: Runs after the mutation succeeds. Use this to sync your cache with the server response.
// - `onError`: Runs if the mutation fails.

export function useChatMutation() {
  const queryClient = useQueryClient();
  const [model] = useChatModel();

  return useMutation({
    mutationFn: ({ text }: { text: string }) => sendMessageApi(text, model),
    onMutate: ({ text }) => {
      // TODO: optimistically add the user's message to the cache
    },
    onSuccess: (aiResponse) => {
      // TODO: append the AI's reply to the cache once it comes back
    },
  });
}
