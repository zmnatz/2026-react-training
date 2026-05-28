---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# React Development
## A Guide to Modern Web Applications
---

# Functional Components

Modern React uses **Functional Components** as the primary way to define UI.

- **Simplicity**: Just JavaScript functions that return JSX.
- **Performance**: Lighter than class components.
- **Hooks**: Allow state and lifecycle management without classes.

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```
---

# Core Technologies

### TypeScript
- Adds static typing to JavaScript.
- Catches errors at compile time.
- Improves developer experience (DX) with better autocomplete.

### JSX (JavaScript XML)
- Syntax extension that allows writing HTML-like code in JavaScript.
- Compiled into `React.createElement()` calls.

### Vite
- Next-generation frontend tooling.
- Extremely fast Cold Start and Hot Module Replacement (HMR).
- Replaces Create React App (CRA).
---

# React Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from functional components.

- **useState**: Manages local component state.
- **useEffect**: Handles side effects.
- **useContext**: Accesses global state.
- **useMemo / useCallback**: Performance optimization.
---

# useEffect

Used for side effects like API calls, subscriptions, or manually changing the DOM.

```tsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
      
    // Optional: cleanup function
    return () => console.log('Cleaning up...');
  }, []); // Empty array = runs once on mount

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```
---

# useContext

Allows sharing state across the component tree without "prop drilling".

```tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
```
---

# useMemo

Returns a memoized value. Only recomputes when dependencies change.

```tsx
import { useMemo } from 'react';

function ExpensiveComponent({ list }) {
  const sortedList = useMemo(() => {
    console.log('Sorting list...');
    return [...list].sort();
  }, [list]);

  return <ul>{sortedList.map(item => <li key={item}>{item}</li>)}</ul>;
}
```
---

# useCallback

Returns a memoized version of a callback function. Prevents unnecessary re-renders of child components.

```tsx
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []); // Function identity stays the same

  return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});
```
---

# Higher-Level Solutions

As applications grow, basic hooks can become verbose.

### TanStack Query (React Query)
- **Server State Management**: Handles caching, loading, and error states automatically.
- **Syncing**: Keeps UI in sync with the server.

```tsx
const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
});
```
---

# Higher-Level Solutions

### TanStack Router
- **Type-Safe Routing**: Ensures links and params are typed.
- **Nested Routing**: Simplifies complex layout hierarchies.
- **Built-in Loading/Error States**: First-class support for async data loading.

```tsx
const route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutComponent,
});
```
---

# Summary

- **Functional Components** + **Hooks** = Modern React.
- **TS** + **JSX** + **Vite** = Optimal Tooling.
- Use **useMemo/useCallback** for performance.
- Use **TanStack** tools for professional state and routing management.
