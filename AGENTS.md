# AGENTS.md

## Project Overview
This repository contains a series of React development lessons located in the `lessons/` directory. Each lesson is an independent Vite project.

## Commands

### Lesson Specific
Lessons are numbered. Use the corresponding script to run, build, or preview a lesson:
- **Development**: `npm run dev:<n>` (e.g., `npm run dev:1` for `lessons/01-state`)
- **Build**: `npm run build:<n>`
- **Preview**: `npm run preview:<n>`

### Global
- **Linting**: `npm run lint` (runs ESLint on all `.tsx` files in `lessons/`)

## Development Workflow
1. Each lesson usually contains a `src/App.tsx` which serves as the entry point.
2. Some lessons are partially implemented with `// TODO` comments indicating where code needs to be written.
3. The goal of the lessons is to practice specific React concepts (state, context, data fetching), then study how they come together in the final lesson.

## Technologies
- **React 19**
- **TypeScript**
- **Vite**
- **TanStack Query** (used in data fetching lessons)
