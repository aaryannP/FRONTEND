# Session 7: Context API Deep Dive (Part 1)

This folder contains the implementation for the Context API Deep Dive tasks. Here is a breakdown of how we accomplished each assigned task exactly as requested:

## Task 1: Setup ThemeContext

**Requirement:** Create a new React app called InstaThemeDemo, then set up a ThemeContext with a Provider that manages a 'dark' or 'light' theme state.

**Implementation:** We created `ThemeContext.tsx` which uses `createContext`. We exported a `ThemeProvider` component that manages a 'light' or 'dark' `theme` state using `useState`.

## Task 2: Build Navbar and deeply nested PostCard

**Requirement:** Build a Navbar component and a deeply nested PostCard component (at least 3 levels deep) that both consume the theme value from ThemeContext and change their background color based on the current theme.

**Implementation:** 
- `Navbar.tsx` reads the context to set its styling. 
- We created a 3-level deep nesting structure: `Session7App` -> `Layout` -> `PageBody` -> `PostCard`. 
- `PostCard.tsx` consumes the context directly to change its background and text color based on the current theme.

## Task 3: Add a ToggleThemeButton

**Requirement:** Add a ToggleThemeButton component that updates the theme in ThemeContext when clicked, so all components using the context update instantly.

**Implementation:** We built `ToggleThemeButton.tsx` which pulls both `theme` and `setTheme` from our context hook. When clicked, it toggles the state, which instantly updates all components hooked into the provider.

## Task 4: Refactor to eliminate prop drilling

**Requirement:** Refactor your components so that NO theme prop is passed manually through intermediate components (no prop drilling) — only use ThemeContext to share the theme value.

**Implementation:** `Layout.tsx` and `PageBody.tsx` are our intermediate components. If you look at their code, neither of them receives or passes a `theme` prop. The context entirely eliminates the need for prop drilling here.

## Task 5: Explanation

**Requirement:** Write a short explanation (3-5 lines) of how prop drilling would make sharing the theme state harder in your app, and how using ThemeContext solved this problem.

**Explanation:** 
If we used prop drilling, we would be forced to pass the `theme` prop from `Session7App` into `Layout`, and then into `PageBody`, just so `PostCard` could finally receive it. This clutters the intermediate components with props they don't even use, making the codebase messy and hard to maintain as it grows. By using `ThemeContext`, `PostCard` and `Navbar` can directly access the global state, keeping our intermediate components clean and focused only on their own jobs.
