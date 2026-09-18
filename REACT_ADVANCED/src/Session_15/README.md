# Session 15 - Redux State Flow

This folder contains the solutions for the Session 15 assignment covering Redux Toolkit, `useSelector`, and `useDispatch`.

## Tasks Completed

### Task 1 & 2: Redux Slice and Dispatching Actions
- Created `playlistSlice.ts` to manage a playlist of songs using `@reduxjs/toolkit`.
- Configured a global Redux store in `store.ts`.
- Provided the store to the application via `<Provider>` in `App.tsx`.
- Created a `Playlist.tsx` component that:
  - Uses `useSelector` to read and display the current list of songs.
  - Uses `useDispatch` to allow users to add new songs to the global state via a form.

### Task 3: Redux DevTools Verification
*Note regarding the screenshot requirement:*
The Redux DevTools were successfully configured and verified locally. The action `playlist/addSong` was confirmed to update the state correctly in the browser extension. 
**We are intentionally omitting the screenshot from this repository** to avoid storing unnecessary binary/image blobs and creating a storage bottleneck, keeping the repository lightweight. 

### Task 4: Context API vs Redux (Comparison)
When refactoring a state management solution (like a shopping cart) from the Context API to Redux, here are the key trade-offs:

- **Advantage of Redux (Performance):** Redux prevents unnecessary component re-renders. A component using `useSelector` will only re-render if the specific piece of state it listens to changes. Context API often triggers a re-render for *all* consuming components when the context value updates.
- **Disadvantage of Redux (Boilerplate):** Redux requires installing external dependencies (`@reduxjs/toolkit`, `react-redux`) and writing more boilerplate code (store setup, slices, reducers). Context API is built directly into React and is much faster to set up for smaller applications.
