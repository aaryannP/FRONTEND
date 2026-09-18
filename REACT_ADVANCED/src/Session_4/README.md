# Session 4: useReducer Hook

## Concepts Covered
- **The Concept of Reducers:** A pattern where state updates are determined by a pure function (the reducer) that takes the current state and an action, returning a new state (`state + action => new state`).
- **`useReducer` vs `useState`:** While `useState` is great for simple, independent values, `useReducer` shines when state logic gets complex, involves multiple sub-values, or when the next state depends heavily on the previous state.
- **The Pipeline:** Dispatching an action triggers the reducer function. The value returned by the reducer is compared to the previous state. If it's a new value, React triggers a re-render.

## Tasks Completed
### Task 1: Playlist Counter
**Objective:** Create a new React component called `PlaylistCounter` that uses the `useReducer` hook to manage a count state representing the number of songs in a playlist, with buttons to increment, decrement, and reset the count.
- *Solution:* Created `PlaylistCounter.tsx` defining a reducer function with `ADD`, `REMOVE`, and `RESET` actions.

### Task 2: Prevent Negative Songs
**Objective:** Modify your `PlaylistCounter` to disable the decrement button when the count is zero, so the playlist cannot have negative songs.
- *Solution:* Added `disabled={state === 0}` directly to the decrement button for better UX, and included a safety check (`if (state === 0) return state;`) inside the reducer.

### Task 3: Flipkart-style Cart Item
**Objective:** Build a Flipkart-style cart item quantity manager using `useReducer`: create a `CartItem` component that displays the current quantity and has +, -, and Reset buttons.
- *Solution:* Created `CartItem.tsx` implementing a quantity manager using the same robust `useReducer` logic.

### Task 4: Refactor useState to useReducer
**Objective:** Given a `useState` snippet for a counter, refactor it to use `useReducer` instead, implementing increment, decrement, and reset actions.
- *Solution:* Refactored the logic into `BasicCounter.tsx` to directly compare `useState` and `useReducer` syntax.

## Key Takeaways & Best Practices
- **State Must Be Immutable:** A reducer must be a pure function. Never mutate the state argument directly (e.g., using `++state` or modifying an object directly). Always return a *new* calculated value (e.g., `state + 1`).
- **Use `const` for Initial State:** The initial state (`const initialState = 0`) is only used once during the initial mount. Using `const` ensures the baseline reference is never accidentally reassigned in the file.
- **TypeScript Union Types:** Instead of typing actions generally as `string`, it is a best practice to use strict Union Types (e.g., `type: "ADD" | "RESET" | "REMOVE"`). This provides strong type safety and auto-complete to prevent typos when dispatching actions.
