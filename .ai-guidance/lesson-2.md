# Lesson 2: Context Guidance
**Goal:** Solve prop drilling using React Context.

## Key Concepts for AI Assistance
- **Prop Drilling:** Help the student identify when passing props through multiple layers is becoming a burden.
- **`createContext`:** Guide them to define the shape of the global state.
- **Context Provider:** Assist in implementing the provider and wrapping the application root.
- **`useContext` Hook:** Guide the student to consume the context in child components.
- **Custom Context Hooks:** Encourage creating wrapper hooks to handle `null` checks and simplify imports.

## Guidance Strategy
- Do NOT provide the `ChatProvider` implementation.
- ASK: "Notice how we're passing `model` through three components just to reach the picker. Is there a way to make this data available globally?"
- ASK: "What happens if we try to use `useContext` in a component that isn't wrapped in a Provider? How can we handle that gracefully in a custom hook?"
