# Session 13 - Firestore CRUD Operations (Part 2)

This session covers advanced Firestore operations including updating documents, deleting documents, and setting up real-time listeners.

## Tasks Completed

1. **PlaylistEditor Component (Update)**: Connects to the `playlists` collection and allows users to update the name of a specific playlist using `updateDoc`.
2. **PlaylistEditor Component (Delete)**: Removes a playlist document from Firestore using `deleteDoc` when a button is clicked, after a `window.confirm` popup.
3. **LiveCommentsFeed Component**: Uses `onSnapshot()` to listen to a `comments` collection for real-time updates without page refreshes.
4. **Explanation of onSnapshot()**: See below.
5. **LiveCommentsFeed Cleanup**: Implements a cleanup function in `useEffect` to unsubscribe from the Firestore `onSnapshot()` listener when the component unmounts.

## Task 4: How Firestore's `onSnapshot()` works

Firestore's `onSnapshot()` acts like an active, continuous listener on your database. Instead of fetching data just once, it maintains a live connection and instantly pushes a new 'snapshot' to the client whenever the target collection (like 'comments') changes. In the `LiveCommentsFeed` component, this fresh snapshot is immediately passed into the `setComments` state function. React sees the state update and automatically re-renders the new data on the screen without anyone having to manually refresh the page.
