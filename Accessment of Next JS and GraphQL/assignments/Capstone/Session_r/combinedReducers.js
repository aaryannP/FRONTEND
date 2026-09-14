import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';

/**
 * PART B TASK 1: Shopping Cart Reducer
 */
export function cartReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if product already exists, increment quantity
      const existingIndex = state.findIndex((item) => item.id === action.payload.id);
      if (existingIndex >= 0) {
        return state.map((item, idx) =>
          idx === existingIndex ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}

/**
 * PART B TASK 3: Wishlist Reducer
 */
export function wishlistReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.some((item) => item.id === action.payload.id)) return state;
      return [...state, action.payload];

    case 'REMOVE_FROM_WISHLIST':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}

/**
 * PART B TASK 4: Async Offers Reducer
 */
export function offersReducer(state = { items: [], loading: false }, action) {
  switch (action.type) {
    case 'FETCH_OFFERS_START':
      return { ...state, loading: true };

    case 'FETCH_OFFERS_SUCCESS':
      return { items: action.payload, loading: false };

    default:
      return state;
  }
}

/**
 * PART B TASK 3: Combine Reducers using Redux combineReducers
 */
const rootReducer = combineReducers({
  playlist: playlistReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  offers: offersReducer,
});

export default rootReducer;
