# Instructor Answer Key

Instructions for every `// TODO` across Lessons 1-3, in the same order as each
lesson's own `README.md` "What to do" list, plus the reasoning behind each one so you
can explain *why*, not just paste code. Lesson 4 has no TODOs — it's the reference
solution — so its section just points at its own source instead of repeating it.

---

## Lesson 1: State (`lessons/01-state`)

### 1. `src/App.tsx`
- Add two `useState`s at the top of `App`: conversation history as
  `useState<{ role: 'user' | 'assistant'; content: string }[]>([])`, and the active
  model as `useState('gemma-4-26b-a4b-it')`.
- In `handleSend`, right after building `userMsg`, call
  `setMessages(prev => [...prev, userMsg])`.
- Inside the existing `sendMessageApi(text).then((aiMsg) => { ... })`, call
  `setMessages(prev => [...prev, aiMsg])`.
- Wire the new state into the JSX that's already there:
  `<ModelPicker selectedModel={model} onModelChange={setModel} />` and
  `<ChatArea messages={messages} onSend={handleSend} />`.

**Why:** `messages`/`model` have to live in `App` because that's the lowest common
ancestor of everything that reads or writes them (`ModelPicker`, `ChatArea` and its
children). This is the lesson's core idea — state lives where the components that
need it overlap, not in whichever component happens to render first. The
`setMessages(prev => [...prev, x])` form matters too: React schedules re-renders and
may batch updates, so reading the *previous* state via the updater function is the
only safe way to append — reading the outer `messages` variable directly would risk
acting on a stale snapshot when both the user-message and AI-reply updates land close
together.

### 2. `src/components/ChatInput.tsx`
- Add `const [text, setText] = useState('')`.
- On the `<input>`, set `value={text}` and `onChange={(e) => setText(e.target.value)}`.
- In `handleSubmit`, if `text.trim()` is truthy: call `onSend(text)`, then
  `setText('')`.

**Why:** This is the "controlled component" pattern, and it's foundational — every
input in every later lesson uses this same shape. Binding `value` to state means React
is the single source of truth for what's in the box (not the DOM), which is exactly
what makes `setText('')` after sending work: clearing state is enough to clear the
field, with no manual DOM manipulation (`inputRef.current.value = ''`) needed.

---

## Lesson 2: Context (`lessons/02-context`)

### 1. `src/state/AppContext.tsx`
- Inside `AppProvider`: add `useState('gemma-4-26b-a4b-it')` for `model` and
  `useState<Message[]>([])` for `messages`.
- Define `sendMessage(text)`: build `userMsg`, append it via the `setMessages`
  updater, then call `sendMessageApi(text, model).then((aiMsg) => setMessages(prev =>
  [...prev, aiMsg]))` — i.e. the exact same body as Lesson 1's `handleSend`.
- Render `<AppContext.Provider value={{ messages, model, setModel, sendMessage }}>{children}</AppContext.Provider>`.
- Below `AppProvider`, define and export three hooks, each calling
  `useContext(AppContext)` (throw if it's `null`) and returning one slice:
  `useChatModel()` → `[model, setModel]`, `useChatMessages()` → `messages`,
  `useChatActions()` → `sendMessage`.

**Why:** Deliberately almost identical to Lesson 1's `handleSend` — the point of this
step is "Context doesn't change your state logic, it changes *where it lives and how
it's shared*." If a student is rewriting the send-message logic from scratch here,
that's a sign they're solving the wrong problem. Funnel all three hooks through one
shared `useContext` call (rather than each calling it separately) so the "used outside
a Provider" guard exists in exactly one place instead of three.

### 2. `src/App.tsx`
- Wrap the returned JSX in `<AppProvider>`.
- Remove the `messages`/`model` state and `handleSend`, and stop passing
  `selectedModel`/`onModelChange`/`messages`/`onSend` to `<ModelPicker>`/`<ChatArea>` —
  render them with no props at all.

**Why:** `<AppProvider>` has to wrap everything that needs the context — that's the
whole mechanism: `useContext(AppContext)` only finds a value if it's called from
inside a matching `<AppContext.Provider>` somewhere above it in the tree, otherwise it
gets `null`. Just as important: `App` now passes **zero** props to
`ModelPicker`/`ChatArea` — that's the visible proof prop drilling is gone, worth
pointing out explicitly since it's easy to fix the TODOs without noticing this is the
payoff.

### 3. `ChatInput.tsx`, `ChatMessages.tsx`, `ModelPicker.tsx`, `ChatArea.tsx`
- Remove each component's props interface and props entirely.
- `ChatInput.tsx`: replace the `onSend` prop with `const sendMessage =
  useChatActions();`, call `sendMessage(text)` in `handleSubmit`.
- `ChatMessages.tsx`: replace the `messages` prop with `const messages =
  useChatMessages();`.
- `ModelPicker.tsx`: replace the `selectedModel`/`onModelChange` props with `const
  [model, setModel] = useChatModel();`.
- `ChatArea.tsx`: drop the `messages`/`onSend` props and stop forwarding them to
  `<ChatMessages />`/`<ChatInput />` — render both with no props.

**Why:** `ChatInput` reaching for `useChatActions()` is the "actions" half of prop
drilling fixed (a leaf reaching up for *behavior*, not just data); `ChatMessages`
reaching for `useChatMessages()` is the "data" half. `ModelPicker` is worth calling
out separately because it moves *two* things — a value and its setter — proving
context isn't just for read-only data. `ChatArea` is the punchline: it started as a
pure middleman forwarding props to children that needed them — the textbook example of
prop drilling — and once both children self-serve from context it goes back to being
just composition. If `ChatArea` still needed props here, something upstream wasn't
actually fixed.

---

## Lesson 3: Data (`lessons/03-data`)

`src/api.ts` is pre-built (matches Lessons 1-2's mock) — nothing to do there.

### 1. `src/state/AppContext.tsx`
- Remove `messages: Message[]` from `AppContextType`.
- Remove the `useState<Message[]>([])` line (and its now-pointless `setMessages`) from
  `AppProvider`.
- Drop `messages` from the `<AppContext.Provider value={{ ... }}>` object.

**Why:** This file starts as a deliberate regression — it still has `messages` in
Context, carried over from Lesson 2 — specifically so removing it is something you
*do*, not just read about. `messages` comes from/goes to an API, which makes it server
state, not client state; it doesn't belong in Context regardless of how convenient it
was to put it there. `model` stays, because choosing it never touches a server.

### 2. `src/hooks/useMessages.ts`
- `return useQuery<Message[]>({ queryKey: ['messages'], queryFn: () => [], initialData: [] })`.

**Why:** This looks like overkill for something that's just a local array — there's no
real server to fetch from, `queryFn` just returns `[]`. That's intentional: it shows
that TanStack Query's cache can *itself* be the shared store (replacing Context for
this piece of state), with components reading it via `useQuery` instead of
`useContext`. `initialData: []` is what makes `messages` available synchronously on
first render instead of starting `undefined`.

### 3. `src/hooks/useChatMutation.ts`
- Get the active model via `const [model] = useChatModel();` from `'../state/AppContext'`
  — the hook reads it itself rather than taking it as a parameter.
- `useMutation` with: `mutationFn: ({ text }) => sendMessageApi(text, model)`;
  `onMutate: ({ text })` builds `userMsg` and appends it via
  `queryClient.setQueryData<Message[]>(['messages'], old => [...(old ?? []), userMsg])`;
  `onSuccess: (aiResponse)` appends `aiResponse` the same way.

**Why:** This is the lesson's central contrast: `useQuery` is for reads, `useMutation`
is for writes, and they're deliberately separate hooks because writes need lifecycle
hooks reads don't (you don't "optimistically update" a GET). `onMutate` is what makes
the user's own message appear instantly, before the simulated network delay resolves —
without it, the UI would feel laggy even though the data is "correct" either way.
`onSuccess` appends the AI reply the same way, through the same `queryKey: ['messages']`
the `useMessages()` hook reads — that shared key is what keeps every component in sync
without threading any new props or context.

### 4. `src/hooks/useModels.ts`
- `return useQuery({ queryKey: ['models'], queryFn: fetchModels })`.

**Why:** Worth doing this one right after `useChatMutation` so the contrast lands:
this is the "plain"/textbook `useQuery` — a real async call, a `queryKey`, nothing
else. Seeing the simple case next to the optimistic-update case makes clear that
`onMutate`/`onSuccess` aren't required `useQuery` boilerplate, they're mutation-specific
tools you reach for only when you need them.

### 5. `src/components/ChatMessages.tsx`
- Replace `const messages: Message[] = []` with
  `const { data: messages = [] } = useMessages();`.

**Why:** Compare this to Lesson 2's version: there, `messages` came from
`useChatMessages()` (context); here it's `useMessages()` (TanStack Query) — same
component, same rendering logic below it, only the data source changed. The
data-fetching mechanism is swappable; the rendering isn't coupled to it.

### 6. `src/components/ChatInput.tsx`
- Replace the placeholder comment with
  `const { mutate: sendMessage, isPending } = useChatMutation();` — no `model`
  argument needed here anymore, since the hook reads it from context itself
  (`ChatInput` no longer needs `useChatModel()` at all).
- In `handleSubmit`, call `sendMessage({ text })` instead of doing nothing, then
  `setText('')`.
- Add `disabled={isPending}` to both the `<input>` and the submit `<button>`.

**Why:** `useChatMutation()` replaces a plain callback with something that also
reports its own status (`isPending`) — `useState`+`fetch` would have required manually
tracking that (an `isSending` flag, set/reset around the call). Reading `model` inside
the hook instead of threading it in as a parameter keeps that dependency private to
the hook — `ChatInput` doesn't need to know or care that sending a message depends on
the active model at all. Disabling the input/button while pending stops a student from
firing a second message mid-flight and getting confused about ordering, and it's
"free" here because TanStack Query already tracks the in-flight state for you.

### 7. `src/components/ModelPicker.tsx`
- Replace the static `AI_MODELS` import/list with
  `const { data: models = [] } = useModels();`.

**Why:** `model`/`setModel` still come from `useChatModel()` (Context) — they didn't
move to TanStack Query. This is the lesson's key distinction made concrete: the
*selected* model is a local UI preference (client state, no server involved in
choosing it), while the *list* of available models is server state (fetched from
`fetchModels()`), so it gets its own `useModels()` query. Two pieces of "model" data
in the same component, deliberately handled by two different mechanisms.

---

## Lesson 4: Final Product (`lessons/04-final`)

No TODOs to solve — it's the answer key for the whole progression. **Why this lesson
exists:** Lessons 1-3 each isolate one concept against a mock backend that never fails
and never needs more than one message of context. Lesson 4 is what happens when you
remove that safety net — multi-turn conversations need history, real networks fail,
and "loading" isn't instant. It's not new concepts so much as the previous three
lessons' patterns under real conditions. Point students at the actual source rather
than re-deriving it here; if walking through it live, diff it against Lesson 3's
solved code instead of reading it cold:

- `src/api.ts` — real `fetchModels()`/`sendMessageApi()` via the shared `openaiClient`.
  *Why:* this is the only file that actually has to change to go from mock to real —
  everything above it (hooks, components) was already written against the same
  function signatures, which is the whole reason Lesson 3 was built that way.
- `src/hooks/useChatMutation.ts` additionally calls `useMessages()` internally to send
  full history, and adds `mutationKey: ['sendMessage']`. *Why:* a real model has no
  memory between calls — every request is stateless — so the full conversation has to
  be resent for follow-up questions to make sense; the mock never needed this since its
  "reply" never depended on anything but the latest message. `mutationKey` exists
  purely so a *different* component (`ChatMessages`) can ask "is a send in flight?"
  without being the one that called `useChatMutation`.
- `src/state/AppContext.tsx`'s default model is a real id (`gemma-4-26b-a4b-it`)
  instead of a placeholder. *Why:* a fake default like `'gpt-4'` was harmless against
  a mock that never inspected it; against a real provider it would 404 on the very
  first message.
- `ModelPicker`/`ChatInput`/`ChatMessages` add loading/error states and a typing
  indicator (`useIsMutating({ mutationKey: ['sendMessage'] })`). *Why:* a mock that
  always resolves in exactly one second never needs error handling and barely needs
  loading states. A real network call can be slow or fail (bad key, rate limit,
  unsupported model), and visibly "thinking" is what makes a multi-second real reply
  feel intentional instead of broken.
