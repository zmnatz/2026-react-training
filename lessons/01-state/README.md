# Lesson 1: State
In this lesson, you will learn how to manage local state in React using the `useState` hook.

## Run it
```bash
npm run dev:1
```

## What to do
1. **`src/App.tsx`** — add `useState` for the conversation history (`messages`) and the active model (`model`); update `messages` both when the user sends a message and when the simulated AI response arrives in `sendMessageApi`'s `.then()`.
2. **`src/components/ChatInput.tsx`** — add `useState` for the text field; bind the `<input>`'s `value`/`onChange` to it; on submit, call `onSend(text)` and reset the field back to `''`.

`src/api.ts` is already implemented for you — `sendMessageApi(text)` simulates a network call with `setTimeout` and resolves with the AI's reply. It's not the focus of this lesson, just the same fake delay every lesson uses.

## Verify
Type a message and press Send — it should appear in the chat immediately, followed by a simulated AI reply about a second later. Switching the model in the dropdown shouldn't break anything.
