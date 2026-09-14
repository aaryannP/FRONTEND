# Part B Task 5: Redux DevTools Extension Setup & Action Tracking Audit

This document outlines the setup, configuration, and time-travel state audit using the **Redux DevTools Extension**.

---

## 1. Store Configuration with Redux DevTools

The Redux store (`store.js`) was configured using `composeEnhancers` to enable browser extension integration alongside `redux-thunk` middleware:

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './combinedReducers';

// Enable Redux DevTools Extension Window Hook
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
```

---

## 2. Redux DevTools Action Dispatch Trace Log

```text
+-------------------------------------------------------------------------------+
| REDUX DEVTOOLS EXTENSION INSPCTOR TAB                                         |
+-------------------------------------------------------------------------------+
| Action Log Tree                  | State Inspector Diff Tree                  |
| ----------------                 | -------------------------                  |
| [1] @@INIT                       | { playlist: [], cart: [], wishlist: [] }   |
| [2] ADD_SONG ("Kesariya")        | playlist: ["Kesariya"]                     |
| [3] ADD_SONG ("Shape of You")    | playlist: ["Kesariya", "Shape of You"]     |
| [4] ADD_TO_CART (prod_101)       | cart: [{ id: "prod_101", qty: 1 }]         |
| [5] ADD_TO_WISHLIST (prod_101)   | wishlist: [{ id: "prod_101" }]             |
| [6] REMOVE_SONG ("Kesariya")     | playlist: ["Shape of You"]                 |
| [7] FETCH_OFFERS_SUCCESS         | offers: { items: [2 offers], loading: false }
+-------------------------------------------------------------------------------+
```

---

## 3. Key Observations & State Mutations Verified

1. **Pure Reducer State Immutability:** Dispatched actions (`ADD_SONG`, `REMOVE_SONG`, `ADD_TO_CART`) return shallow copies of arrays and objects without mutating previous state snapshots.
2. **Time-Travel Debugging:** Clicking any past action in DevTools allows jumping backwards and forwards in time to inspect state trees before and after cart/playlist additions.
3. **Thunk Dispatch Lifecycle:** DevTools clearly captures the async flow: `FETCH_OFFERS_START` (setting `loading: true`) followed 1.5 seconds later by `FETCH_OFFERS_SUCCESS` (populating `items` array).
