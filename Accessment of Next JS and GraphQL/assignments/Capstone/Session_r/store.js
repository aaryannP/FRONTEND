import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './combinedReducers';
import { addSong } from './actions';

/**
 * TASK 3 & PART B TASK 4 & 5: REDUX STORE SETUP WITH THUNK & DEVTOOLS
 */

// Enable Redux DevTools Extension integration
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// ==============================================================================
// TASK 3 REQUIREMENT: DISPATCH TWO ADD_SONG ACTIONS & LOG UPDATED STATE
// ==============================================================================
console.log('=== TASK 3: INITIAL REDUX STORE STATE ===', store.getState());

// Dispatch 1: Add 'Kesariya'
store.dispatch(addSong('Kesariya'));
console.log('=== TASK 3: STATE AFTER DISPATCH 1 (Kesariya) ===', store.getState().playlist);

// Dispatch 2: Add 'Shape of You'
store.dispatch(addSong('Shape of You'));
console.log('=== TASK 3: STATE AFTER DISPATCH 2 (Shape of You) ===', store.getState().playlist);

export default store;
