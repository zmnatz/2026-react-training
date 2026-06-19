---
marp: true
theme: uncover
paginate: true
header: '![w:100](https://www.visionistinc.com/wp-content/uploads/2022/08/logo-white.svg)'
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Raleway:wght@100;200;300&display=swap');

  :root {
    --accent: #00a8e8; --accent-hover: #0077b6;
    --dark: #050a14; --card: #0a1628; --border: #1a2a44;
    --body: #a0aec0; --label: #00f2ff; --muted: #4a5568; --light: #ffffff;
    --green: #22c55e; --red: #ef4444; --yellow: #f5a623;
  }

  section { background: var(--dark); color: var(--light); font-family: 'Raleway', sans-serif; font-weight: 200; padding: 56px 72px; }
  h1 { font-family: 'Outfit'; font-weight: 800; font-size: 3em; color: var(--light); margin: 0; }
  h2 { font-family: 'Raleway'; font-weight: 100; font-size: 1.5em; color: var(--accent); margin: 0; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 1em; color: var(--label); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem; }
  strong { color: var(--light); font-weight: 600; }

  p, li { color: var(--body); font-size: 0.8em; line-height: 1.3; }
  code, pre { font-size: 0.6em; background-color: var(--card); color: #90e0ef; border-radius: 6px; overflow-x: auto; }

  section.lead { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  section.split { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto 1fr; gap: 1rem 2rem; align-items: center; padding: 30px 40px; }
  section.split > h3 { grid-column: 1 / span 2; margin-bottom: 0.5rem; }

  .col { display: flex; flex-direction: column; justify-content: center; }
  .graphic-col { display: flex; justify-content: center; align-items: center; }
  .graphic-col img { max-width: 100%; max-height: 300px; }

  section { overflow: hidden; }
  header { text-align: left; }
---

<!-- _class: lead -->
<!-- _header: '' -->

# React Development
## A Guide to Modern Web Applications

![w:300](https://www.visionistinc.com/wp-content/uploads/2022/08/logo-white.svg)

---

<!-- _class: split -->

### Concept

<div class="col">

Modern React uses **Functional Components** as the primary way to define UI.

- **Simplicity**: Just JavaScript functions.
- **Performance**: Lighter than classes.
- **Hooks**: Lifecycle management.

</div>
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='220' viewBox='0 0 100 220'><rect x='5' y='5' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><path d='M30 25 L70 25' stroke='%2300a8e8' stroke-width='1'/><text x='50' y='30' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Props</text><path d='M50 45 L50 75' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='45 70 50 75 55 70' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='5' y='80' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='105' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Func</text><path d='M50 120 L50 150' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='45 145 50 150 55 145' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='5' y='155' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='180' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>UI</text></svg>"/></div>

---

<!-- _class: split -->

### Core Technologies

<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='220' viewBox='0 0 100 220'><rect x='5' y='5' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='50' y='30' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>TS/JSX</text><path d='M50 45 L50 75' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='45 70 50 75 55 70' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='5' y='80' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='50' y='105' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Vite</text><path d='M50 120 L50 150' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='45 145 50 150 55 145' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='5' y='155' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='50' y='180' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>App</text></svg>"/></div>
<div class="col">

- **TypeScript**: Static typing for reliability.
- **JSX**: HTML-like syntax in JS.
- **Vite**: Ultra-fast development tooling.

</div>

---

# React Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from functional components.

- **useState**: Manages local state.
- **useEffect**: Handles side effects.
- **useContext**: Accesses global state.
- **useMemo / useCallback**: Optimization.

---

<!-- _class: split -->

### useEffect

<div class="col">

Used for side effects like API calls or manual DOM changes.

```tsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(setData);
    
  return () => console.log('Cleanup');
}, []); 
```

</div>
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='220' viewBox='0 0 100 220'><rect x='5' y='5' width='90' height='40' rx='4' fill='%230a1628' stroke='%23f5a623' stroke-width='2'/><text x='50' y='30' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Change</text><path d='M50 45 L50 75' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='45 70 50 75 55 70' stroke='%23f5a623' stroke-width='2' fill='none'/><rect x='5' y='80' width='90' height='40' rx='4' fill='%230a1628' stroke='%23f5a623' stroke-width='2'/><text x='50' y='105' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Effect</text><path d='M50 120 L50 150' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='45 145 50 150 55 145' stroke='%23f5a623' stroke-width='2' fill='none'/><rect x='5' y='155' width='90' height='40' rx='4' fill='%230a1628' stroke='%23f5a623' stroke-width='2'/><text x='50' y='180' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Cleanup</text></svg>"/></div>

---

<!-- _class: split -->

### useContext

<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='220' viewBox='0 0 100 220'><rect x='5' y='5' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='30' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Provider</text><path d='M50 45 L50 75' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='45 70 50 75 55 70' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='5' y='80' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='105' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>State</text><path d='M50 120 L50 150' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='45 145 50 150 55 145' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='5' y='155' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='180' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>UI</text></svg>"/></div>
<div class="col">

Allows sharing state across the tree without "prop drilling".

```tsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

</div>

---

<!-- _class: split -->

### useMemo

<div class="col">

Returns a memoized value. Only recomputes when dependencies change.

```tsx
const sortedList = useMemo(() => {
  return [...list].sort();
}, [list]);
```

</div>
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='220' viewBox='0 0 100 220'><rect x='5' y='5' width='90' height='40' rx='4' fill='%230a1628' stroke='%2322c55e' stroke-width='2'/><text x='50' y='30' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Input</text><path d='M50 45 L50 75' stroke='%2322c55e' stroke-width='2' fill='none'/><polyline points='45 70 50 75 55 70' stroke='%2322c55e' stroke-width='2' fill='none'/><rect x='5' y='80' width='90' height='40' rx='4' fill='%230a1628' stroke='%2322c55e' stroke-width='2'/><text x='50' y='105' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Compute</text><path d='M50 120 L50 150' stroke='%2322c55e' stroke-width='2' fill='none'/><polyline points='45 145 50 150 55 145' stroke='%2322c55e' stroke-width='2' fill='none'/><rect x='5' y='155' width='90' height='40' rx='4' fill='%230a1628' stroke='%2322c55e' stroke-width='2'/><text x='50' y='180' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Memo</text></svg>"/></div>

---

<!-- _class: split -->

### useCallback

<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='220' viewBox='0 0 100 220'><rect x='5' y='5' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='30' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Deps</text><path d='M50 45 L50 75' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='45 70 50 75 55 70' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='5' y='80' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='105' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Fn</text><path d='M50 120 L50 150' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='45 145 50 150 55 145' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='5' y='155' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='180' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Stable</text></svg>"/></div>
<div class="col">

Returns a memoized version of a callback function.

```tsx
const handleClick = useCallback(() => {
  console.log('Clicked!');
}, []);
```

</div>

---

<!-- _class: split -->

### TanStack Query

<div class="col">

Handles caching, loading, and error states automatically.

```tsx
const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
});
```

</div>
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='220' viewBox='0 0 100 220'><rect x='5' y='5' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='50' y='30' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Query</text><path d='M50 45 L50 75' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='45 70 50 75 55 70' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='5' y='80' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='50' y='105' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Fetch</text><path d='M50 120 L50 150' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='45 145 50 150 55 145' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='5' y='155' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='50' y='180' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Cache</text></svg>"/></div>

---

<!-- _class: split -->

### TanStack Router

<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='220' viewBox='0 0 100 220'><rect x='5' y='5' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='30' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>URL</text><path d='M50 45 L50 75' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='45 70 50 75 55 70' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='5' y='80' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='105' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>Match</text><path d='M50 120 L50 150' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='45 145 50 150 55 145' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='5' y='155' width='90' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='50' y='180' font-family='Arial' font-size='10' fill='%23ffffff' text-anchor='middle'>View</text></svg>"/></div>
<div class="col">

Type-safe routing and nested layouts.

```tsx
const route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutComponent,
});
```

</div>

---

# Summary

- **Functional Components** + **Hooks** = Modern React.
- **TS** + **JSX** + **Vite** = Optimal Tooling.
- Use **useMemo/useCallback** for performance.
- Use **TanStack** tools for professional state and routing management.
```