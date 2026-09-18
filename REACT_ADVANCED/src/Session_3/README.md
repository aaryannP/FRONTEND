# Session 3: Custom Hooks (Part 2)

This session focused on building a parameterized custom hook that handles data fetching, loading, and error states.

## Completed Tasks

### Task 1: Create `useSearchMovies(query)`
Created a custom hook that takes a search term and fetches movie data. *(Note: We opted to use the TMDb API instead of OMDb since the API key was already configured in our environment).*

### Task 2: Manage Loading & Error States
Updated the hook to track and return `loading` and `error` states using `useState`. This allows the UI to display loading messages or handle failed API calls gracefully.

### Task 3: Automatically Refetch on Query Change
Included the `query` parameter in the `useEffect` dependency array so that the hook automatically triggers a new fetch whenever the search term changes.

### Task 4: Log Changes with a Second `useEffect`
Added a second `useEffect` dependent on the `data` state. It triggers a `console.log` message whenever the movie data is successfully updated.

### Task 5: Implement AI Suggestions (Debouncing & Error Handling)
Implemented the following improvements based on AI suggestions:
- **Early Return:** Prevented empty queries from calling the API by returning early if the query is blank.
- **Debouncing:** Created a wrapper component (`SearchMovies.tsx`) that uses a `setTimeout` to delay the API call until the user stops typing for 500ms, preventing excessive network requests.
- **Robust Error Handling:** Added defensive rendering (`data?.map`) and updated the `fetch` block to gracefully handle API errors (like an invalid API key) instead of crashing the React tree.
