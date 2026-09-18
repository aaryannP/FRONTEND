# Session 14 - Redux Fundamentals

## Overview
This session covers the core concepts of Redux architecture, including the store, actions, reducers, and dispatching, sticking to the classic approach without relying heavily on Redux Toolkit slices. 

## Tasks & Implementations

### 1. Store Setup
**Task:** Install Redux and React-Redux, then set up a basic store.
**How we did it:** 
- Installed `@reduxjs/toolkit`, `redux`, and `react-redux`.
- Created `store.ts` and initialized the store using `configureStore` (which is standard even for classic reducers).
- Wrapped our application with `<Provider store={store}>` inside `App.tsx` so all components can access the Redux state.

### 2. Actions & Reducers (Adding a Song)
**Task:** Create an `addSong` action and a `playlistReducer`.
**How we did it:**
- **Actions (`actions.ts`):** Created an action creator function `addSong(song: string)` that returns an object containing the `type: "ADD_SONG"` and the song name as the `payload`.
- **Reducer (`reducer.ts`):** Initialized our state with a default array of songs. The `playlistReducer` listens for `"ADD_SONG"` and uses the spread operator (`[...state, action.payload]`) to return a brand new array with the new song appended.

### 3. PlaylistManager UI
**Task:** Build a React component that dispatches `addSong` and displays the playlist.
**How we did it:**
- Used `useSelector` to read the `playlist` array from the Redux store.
- Used `useDispatch` to get the `dispatch` function.
- Created a controlled input with local React state (`useState`). When the "Add" button is clicked, we call `dispatch(addSong(songName))` and clear the local input.
- Rendered the playlist by mapping over the array.

### 4. Removing a Song
**Task:** Add a `removeSong` action and let users delete a song.
**How we did it:**
- **Actions:** Created `removeSong(index: number)` which returns `type: "REMOVE_SONG"` and the index as the payload.
- **Reducer:** Added a `case "REMOVE_SONG"` that uses `state.filter((_, i) => i !== action.payload)` to return a new array omitting the clicked item.
- **UI:** Added a "Remove" button next to each song inside our `.map()`, utilizing the index provided by the map loop: `<button onClick={() => dispatch(removeSong(index))}>`.

## Key Takeaways
- **State is Read-Only:** The only way to change the state is to emit an action, an object describing what happened.
- **Changes are made with Pure Functions:** Reducers must always return a *new* state object, never modifying the existing state directly.
