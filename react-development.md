---
marp: true
theme: uncover
paginate: true
style: |
  section {
    background: #0a192f;
    color: #ffffff;
    font-size: clamp(24px, 3vw, 32px);
    overflow: hidden;
  }
  h1 {
    color: #ffffff;
    background: #0077b6;
    display: inline-block;
    padding: 0 20px;
    border-radius: 10px;
    font-size: clamp(40px, 10vw, 70px);
  }
  h2, h3 {
    color: #00b4d8;
  }
  p, li {
    color: #ffffff;
    overflow-wrap: break-word;
  }
  code, pre {
    font-size: clamp(16px, 1.5vw, 24px);
    background-color: rgba(0, 119, 182, 0.2);
    color: #90e0ef;
    word-break: break-all;
  }
  section.two-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "left right";
    gap: 1.2rem 2rem;
    padding: 70px;
    align-content: center;
  }

  section.two-cols > h1,
  section.two-cols > h2 {
    grid-area: title;
    margin-bottom: 0.4rem;
  }

  section.two-cols > h3:nth-of-type(1) {
    grid-area: left;
    margin: 0;
  }

  section.two-cols > h3:nth-of-type(2) {
    grid-area: right;
    margin: 0;
  }

  section.two-cols > h3:nth-of-type(1) ~ * {
    grid-column: 1;
  }

  section.two-cols > h3:nth-of-type(2),
  section.two-cols > h3:nth-of-type(2) ~ * {
    grid-column: 2;
  }

  section.two-cols > h3:nth-of-type(2) ~ h1,
  section.two-cols > h3:nth-of-type(2) ~ h2 {
    grid-column: 1 / -1;
  }
---


# React Development
## A Guide to Modern Web Applications
---

# Functional Components
<!-- _class: two-cols -->

### Concept

Modern React uses **Functional Components** as the primary way to define UI.

- **Simplicity**: Just JavaScript functions that return JSX.
- **Performance**: Lighter than class components.
- **Hooks**: Allow state and lifecycle management without classes.

### Example

```jsx
import React from 'react';

function Welcome({ name }) {
  const greeting = `Hello, ${name}!`;
  
  return (
    <div className="welcome-container">
      <h1>{greeting}</h1>
      <p>Welcome to the team.</p>
    </div>
  );
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
---
### Core Technologies (continued)

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
<!-- _class: two-cols -->

### Concept

Used for side effects like API calls, subscriptions, or manually changing the DOM.

### Example

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
<!-- _class: two-cols -->

### Concept

Allows sharing state across the component tree without "prop drilling".

### Example

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
<!-- _class: two-cols -->

### Concept

Returns a memoized value. Only recomputes when dependencies change.

### Example

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
<!-- _class: two-cols -->

### Concept

Returns a memoized version of a callback function. Prevents unnecessary re-renders of child components.

### Example

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
<!-- _class: two-cols -->

### TanStack Query (React Query)

- **Server State Management**: Handles caching, loading, and error states automatically.
- **Syncing**: Keeps UI in sync with the server.

### Example

```tsx
const { 
  data, 
  isLoading, 
  isError, 
  error 
} = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 5000,
});
```
---

# Higher-Level Solutions
<!-- _class: two-cols -->

### TanStack Router

- **Type-Safe Routing**: Ensures links and params are typed.
- **Nested Routing**: Simplifies complex layout hierarchies.
- **Built-in Loading/Error States**: First-class support for async data loading.

### Example

```tsx
const route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutComponent,
  loader: async () => {
    const data = await fetchAboutData();
    return data;
  },
});
```
---

# Summary

- **Functional Components** + **Hooks** = Modern React.
- **TS** + **JSX** + **Vite** = Optimal Tooling.
- Use **useMemo/useCallback** for performance.
- Use **TanStack** tools for professional state and routing management.
