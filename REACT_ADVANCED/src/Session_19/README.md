# Session 19 – Mini Project: "Task Manager App" (Playlist Manager)

This module demonstrates building a React application structured around **Authentication UI**, **CRUD logic**, and **Redux Toolkit** for global state management. Instead of creating a separate Vite project, this assignment was modularly developed inside the `src/Session_19` directory, utilizing **Tailwind CSS v4** for modern styling.

---

## 🎯 Objectives & Completed Tasks

### 1. Set Up React App & Redux Store (`store.ts`)
- **Objective:** Create the initial Redux store and set up Redux Toolkit.
- **Implementation:** 
  - Initialized Redux Toolkit using `configureStore` in `src/Session_19/store.ts`.
  - Connected the Redux store to the React tree by wrapping the main session component (`Session19App.tsx`) with the `<Provider store={store}>` component from `react-redux`.

### 2. Authentication Form (`LoginForm.tsx`)
- **Objective:** Build a login form with email/password validation and UI toggling upon successful authentication.
- **Implementation:**
  - Used React's `useState` hook to manage form inputs (`email`, `password`) and authentication state (`isLoggedIn`).
  - Implemented conditional rendering: displays a styled login card by default, and transitions to a Welcome dashboard when authenticated.
  - Styled with Tailwind CSS v4, featuring sleek dark-mode aesthetics, custom inputs, and smooth transitions.

### 3. Redux Slice for Song Management (`playlistSlice.ts`)
- **Objective:** Manage a playlist of songs with actions for adding, editing, and deleting items.
- **Implementation:**
  - Defined the `Song` interface (`id`, `title`, `artist`) and an initial state array.
  - Used `createSlice` to automatically generate action creators and reducers for `addSong`, `deleteSong`, and `editSong`.
  - Leveraged Redux Toolkit's built-in **Immer** library to write intuitive, mutating-style state updates (e.g., `state.push()` and direct object assignment) while preserving immutability under the hood.

### 4. Playlist UI Component (`PlaylistList.tsx`)
- **Objective:** Render the songs from the Redux store and allow deletion of items.
- **Implementation:**
  - Connected to the global Redux state using the `useSelector` hook to retrieve `state.playlist`.
  - Used the `useDispatch` hook to dispatch the `deleteSong(id)` action when a song's "Remove" button is clicked.
  - Integrated directly into `LoginForm.tsx` so authenticated users can view and manage their songs seamlessly.

### 5. AI Assistant & Copilot Integration (`editSong` Reducer)
- **Objective:** Assist in generating and refining the reducer logic for editing a song by ID.
- **Implementation:**
  - Implemented lookup logic using `state.find(song => song.id === action.payload.id)`.
  - Updated the matching song's properties (`title` and `artist`) cleanly and exported `editSong` for full CRUD capability.

---

## 📁 File Structure

```text
src/Session_19/
│
├── store.ts             # Redux Toolkit store configuration
├── playlistSlice.ts     # Redux slice defining song state and CRUD reducers
├── Session19App.tsx     # Main session wrapper with Redux <Provider>
├── LoginForm.tsx        # Authentication UI and state toggle
├── PlaylistList.tsx     # Playlist display and delete dispatch logic
└── README.md            # Project documentation
```

---

## 🚀 How to Run Locally

1. Ensure your dependencies are installed:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```
2. In your root `src/App.tsx`, import and render the session app:
   ```tsx
   import Session19App from "./Session_19/Session19App";

   export default function App() {
     return <Session19App />;
   }
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser, log in with any sample email and password, and interact with your Redux-powered playlist!
