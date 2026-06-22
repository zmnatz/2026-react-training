# Lesson 2: Context
In this lesson, you will learn how to avoid prop drilling by using React Context to share state globally.

## Run it
```bash
npm run dev:2
```

## What to do
1. **`src/state/AppContext.tsx`** — inside `AppProvider`, add `useState` for `model` and `messages`, implement `sendMessage(text)` (same append-then-simulate-a-reply logic as Lesson 1), and provide it all via `<AppContext.Provider value={{ ... }}>`.
2. **`src/App.tsx`** — wrap the app in `<AppProvider>`; stop passing `messages`/`onSend`/`selectedModel`/`onModelChange` as props once the components below read from context instead.
3. **`src/components/ChatInput.tsx`, `ChatMessages.tsx`, `ModelPicker.tsx`, `ChatArea.tsx`** — each has a `// TODO: No props needed` on its props interface and a matching `// TODO:` telling you which context hook to call instead (`useChatActions`, `useChatMessages`, `useChatModel`). `ChatArea` is the prop-drilling demo from Lesson 1 made literal — it's a middle layer that forwards `messages`/`onSend` to its children for no reason other than that they need it; once everything reads from context, it shouldn't need those props passed through it either.

## Verify
Same chat behavior as Lesson 1, but `App.tsx` passes zero props into `ModelPicker`/`ChatArea`, and `ChatArea` passes zero props into `ChatMessages`/`ChatInput`.
