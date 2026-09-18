# Session 8: Context API Deep Dive (Part 2)

This directory contains the solutions for the Session 8 tasks, focusing on advanced Context API patterns, reducers, and performance optimizations.

## Task 1: Theme Context with `useReducer`
- **Files:** `ThemeContext.tsx`, `Header.tsx`
- **Solution:** Created a `ThemeContext` coupled with a `themeReducer` that handles a `TOGGLE_THEME` action. The `Header` component consumes this context using a custom `useTheme` hook, allowing it to dynamically apply light/dark styling and dispatch the toggle action.

## Task 2: Nested Context Providers (Favorites Feature)
- **Files:** `UserContext.tsx`, `FavoritesContext.tsx`, `RestaurantList.tsx`, `Session8App.tsx`
- **Solution:** Set up a nested provider structure (`<UserProvider>` wrapping `<FavoritesProvider>`). Implemented a `favoritesReducer` that manages an array of restaurant IDs. The `RestaurantList` component consumes both contexts and dispatches `ADD_FAVORITE` or `REMOVE_FAVORITE` based on whether a restaurant is currently in the favorites list.

## Task 3: Performance Optimization with `useMemo`
- **Files:** `FavoritesContext.tsx`
- **Solution:** Refactored the `FavoritesProvider` to wrap the `contextValue` object in `useMemo`. By setting `[favorites, dispatch]` as dependencies, we ensure the context value reference only changes when the actual state changes, preventing unnecessary re-renders in child components.

## Task 4: Extending the Auth Reducer
- **Files:** `AuthContext.tsx`, `InstagramProfile.tsx`
- **Solution:** Scaffolded a dummy `AuthContext` to manage a user's login state. Extended the `authReducer` by adding a new `UPDATE_DISPLAY_NAME` case, which updates the nested `user.displayName` while preserving the `isAuthenticated` state. The `InstagramProfile` component dispatches this action from an input field to update the user's name immediately.

## Task 5: AI-Generated Shopping Cart Reducer
As part of the assignment to use AI for generating boilerplate code, here is the prompt and the resulting code.

**Prompt Used:**
> "Write a React useReducer function for managing a shopping cart. The state should be an array of items (each with id, name, price, quantity). The reducer should handle 'ADD_ITEM', 'REMOVE_ITEM', and 'CLEAR_CART'. If 'ADD_ITEM' is dispatched for an existing item, it should increment the quantity instead of adding a duplicate row."

**Generated Reducer Code:**
```javascript
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const newState = [...state];
        newState[existingItemIndex] = {
          ...newState[existingItemIndex],
          quantity: newState[existingItemIndex].quantity + action.payload.quantity
        };
        return newState;
      }
      // New item
      return [...state, action.payload];
      
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
      
    case 'CLEAR_CART':
      return [];
      
    default:
      return state;
  }
};
```
*Integration Note: This reducer would be integrated into a `CartContext` exactly like the `FavoritesContext` setup, using `useReducer(cartReducer, [])`.*
