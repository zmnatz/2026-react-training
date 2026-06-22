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
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 1em; color: var(--label); letter-spacing: 0.02em; margin-bottom: 1rem; }
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
## A Crash Course for Modern Web Applications

![w:300](https://www.visionistinc.com/wp-content/uploads/2022/08/logo-white.svg)

---

# What to Expect

A high-level tour of front-end concepts and terms — enough to recognize them when searching for how to implement things.

- **Is**: A map of the landscape and its vocabulary.
- **Is**: A foundation for what to search for next.
- **Isn't**: A deep dive — each topic here has far more depth than we can cover today.
- **Isn't**: A replacement for hands-on practice.

---

<!-- _class: split -->

### Concept

<div class="col">

Modern React uses **Functional Components** as the primary way to define UI.

- **Simplicity**: Just JavaScript functions.
- **Performance**: DOM only changes when necessary.
- **Hooks**: Lifecycle management.

</div>
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='545' height='150' viewBox='0 0 545 150'><rect x='10' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='65.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Props + State</text><path d='M120 45.0 L145 45.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='138 40.0 145 45.0 138 50.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='145' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='200.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Component()</text><path d='M255 45.0 L280 45.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='273 40.0 280 45.0 273 50.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='280' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='335.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Returns JSX</text><path d='M390 45.0 L415 45.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='408 40.0 415 45.0 408 50.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='415' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='470.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>DOM / UI</text><path d='M470.0 70 L470.0 115 L65.0 115 L65.0 70' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='60.0 77 65.0 70 70.0 77' stroke='%23f5a623' stroke-width='2' fill='none'/><text x='267.5' y='137' font-family='Arial' font-size='11' fill='%23f5a623' text-anchor='middle'>setState() triggers a re-render</text></svg>"/></div>

---

<!-- _class: split -->

### Core Technologies

<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='545' height='150' viewBox='0 0 545 150'><rect x='10' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='65.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>TSX Source</text><path d='M120 45.0 L145 45.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='138 40.0 145 45.0 138 50.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='145' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='200.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Vite (esbuild)</text><path d='M255 45.0 L280 45.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='273 40.0 280 45.0 273 50.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='280' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='335.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Browser Modules</text><path d='M390 45.0 L415 45.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='408 40.0 415 45.0 408 50.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='415' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='470.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Rendered App</text><path d='M470.0 70 L470.0 115 L65.0 115 L65.0 70' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='60.0 77 65.0 70 70.0 77' stroke='%23f5a623' stroke-width='2' fill='none'/><text x='267.5' y='137' font-family='Arial' font-size='11' fill='%23f5a623' text-anchor='middle'>Save file: instant HMR update, no reload</text></svg>"/></div>
<div class="col">

- **TypeScript**: Static typing for reliability.
- **JSX**: HTML-like syntax in JS.
- **Vite**: Ultra-fast development tooling.

</div>

---

<!-- _class: split -->

### JSX

<div class="col">

- **Syntax Extension**: Write markup directly inside JavaScript.
- **Expressions**: Embed any JS value with `{ }`.
- **Compiles Away**: Babel/TS turn JSX into `React.createElement()` calls at build time.

</div>
<div class="col">

```tsx
function TodoList({ items }: { items: string[] }) {
  return (
    <ul className="todo-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      {items.length === 0 && <li>No todos yet</li>}
    </ul>
  );
}
```

</div>

---

<!-- _class: split -->

### TypeScript

<div class="col">

- **Static Typing**: Catch type errors before you run the code.
- **Typed Props**: Define component contracts with `interface` or `type`.
- **Better DX**: Autocomplete, inline docs, and safer refactors.

</div>
<div class="col">

```tsx
interface UserCardProps {
  name: string;
  age: number;
  onSelect?: (id: string) => void;
}

function UserCard({ name, age, onSelect }: UserCardProps) {
  const [selected, setSelected] = useState(false);

  return (
    <button onClick={() => setSelected(!selected)}>
      {name} ({age})
    </button>
  );
}
```

</div>

---

<!-- _class: split -->

### Vite

<div class="col">

- **Instant Dev Server**: Native ES modules mean no bundling while you develop.
- **Lightning HMR**: Edits show up in the browser in milliseconds.
- **Zero Config**: Built-in support for TS, JSX, and CSS.

</div>
<div class="col">

```bash
# Scaffold a React + TypeScript app
npm create vite@latest my-app -- --template react-ts

cd my-app
npm install
npm run dev
```

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

### useState

<div class="col">

- **Setter Function**: Calling `setCount(...)` schedules an update — it doesn't mutate the variable directly.
- **Functional Updates**: Use `setCount(c => c + 1)` when the new value depends on the previous one.

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}
```

</div>
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='545' height='150' viewBox='0 0 545 150'><rect x='10' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='65.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>useState(0)</text><path d='M120 45.0 L145 45.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='138 40.0 145 45.0 138 50.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='145' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='200.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>onClick Fires</text><path d='M255 45.0 L280 45.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='273 40.0 280 45.0 273 50.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='280' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='335.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>setCount(c + 1)</text><path d='M390 45.0 L415 45.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='408 40.0 415 45.0 408 50.0' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='415' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='470.0' y='40.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Component</text><text x='470.0' y='56.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Re-renders</text><path d='M470.0 70 L470.0 115 L65.0 115 L65.0 70' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='60.0 77 65.0 70 70.0 77' stroke='%23f5a623' stroke-width='2' fill='none'/><text x='267.5' y='137' font-family='Arial' font-size='11' fill='%23f5a623' text-anchor='middle'>Updated count flows into the next render</text></svg>"/></div>

---

<!-- _class: split -->

### useEffect

<div class="col">

- Used for side effects like API calls or manual DOM changes.
- **Side Effects**: Things that process outside the render loop; i.e. network calls, timers, subscriptions, etc...

```tsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(setData);
    
  return () => console.log('Cleanup');
}, []); 
```


*[You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)*
</div>
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='560' height='250' viewBox='0 0 560 250'><rect x='10' y='110' width='100' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='60.0' y='139.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Render</text><path d='M110 135 L140 135' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='133 130 140 135 133 140' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='140' y='110' width='120' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='200.0' y='139.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Commit + Paint</text><path d='M260 135 L290 135' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='283 130 290 135 283 140' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='290' y='110' width='110' height='50' rx='4' fill='%230a1628' stroke='%23f5a623' stroke-width='2'/><text x='345.0' y='139.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Effect Runs</text><path d='M400 135 L430 135' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='423 130 430 135 423 140' stroke='%23f5a623' stroke-width='2' fill='none'/><polygon points='430 135 490 100 550 135 490 170' fill='%230a1628' stroke='%23f5a623' stroke-width='2'/><text x='490' y='131' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Deps</text><text x='490' y='144' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>changed?</text><path d='M490 170 L490 198' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='485 191 490 198 495 191' stroke='%23f5a623' stroke-width='2' fill='none'/><text x='503' y='186' font-family='Arial' font-size='10.5' fill='%23f5a623' text-anchor='start'>No</text><rect x='435' y='198' width='110' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='490.0' y='222.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Skip re-render</text><path d='M490 100 L490 40 L345 40 L345 110' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='340 103 345 110 350 103' stroke='%23f5a623' stroke-width='2' fill='none'/><text x='417' y='32' font-family='Arial' font-size='10.5' fill='%23f5a623' text-anchor='middle'>Yes: cleanup() then re-run effect</text></svg>"/></div>

---

<!-- _class: split -->

### useContext

<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='280' viewBox='0 0 480 280'><rect x='180' y='10' width='120' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='240.0' y='34.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Provider (value)</text><path d='M240 50 L240 70' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='235 63 240 70 245 63' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='180' y='73' width='120' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='240.0' y='97.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>App</text><path d='M240 113 L240 133' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='235 126 240 133 245 126' stroke='%2300a8e8' stroke-width='2' fill='none'/><rect x='180' y='136' width='120' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='240.0' y='160.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Layout</text><rect x='20' y='210' width='120' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='80.0' y='234.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Sidebar</text><rect x='340' y='210' width='120' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='400.0' y='234.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Header</text><path d='M220 176 L220 193 L80 193 L80 210' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='75 203 80 210 85 203' stroke='%2300a8e8' stroke-width='2' fill='none'/><path d='M260 176 L260 193 L400 193 L400 210' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='395 203 400 210 405 203' stroke='%2300a8e8' stroke-width='2' fill='none'/><path d='M180 30 L10 30 L10 230 L20 230' stroke='%2300f2ff' stroke-width='2' fill='none' stroke-dasharray='5,4'/><polyline points='13 225 20 230 13 235' stroke='%2300f2ff' stroke-width='2' fill='none'/><path d='M300 30 L470 30 L470 230 L460 230' stroke='%2300f2ff' stroke-width='2' fill='none' stroke-dasharray='5,4'/><polyline points='467 225 460 230 467 235' stroke='%2300f2ff' stroke-width='2' fill='none'/><text x='95' y='24' font-family='Arial' font-size='10.5' fill='%2300f2ff' text-anchor='middle'>useContext()</text><text x='385' y='24' font-family='Arial' font-size='10.5' fill='%2300f2ff' text-anchor='middle'>useContext()</text><text x='240' y='264' font-family='Arial' font-size='10' fill='%2300f2ff' text-anchor='middle'>no props drilled through App or Layout</text></svg>"/></div>
<div class="col">

- Lets any component read shared state directly, skipping the in-between layers.
- **Prop Drilling**: passing a value through several layers of components that don't use it.

```tsx
const ModelContext = createContext('claude-4.6');

function App() {
  return (
    <ModelContext.Provider value="claude-4.6">
      <Toolbar />
    </ModelContext.Provider>
  );
}

function ModelPicker() {
  const model = useContext(ModelContext);
  return {/* Model Picker Select */}
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
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='570' height='250' viewBox='0 0 570 250'><rect x='10' y='110' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='65.0' y='139.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Re-render</text><path d='M120 135 L140 135' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='133 130 140 135 133 140' stroke='%2300a8e8' stroke-width='2' fill='none'/><polygon points='140 135 190 100 240 135 190 170' fill='%230a1628' stroke='%2322c55e' stroke-width='2'/><text x='190' y='131' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Deps</text><text x='190' y='144' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>same?</text><path d='M240 135 L270 135' stroke='%23ef4444' stroke-width='2' fill='none'/><polyline points='263 130 270 135 263 140' stroke='%23ef4444' stroke-width='2' fill='none'/><text x='252' y='122' font-family='Arial' font-size='10.5' fill='%23ef4444' text-anchor='middle'>No</text><rect x='270' y='110' width='120' height='50' rx='4' fill='%230a1628' stroke='%23ef4444' stroke-width='2'/><text x='330.0' y='139.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Recompute fn()</text><path d='M390 135 L420 135' stroke='%23ef4444' stroke-width='2' fill='none'/><polyline points='413 130 420 135 413 140' stroke='%23ef4444' stroke-width='2' fill='none'/><rect x='420' y='110' width='130' height='50' rx='4' fill='%230a1628' stroke='%23ef4444' stroke-width='2'/><text x='485.0' y='139.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Store in Cache</text><path d='M485 160 L485 198' stroke='%23ef4444' stroke-width='2' fill='none'/><polyline points='480 191 485 198 490 191' stroke='%23ef4444' stroke-width='2' fill='none'/><rect x='420' y='198' width='130' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='485.0' y='222.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Return Value</text><path d='M190 170 L190 218 L420 218' stroke='%2322c55e' stroke-width='2' fill='none'/><polyline points='413 213 420 218 413 223' stroke='%2322c55e' stroke-width='2' fill='none'/><text x='300' y='210' font-family='Arial' font-size='10.5' fill='%2322c55e' text-anchor='middle'>Yes: return cached value (skip compute)</text></svg>"/></div>

---

<!-- _class: split -->

### useCallback

<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='580' height='220' viewBox='0 0 580 220'><rect x='10' y='90' width='110' height='40' rx='4' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='65.0' y='114.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Re-render Parent</text><path d='M120 110 L140 110' stroke='%2300a8e8' stroke-width='2' fill='none'/><polyline points='133 105 140 110 133 115' stroke='%2300a8e8' stroke-width='2' fill='none'/><polygon points='140 110 190 60 240 110 190 160' fill='%230a1628' stroke='%2300a8e8' stroke-width='2'/><text x='190' y='106' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Deps</text><text x='190' y='119' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>same?</text><path d='M190 60 L190 35 L300 35' stroke='%23ef4444' stroke-width='2' fill='none'/><polyline points='293 30 300 35 293 40' stroke='%23ef4444' stroke-width='2' fill='none'/><text x='200' y='85' font-family='Arial' font-size='10.5' fill='%23ef4444' text-anchor='middle'>No</text><rect x='300' y='15' width='120' height='40' rx='4' fill='%230a1628' stroke='%23ef4444' stroke-width='2'/><text x='360.0' y='30.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>New Function</text><text x='360.0' y='46.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Created</text><path d='M420 35 L445 35' stroke='%23ef4444' stroke-width='2' fill='none'/><polyline points='438 30 445 35 438 40' stroke='%23ef4444' stroke-width='2' fill='none'/><rect x='445' y='15' width='120' height='40' rx='4' fill='%230a1628' stroke='%23ef4444' stroke-width='2'/><text x='505.0' y='39.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Child Re-renders</text><path d='M190 160 L190 185 L300 185' stroke='%2322c55e' stroke-width='2' fill='none'/><polyline points='293 180 300 185 293 190' stroke='%2322c55e' stroke-width='2' fill='none'/><text x='200' y='145' font-family='Arial' font-size='10.5' fill='%2322c55e' text-anchor='middle'>Yes</text><rect x='300' y='165' width='120' height='40' rx='4' fill='%230a1628' stroke='%2322c55e' stroke-width='2'/><text x='360.0' y='180.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Same Reference</text><text x='360.0' y='196.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Returned</text><path d='M420 185 L445 185' stroke='%2322c55e' stroke-width='2' fill='none'/><polyline points='438 180 445 185 438 190' stroke='%2322c55e' stroke-width='2' fill='none'/><rect x='445' y='165' width='120' height='40' rx='4' fill='%230a1628' stroke='%2322c55e' stroke-width='2'/><text x='505.0' y='189.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Child Skips Render</text></svg>"/></div>
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

### Custom Hooks

<div class="col">

- **Just a Function**: Any function named `useSomething` that calls other hooks.
- **Reuse Logic**: Extract repeated state/effect/context logic into one shared hook.
- **Composable**: Custom hooks can call other built-in or custom hooks.

</div>
<div class="col">

```tsx
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// in a component:
const { theme } = useTheme();
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

**useMutation**: create, update, or delete data.

```tsx
const { mutate } = useMutation({
  mutationFn: addTodo,
  onSuccess: () => queryClient.invalidateQueries(['todos']),
});
```

</div>
<div class="graphic-col"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='545' height='150' viewBox='0 0 545 150'><rect x='10' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='65.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>useQuery(key)</text><path d='M120 45.0 L145 45.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='138 40.0 145 45.0 138 50.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='145' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='200.0' y='49.0' font-family='Arial' font-size='11.5' fill='%23ffffff' text-anchor='middle'>Check Cache</text><path d='M255 45.0 L280 45.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='273 40.0 280 45.0 273 50.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='280' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='335.0' y='40.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Fetch via</text><text x='335.0' y='56.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>queryFn() if stale</text><path d='M390 45.0 L415 45.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><polyline points='408 40.0 415 45.0 408 50.0' stroke='%2300f2ff' stroke-width='2' fill='none'/><rect x='415' y='20' width='110' height='50' rx='4' fill='%230a1628' stroke='%2300f2ff' stroke-width='2'/><text x='470.0' y='40.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Update Cache,</text><text x='470.0' y='56.0' font-family='Arial' font-size='10.5' fill='%23ffffff' text-anchor='middle'>Re-render UI</text><path d='M470.0 70 L470.0 115 L65.0 115 L65.0 70' stroke='%23f5a623' stroke-width='2' fill='none'/><polyline points='60.0 77 65.0 70 70.0 77' stroke='%23f5a623' stroke-width='2' fill='none'/><text x='267.5' y='137' font-family='Arial' font-size='11' fill='%23f5a623' text-anchor='middle'>Refetch: refocus, interval, invalidate</text></svg>"/></div>

---

# Summary

- **Functional Components** + **Hooks** = Modern React.
- **TS** + **JSX** + **Vite** = Optimal Tooling.
- Use **useMemo/useCallback** for performance.
- Use **TanStack Query** for professional data fetching and caching.

---

# Hands-On Lessons

Each lesson is a standalone app in `lessons/` — run with `npm run dev:<n>`.

- **01 · State**: Local state with `useState`.
- **02 · Context**: Solve prop drilling with `useContext`.
- **03 · Data**: Async data with TanStack Query.
- **04 · Final**: A finished reference app — read, don't build.