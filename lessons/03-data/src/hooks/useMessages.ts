import { useQuery } from '@tanstack/react-query';
import { Message } from '../../../common/shared';

// TODO: Implement the useMessages hook here.
//
// Hint: Use `useQuery` from '@tanstack/react-query' to read the chat messages from the cache.
// This allows different components to access the same list of messages without prop drilling.
//
// Remember to provide a `queryKey` that matches the one used when updating the messages in `useChatMutation`.

export function useMessages() {
  return useQuery<Message[]>({
    queryKey: [], // TODO: give this query a unique key
    queryFn: () => [], // TODO: there's no real server here — what should this resolve to?
    // TODO: anything else needed so `data` isn't `undefined` before this resolves?
  });
}
