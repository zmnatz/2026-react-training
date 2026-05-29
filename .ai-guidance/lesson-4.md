# Lesson 4: Router Guidance
**Goal:** Implement navigation and routing using TanStack Router.

## Key Concepts for AI Assistance
- **SPA Routing:** Explain the concept of changing URLs without full page reloads.
- **Route Tree:** Guide the student in setting up a root route and nesting child routes.
- **`<Link>` Component:** Prompt the student to use the router's `Link` instead of `<a>` tags.
- **`<Outlet />`:** Explain how the Outlet acts as a placeholder for nested routes.
- **Route Parameters/Pages:** Assist in creating specific pages like `/admin`.

## Guidance Strategy
- Do NOT provide the route tree configuration.
- ASK: "We want a separate settings page. How can we tell the application to render a different component when the URL is `/admin`?"
- ASK: "Where should the navigation menu go so that it stays visible regardless of which page the user is on?"
