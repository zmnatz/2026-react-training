# Lesson 3: Data
In this lesson, you will learn how to structure application state and separate providers from custom hooks.

## Run it
```bash
npm run dev:3
```
The app already runs and renders (Context, the `QueryClientProvider`, and the model dropdown are wired up for you) — sending a message just won't do anything yet until you finish the steps below.

## What to do
1. **`src/api.ts`** — implement `fetchModels()` and `sendMessageApi(text, model)` as simulated async calls (see the `TODO`).
2. **`src/hooks/useMessages.ts`** — implement with `useQuery`, per its `TODO`/hints.
3. **`src/hooks/useChatMutation.ts`** — implement with `useMutation`, using `onMutate` for an optimistic update and `onSuccess` to append the AI reply.
4. **`src/hooks/useModels.ts`** — implement with `useQuery`, fetching from `fetchModels()`.
5. **`src/components/ChatMessages.tsx`** — swap the placeholder `messages: Message[] = []` for `useMessages()` (see its `TODO`).
6. **`src/components/ChatInput.tsx`** — swap in `useChatMutation(model)` and call its `mutate` on submit (see its `TODO`s).
7. **`src/components/ModelPicker.tsx`** — swap the static model list for `useModels()` (see its `TODO`).

`src/state/AppContext.tsx` and `src/main.tsx` are already correct — Context here only holds the selected `model` (client state); the messages and models lists are server state, which is why they move into TanStack Query instead.

## Verify
`npm run dev:3` — sending a message should appear instantly (optimistic update) with the simulated AI reply following after the delay; the model dropdown should be populated from `fetchModels()` instead of a hardcoded list.
