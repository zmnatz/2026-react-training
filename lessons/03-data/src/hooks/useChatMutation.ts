// Implement the useChatMutation hook here.
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
