# Session 2: Custom Hooks

This folder contains the solutions for the Session 2 assignment, focusing on creating and utilizing custom React hooks for code reusability and separation of concerns.

## Tasks Completed

### Task 1: Live Clock (`useCurrentTime`)
- Created a custom hook `useCurrentTime` that manages a state initialized to the current time and updates it every second using `setInterval`.
- Built a `Clock` component to consume this hook and display a live, ticking clock on the screen using `toLocaleTimeString()`.

### Task 2: Fetching Trending Movies (`useTrendingMovies`)
- Extracted TMDB API fetching logic into a dedicated `useTrendingMovies` hook.
- Managed `data`, `loading`, and `error` states cleanly within the hook.
- Refactored the `Movies` component to consume this hook, handling the UI states and mapping over the movie data.

### Task 3: Instagram-Style Like Button (`useLikeButton`)
- Created a `useLikeButton` hook to encapsulate the logic for toggling a "like" state (`isLiked`) and incrementing/decrementing a like counter (`likeCount`).
- Implemented a `PostCard` component that uses this hook to create an interactive UI, demonstrating how hooks separate business logic from the view layer.

### Task 4: Generic Data Fetcher (`useFetchData`)
- Generalized the data fetching logic into a highly reusable `useFetchData` hook that accepts any API URL.
- Ensured strict adherence to the **Rules of Hooks** (no conditional calls or calls inside loops).
- Demonstrated reusability by creating a `SpotifyPlaylists` component that uses this generic hook to fetch and display album data from a placeholder API.

### Task 5: Understanding Reusability
- Explained the conceptual power of custom hooks in large-scale applications (like a Flipkart-style app).
- Documented in `Task_5.txt` how abstracting the `useState` and `useEffect` logic allows multiple components (e.g., product lists, order histories) to fetch data effortlessly without duplicating code.

---
**Key Takeaway:** Custom hooks act as the "Brain" (logic and data), allowing components to remain focused on being the "Face" (UI).
