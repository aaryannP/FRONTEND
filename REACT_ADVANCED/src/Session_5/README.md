# Session 5: useReducer Hook (Part 2)

## Overview
This session focuses on managing complex state in React using the `useReducer` hook. We built a simple, Spotify-style Playlist Manager that handles multiple actions such as adding, editing, and deleting songs from a list.

## Tasks Completed

### 1. The Reducer Function (`playlistReducer.ts`)
Created a central reducer function to manage the state (an array of songs). It handles multiple actions using a `switch` statement:
*   `ADD_SONG`: Appends a new song to the state array.
*   `REMOVE_SONG`: Filters out a specific song from the array.
*   `EDIT_SONG`: Maps over the array to find a specific song and replaces it with an updated name.

### 2. Playlist Manager (`PlaylistManager.tsx`)
Built the main component that initializes the state using `useReducer`. 
*   It provides a form with an input field and an "Add" button to dispatch the `ADD_SONG` action.
*   It maps through the state array, rendering a `SongItem` component for each song.

### 3. Deleting Songs (`SongItem.tsx`)
Refactored the list to use individual child components (`SongItem`). 
*   Passed down the `dispatch` function as a prop.
*   Added a "Delete" button that dispatches a `REMOVE_SONG` action back to the reducer.

### 4. Editing Songs (`SongItem.tsx`)
Extended functionality to allow users to rename songs inline.
*   Used local `useState` in the child component to toggle between "view" mode and "edit" mode.
*   Added an input field to edit the song name.
*   Dispatched an `EDIT_SONG` action with a payload containing both the `oldName` and `newName` to ensure the reducer updates the correct item in the array.
