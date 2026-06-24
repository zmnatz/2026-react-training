# Lesson 4: Final Product Guidance

**Goal:** Read and understand a finished, fully-integrated application — not build one.

This lesson has no tasks and no `TODO`s. It's the reference solution showing how state, context, and data fetching from Lessons 1-3 combine into one app.

## Key Concepts for AI Assistance
- **Global App State:** Explain how settings are consolidated into a single `AppContext` instead of several separate ones.
- **State Sync:** Point out how state set in one part of the app (e.g. the model picker) flows to others that read from the same context.
- **Custom Hooks:** Walk through how `useMessages`, `useChatMutation`, and `useModels` wrap TanStack Query so components stay simple.
- **Architecture:** Discuss why hooks, state, and components are organized into separate folders (`api.ts` for the OpenAI calls, `hooks/` for the TanStack Query wrappers).
- **Real API Integration:** Unlike Lesson 3, `api.ts` calls the real OpenAI-compatible client (`models.list`, `chat.completions.create`) instead of simulated promises — and `useChatMutation` sends the full message history for multi-turn context.

## Guidance Strategy
- This is a read-and-explain lesson — there is nothing for the student to build.
- If asked "why is it structured this way," compare it back to the patterns from Lessons 1-3 (state, context, data).
