# Lesson 3: Data
In this lesson, you will learn how to structure application state and separate providers from custom hooks.

## Run it
```bash
npm run dev:3
```
The app already runs and renders (Context, the `QueryClientProvider`, and the model dropdown are wired up for you) — sending a message just won't do anything yet until you finish the steps below.

## What to do
1. **`src/state/AppContext.tsx`** — remove `messages` from `AppContextType`, the `useState` in `AppProvider`, and the `<AppContext.Provider value={{ ... }}>` (see its `TODO`s) — it's server state, so it doesn't belong in Context; `useMessages()` (next step) replaces it.
2. **`src/hooks/useMessages.ts`** — implement with `useQuery`, per its `TODO`/hints.
3. **`src/hooks/useChatMutation.ts`** — implement with `useMutation`, using `onMutate` for an optimistic update and `onSuccess` to append the AI reply.
4. **`src/hooks/useModels.ts`** — implement with `useQuery`, fetching from `fetchModels()`.
5. **`src/components/ChatMessages.tsx`** — swap the placeholder `messages: Message[] = []` for `useMessages()` (see its `TODO`).
6. **`src/components/ChatInput.tsx`** — swap in `useChatMutation()` and call its `mutate` on submit (see its `TODO`s).
7. **`src/components/ModelPicker.tsx`** — swap the static model list for `useModels()` (see its `TODO`).

`src/api.ts` is already implemented for you (same simulated `fetchModels()`/`sendMessageApi()` mock as Lessons 1-2) — it's not the focus of this lesson, just the data source your hooks below will call.

`src/main.tsx` is already correct — no changes needed there.

### Where did `messages` and the models list go?
If you're coming from Lesson 2: there, `AppContext` held `model`, `messages`, and `sendMessage`, and `ModelPicker` fetched the available models on its own. Here, only `model` belongs in Context — you remove `messages` yourself (step 1), and the rest were never in Context to begin with:
- **`messages`** — was Context state in Lesson 2 (`useChatMessages()`); you remove it from `AppContext.tsx` in step 1 — it becomes server state owned by `useMessages()` (TanStack Query) instead.
- **the available-models list** — was a local `useState`/`useEffect` fetch inside `ModelPicker` in Lessons 1-2 (never in Context); here it's owned by `useModels()` (TanStack Query) instead.
- **sending a message** — was `useChatActions()`/`sendMessage` from Context in Lesson 2; here it's `useChatMutation()`.

Why: `messages` and the models list both come from/go to an API — that makes them *server* state, not client state, so they don't belong in Context at all. `model` stays in Context because it's a genuine local UI preference with no server involved in choosing it. Actually deleting `messages` from Context yourself (rather than just reading about it) is the point — it's the same client-state-vs-server-state judgment call you'll keep making in real apps.

## Verify
`npm run dev:3` — sending a message should appear instantly (optimistic update) with the simulated AI reply following after the delay; the model dropdown should be populated from `fetchModels()` instead of a hardcoded list.

## Future work: switching to the real API (to match Lesson 4)
Lesson 4 calls a live model provider instead of simulating responses. Once this lesson is solved with simulated data, porting it to the real API needs:

1. **`src/api.ts`** — replace the simulated calls with real ones via the shared `openaiClient` (`lessons/common/utils/openaiClient.ts`):
   - `fetchModels()`: call `openai.models.list()` and strip the `models/` id prefix.
   - `sendMessageApi()`: change its signature from `(text, model)` to `(history: Message[], model: string)`, call `openai.chat.completions.create({ model, messages: history })`, and strip `<thought>`/`<thinking>` tags from the reply content.
2. **`src/hooks/useChatMutation.ts`** — call `useMessages()` internally to read the current history, build `[...messages, userMsg]`, and pass that to `sendMessageApi` (needed for multi-turn context). Add `mutationKey: ['sendMessage']` so other components can observe in-flight status.
3. **`src/components/ModelPicker.tsx`** — add an `isError`/`error` branch so a failed model fetch shows an inline error instead of an empty dropdown.
4. **`src/components/ChatInput.tsx`** — add an `isError`/`error` branch from `useChatMutation` so a failed send shows an inline error.
5. **`src/components/ChatMessages.tsx`** — add a typing indicator while a message is in flight via `useIsMutating({ mutationKey: ['sendMessage'] })`.

Already in place repo-wide, so no extra setup needed: the Vite dev-server proxy for `/api/openai` (`vite.config.ts`, symlinked into this lesson folder), the `.env` symlink for `VITE_OPENAI_API_KEY`, and the `.error-message`/`.typing-indicator` styles in `lessons/common/style.css`.
