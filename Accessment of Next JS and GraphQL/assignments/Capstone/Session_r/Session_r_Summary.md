# Capstone — Session_r Complete Work

---

## 📁 Folder Location Constraint Verified
* **Target Path:** `assignments/Capstone/Session_r` (Custom folder name constraint met as requested).

---

## 📁 Files Created in `assignments/Capstone/Session_r/`

1. 💻 **`actions.js`** (Task 1, 5 & Part B)
   * Redux action creators (`addSong`, `removeSong`, `addToCart`, `removeFromCart`, `addToWishlist`, `removeFromWishlist`) and `fetchOffers` async thunk.

2. 💻 **`playlistReducer.js`** (Task 2 & 5)
   * `playlistReducer` handling `ADD_SONG` and `REMOVE_SONG` (using `.filter()` method) with test runner function `testPlaylistReducer()`.

3. 💻 **`combinedReducers.js`** (Part B Task 1 & 3)
   * `cartReducer`, `wishlistReducer`, and `offersReducer` combined via Redux `combineReducers`.

4. 💻 **`store.js`** (Task 3 & Part B Task 4 & 5)
   * Redux store setup using `createStore`, `thunk` middleware, and Redux DevTools Extension, initialized with pre-dispatched 'Kesariya' and 'Shape of You' tracks.

5. 💻 **`PlaylistManager.jsx`** (Task 4 & 5)
   * React Spotify Playlist component consuming store via `useSelector` and `useDispatch`, rendering track list with individual remove buttons.

6. 💻 **`ProductCard.jsx`** (Part B Task 2 & 4)
   * E-Commerce ProductCard component dispatching cart and wishlist actions, featuring a live async API offers banner powered by Redux-Thunk.

7. 📄 **`ReduxDevToolsReport.md`** (Part B Task 5)
   * Redux DevTools Extension setup guide, action dispatch tree trace, and state immutability verification report.

8. 💻 **`AppDemo.jsx`**
   * Master interactive container providing `<Provider store={store}>` to render both Spotify Playlist Manager and E-Commerce ProductCard.

---

## 📝 Detailed Task Solutions Summary

### Task 1 & 2: `addSong` / `removeSong` Actions & `playlistReducer` (.filter method)
- Created in [`actions.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_r/actions.js) & [`playlistReducer.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_r/playlistReducer.js).

### Task 3: Redux Store Setup & Pre-dispatching 'Kesariya' & 'Shape of You'
- Created in [`store.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_r/store.js).

### Task 4 & 5: React-Redux Integration (`PlaylistManager.jsx`)
- Created in [`PlaylistManager.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_r/PlaylistManager.jsx).

### Part B: Cart, Wishlist, Redux-Thunk `fetchOffers` & DevTools
- Created in [`combinedReducers.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_r/combinedReducers.js), [`ProductCard.jsx`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_r/ProductCard.jsx), & [`ReduxDevToolsReport.md`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/assignments/Capstone/Session_r/ReduxDevToolsReport.md).
