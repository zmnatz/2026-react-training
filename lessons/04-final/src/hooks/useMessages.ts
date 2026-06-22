import { useQuery } from '@tanstack/react-query';
import { Message } from '../state/app/AppContext';

export function useMessages() {
  return useQuery<Message[]>({
    queryKey: ['messages'],
    queryFn: () => [], // Initial state is empty
    initialData: [],
  });
}
