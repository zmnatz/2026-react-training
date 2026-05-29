# Lesson 3: Data Guidance
**Goal:** Handle asynchronous data and server state using TanStack Query.

## Key Concepts for AI Assistance
- **Async/Await:** Ensure the student understands how to handle simulated API promises.
- **`useQuery`:** Guide the student to use unique `queryKey`s and `queryFn`s for data fetching.
- **`useMutation`:** Help implement data updates and lifecycle callbacks (`onMutate`, `onSuccess`).
- **Cache Manipulation:** Introduce `queryClient.setQueryData` for optimistic UI updates.

## Guidance Strategy
- Do NOT write the API functions or the `useQuery` logic.
- ASK: "When we send a message, the UI waits for the server. How can we make the message appear immediately while the request is still pending?"
- ASK: "How does TanStack Query know when to refetch data or when to use the cached version?"
