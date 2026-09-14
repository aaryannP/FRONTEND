# Capstone — Session 5 Complete Work

---

## 📁 Files Created in `assignments/Capstone/Session_5/`

1. 💻 **`firebaseConfig.js`** (Task 1)
   * Firebase app initialization and Firestore `db` instance export.

2. 💻 **`PlaylistService.js`** (Task 1)
   * Spotify `playlists` collection helper functions (`seedSamplePlaylist()` and `fetchAllPlaylists()`) inserting sample playlist documents with songs array.

3. 💻 **`AddReviewForm.jsx`** (Task 2)
   * Zomato-style restaurant review form saving restaurant name, rating, and comments to Firestore `reviews` collection using `addDoc()`.

4. 💻 **`WatchlistTracker.jsx`** (Task 3)
   * BookMyShow-style movie watchlist tracker fetching movies from Firestore `watchlists` collection and rendering movie name and status (`watched` / `not watched`).

5. 💻 **`EditReviewModal.jsx`** (Task 4)
   * Edit review modal updating restaurant ratings and comments in Firestore via `updateDoc()` method with instant UI sync.

6. 💻 **`useFirestoreReviews.js`** & 📄 **`refactored-firestore-api.md`** (Task 5)
   * ChatGPT refactored custom hook using modern `async/await`, structured `try/catch/finally` error handling, and refactoring documentation.

---

## 📝 Detailed Task Solutions Summary

### Task 1: Firestore Setup & Spotify `playlists` Collection
- Created in [`firebaseConfig.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_5/firebaseConfig.js) & [`PlaylistService.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_5/PlaylistService.js).

### Task 2: Add Restaurant Review Form (`addDoc()`)
- Created in [`AddReviewForm.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_5/AddReviewForm.jsx).

### Task 3: Movie Watchlist List (`watchlists` Collection)
- Created in [`WatchlistTracker.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_5/WatchlistTracker.jsx).

### Task 4: Edit Review Feature (`updateDoc()`)
- Created in [`EditReviewModal.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_5/EditReviewModal.jsx).

### Task 5: ChatGPT Refactored API Call (`async/await` & Error Handling)
- Created in [`useFirestoreReviews.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_5/useFirestoreReviews.js) & [`refactored-firestore-api.md`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_5/refactored-firestore-api.md).
