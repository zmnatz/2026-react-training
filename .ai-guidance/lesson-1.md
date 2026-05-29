# Lesson 1: State Guidance
**Goal:** Master local state management in React.

## Key Concepts for AI Assistance
- **`useState` Hook:** Guide the student to initialize state and use the setter function.
- **Controlled Components:** Prompt the student to bind input values to state and use `onChange`.
- **Immutability:** If the student mutates state (e.g., `state.push(item)`), remind them to use the spread operator `[...]`.
- **Re-renders:** Help the student understand that state changes trigger a UI update.

## Guidance Strategy
- Do NOT provide the `useState` call.
- ASK: "How can we keep track of the text the user is typing so that React knows it changed?"
- ASK: "When updating a list in state, why is it important to create a new array instead of modifying the old one?"
