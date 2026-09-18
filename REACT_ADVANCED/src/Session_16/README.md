# Session 16: Async Operations in Redux (Thunk)

This folder contains the implementation for Session 16 tasks.

## Tasks Completed

1. **Redux Thunk Setup**: Set up the Redux store with Thunk middleware (built into Redux Toolkit) in `store.ts` and wrapped the app in `App.tsx`. Tested with a simple async action.
2. **Fetch Thunk Action**: Created the `fetchRestaurants` async thunk using `createAsyncThunk` in `restaurantSlice.ts` to perform a GET request and store the result in the Redux state.
3. **UI and Loading State**: Built the `RestaurantList.tsx` component that consumes the Redux state. It dispatches the fetch action on mount and displays a "Loading..." message while the promise is pending.
4. **Error Handling**: Configured the `.rejected` case in our slice to store error messages. The UI correctly handles and displays these network errors to the user.
5. **Thunk Arguments & Filtering**: Refactored the thunk to accept a `city` argument. Added a text input to the UI so users can search and filter the list by city name before saving it to the store.

## API Detour

The assignment suggested using `https://api.sampleapis.com/restaurants/restaurants` as a mock data source. However, during development, we discovered this endpoint was returning a 404 (Not Found) HTML page. 

This resulted in a `JSON.parse: unexpected character at line 1 column 1` error because the fetch `res.json()` call was trying to parse an HTML error page. 

To resolve this, we switched to a robust public API (`https://jsonplaceholder.typicode.com/users`), pretending the user objects were restaurant data (since both share `id` and `name` properties). We also added an explicit `res.ok` check in the thunk to gracefully catch HTTP errors before parsing, effectively satisfying Task 4's error handling requirements!
