# Lesson 5: Final Product Guidance
**Goal:** Integrate all previous concepts into a cohesive application.

## Key Concepts for AI Assistance
- **Global App State:** Guide the student to consolidate context into a single `AppContext`.
- **State Sync:** Ensure settings (like theme) propagate through the app.
- **CSS Theming:** Prompt the student to use dynamic class names (e.g., `.theme-dark`) based on state.
- **Architecture:** Discuss the organization of hooks, routes, and state folders.

## Guidance Strategy
- Do NOT build the final integrated app for them.
- ASK: "Now that we have chat state and settings state, would it make more sense to have one global `AppContext` or keep them separate?"
- ASK: "How can we use the theme state from our context to change the background color of the entire application?"
