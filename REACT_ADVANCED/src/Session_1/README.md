# Session 1: Introduction to Advanced React Concepts

## Overview
This session focused on transitioning from fundamental React concepts (props and state) to more advanced architectural patterns like avoiding prop-drilling with Context and writing reusable logic with Custom Hooks.

## Topics Covered
- Component Reusability & Props
- State Management (`useState`)
- Prop Drilling and React Context API
- Advanced Hooks (Building Custom Hooks)

## Tasks Completed

1. **Props Practice (`PlaylistCard.tsx`)**
   - Built a reusable `PlaylistCard` component.
   - Practiced rendering multiple instances with different `songName` and `artist` props.

2. **State Practice (`LikeButton.tsx`)**
   - Built an interactive like counter similar to Instagram.
   - Used `useState` to track and display the number of button clicks.

3. **React Context (`Teleporter.tsx` & `UserContext.tsx`)**
   - Started with a "prop drilling" scenario where user data was unnecessarily passed through `Feed` and `Post` components.
   - Refactored the architecture by creating a `UserContext`.
   - Used `useContext` in the bottom-level `LikeButton` to "teleport" the data directly from the top-level provider, successfully removing the middle-man props.

4. **Custom Hooks (`useFetchData.ts` & `FlipkartProductList.tsx`)**
   - Extracted repetitive API fetching, loading, and error-handling logic into a reusable `useFetchData` custom hook.
   - Utilized the custom hook inside `FlipkartProductList` to fetch and display a grid of products from `fakestoreapi.com`.

## How to Run
To view the results of any specific task, simply change the import and return statement inside the main `App.tsx` file to point to the desired component from the `Session_1` folder.

Example for viewing Task 4:
```tsx
import FlipkartProductList from "./Session_1/FlipkartProductList";

export default function App() {
  return (
    <>
      <FlipkartProductList />
    </>
  );
}
```
