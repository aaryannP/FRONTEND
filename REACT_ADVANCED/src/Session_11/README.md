# Session 11 – Firebase Authentication (Part 2)

## Overview
This session covers persistent authentication, user session management, and protecting routes within a React application using Firebase Auth.

## Tasks Completed

1. **Persistent Authentication (`onAuthStateChanged`)**
   - Configured `onAuthStateChanged` inside `Session11App.tsx`'s `useEffect`.
   - This listener automatically detects if a user is logged in (from local storage) or logged out and updates the `currentUser` state.
   - Passed this state down to the `Navbar` to display either "Welcome, Guest" or "Welcome, [User Email]".

2. **Logout Functionality**
   - Implemented a Logout button in the `Navbar`.
   - Used Firebase's `signOut()` method to securely end the user's session.
   - The UI updates immediately because `onAuthStateChanged` detects the sign-out event and resets the state.

3. **Spotify-Style Greeting**
   - The `Navbar` dynamically swaps between the greeting ("Welcome, [Email]" with a Logout button) and the logged-out state ("Welcome, Guest" with a Sign In link) instantaneously, without needing a page refresh.

4. **Protected Routes**
   - Implemented a `ProtectedRoute` wrapper component (`ProtectedRoute.tsx`).
   - If an unauthenticated user attempts to access `/profile`, the wrapper intercepts the request and redirects them to the `/login` page using React Router's `<Navigate>` component.

## Setup Instructions
1. Run `npm install` to ensure all dependencies (including `react-router-dom` and `firebase`) are installed.
2. Run `npm run dev` to start the application.
3. Use the Sign In page to log in (or use the Session 10 Sign Up form if you need a new account).
4. Verify that you can access the Profile page only when logged in, and that clicking Logout instantly restricts access and redirects you out.
