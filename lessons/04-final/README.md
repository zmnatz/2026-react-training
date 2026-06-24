# Lesson 4: Final Product

This isn't an exercise — it's the finished, fully-integrated app. There are no `TODO`s and nothing to implement here.

Unlike Lesson 3, this app talks to a real model provider through the shared OpenAI-compatible client (`lessons/common/utils/openaiClient.ts`) instead of simulated API calls — the model picker is populated from a live `models.list()` call, and sending a message makes a real `chat.completions.create()` call.

## Run it
1. Copy `.env.example` to `.env` at the repo root and set `VITE_OPENAI_API_KEY` to a valid key for the provider configured in `openaiClient.ts`.
2. `npm run dev:4`

If the key is missing or invalid, the model picker and chat input will show an inline error instead of silently failing.

Read through it as a reference for how the pieces from Lessons 1-3 (state, context, and data fetching) come together in one cohesive application:

- A single `AppContext` consolidating app-wide settings.
- `src/api.ts` — the real API calls (`fetchModels`, `sendMessageApi`) that wrap the OpenAI client.
- Custom hooks (`useMessages`, `useChatMutation`, `useModels`) wrapping TanStack Query around those API calls so components stay simple.
- `useChatMutation` composes `useMessages` to send the full conversation history with each request, so the model has context from earlier turns.
- Components composed from that shared state instead of prop drilling.
