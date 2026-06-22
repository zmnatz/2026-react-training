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

## Lesson 4: Final Product
**Goal:** Read and understand a finished, fully-integrated application — there are no tasks to implement.

**Key Skills/Concepts:**
- **Global App State:** Consolidating shared state (e.g. the selected model) into a single `AppContext`.
- **Custom Hooks:** Seeing how `useMessages`, `useChatMutation`, and `useModels` wrap TanStack Query so components stay simple.
- **Project Architecture:** Organizing hooks, state, and components into a maintainable folder structure.
