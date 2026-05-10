# FlexPrice Storybook Assignment

This repository contains my submission for the FlexPrice frontend assignment focused on component architecture, Storybook documentation, frontend scalability, and performance optimization.

## What I Implemented

### Storybook Component Library
- Added Storybook stories for multiple existing atoms, molecules, and organisms
- Created:
  - default states
  - variants
  - loading/empty states
  - interaction tests using `@storybook/test`
- Added controls and autodocs support

### Advanced Challenge A — Filter Persistence
Implemented a reusable `useFilterStore` using Zustand with:
- route-scoped filter persistence
- `sessionStorage` caching
- clean API:
  - `setFilter`
  - `resetFilters`
  - `getFilters`
- shallow URL fingerprint syncing to avoid query-string bloat

### Advanced Challenge B — Virtualized DataTable
Extended the existing table component with virtualization using `@tanstack/react-virtual`:
- renders only visible rows + overscan buffer
- supports 10,000+ rows smoothly
- added row height estimation and dynamic measurement support
- documented in Storybook

### Advanced Challenge C — Query Caching Architecture
Created a centralized query configuration utility for TanStack Query:
- global cache defaults
- configurable overrides
- reusable presets:
  - `REALTIME`
  - `DEFAULT`
  - `STATIC`

### Testing
Added Vitest + Testing Library tests for:
- utility functions
- component render behavior

All tests pass successfully.

## Tech Used
- React
- TypeScript
- Storybook
- Tailwind CSS
- Zustand
- TanStack Query
- TanStack React Virtual
- Vitest
- Testing Library

## Running Locally

```bash
npm install
npm run storybook
