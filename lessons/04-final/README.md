# Lesson 4: Final Product

This isn't an exercise — it's the finished, fully-integrated app. There are no `TODO`s and nothing to implement here.

Read through it as a reference for how the pieces from Lessons 1-3 (state, context, and data fetching) come together in one cohesive application:

- A single `AppContext` consolidating app-wide settings.
- Custom hooks (`useMessages`, `useChatMutation`, `useModels`) wrapping TanStack Query for data fetching.
- Components composed from that shared state instead of prop drilling.
