# Lessons Guidance Guide

This document provides a set of skills and concepts for each lesson. These should be used by an AI assistant to guide students toward the correct implementation without giving away the direct code answers.

## Lesson 1: State
**Goal:** Master local state management in React.

**Key Skills/Concepts:**
- **`useState` Hook:** Understanding how to initialize state and use the setter function.
- **Controlled Components:** How to bind an input field's value to a state variable and update it via `onChange`.
- **Immutability in State:** Understanding why you must create a new array/object (e.g., using the spread operator `[...]`) instead of mutating the existing state.
- **Component Lifecycle:** Recognizing when a state update triggers a re-render.

## Lesson 2: Context
**Goal:** Solve prop drilling using React Context.

**Key Skills/Concepts:**
- **Prop Drilling:** Identifying when passing props through multiple layers becomes inefficient.
- **`createContext`:** Defining the shape of the global state.
- **Context Provider:** Implementing a provider component that wraps the app and provides a `value`.
- **`useContext` Hook:** Consuming the context value within a child component.
- **Custom Context Hooks:** Creating wrapper hooks to encapsulate `useContext` calls, provide default error messages for missing providers, and simplify component code.

## Lesson 3: Data
**Goal:** Handle asynchronous data and server state using TanStack Query.

**Key Skills/Concepts:**
- **Async/Await:** Handling promises for simulated API calls.
- **TanStack Query Basics:** Understanding the difference between "server state" and "client state".
- **`useQuery`:** Implementing data fetching with unique `queryKey`s and `queryFn`s.
- **`useMutation`:** Handling data modifications and using lifecycle callbacks like `onMutate` and `onSuccess`.
- **Cache Manipulation:** Using `queryClient.setQueryData` for optimistic updates to make the UI feel instantaneous.

## Lesson 4: Router
**Goal:** Implement navigation and routing using TanStack Router.

**Key Skills/Concepts:**
- **SPA Routing:** Understanding how to change the URL without reloading the page.
- **Route Tree:** Configuring a root route and nesting child routes.
- **`<Link>` vs `<a>`:** Using router-specific links to prevent full page reloads.
- **`<Outlet />`:** Implementing a placeholder for child route components.
- **Admin Pages:** Designing a separate route for application settings.

## Lesson 5: Final Product
**Goal:** Integrate all previous concepts into a cohesive application.

**Key Skills/Concepts:**
- **Global App State:** Consolidating various contexts into a single `AppContext` for application-wide settings (theme, model).
- **State Synchronization:** Ensuring settings changed in the admin route are reflected in the chat route.
- **Theming:** Implementing a dynamic theme (light/dark) using CSS classes driven by global state.
- **Project Architecture:** Organizing hooks, state, and routes for a maintainable codebase.
