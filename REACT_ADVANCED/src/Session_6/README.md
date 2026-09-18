# Session 6 - useMemo & useCallback Hooks

**Disclaimer:** The topics covered in this assignment (memoization, `useMemo`, and `useCallback`) have not yet been taught in class. I completed this assignment using my current knowledge and with some AI assistance to ensure it was submitted on time.

## Tasks Completed

1. **Big List Rendering**: Created a component (`BigList`) that renders 1,000 dummy products and measured the initial render time.
2. **Filtering with `useMemo`**: Added a search input to filter the product list and wrapped the filtering logic in `useMemo` to prevent unnecessary recalculations.
3. **Favorite Toggle with `useCallback`**: Built a `PlaylistManager` and `SongItem` component. Used `useCallback` and functional state updates to memoize the favorite toggle function, preventing all songs from re-rendering when only one is clicked.
4. **Performance Refactoring**: Refactored a poorly optimized component (`Task4`) that re-rendered a heavy list on every counter click. Used `React.memo`, `useMemo`, and `useCallback` to eliminate the UI lag when interacting with unrelated state.

## ERP Assignment Variations & Notes

An off-shoot variation of this assignment appeared in the ERP portal with slightly different UI requirements (e.g., rendering a scrollable `ProductList` and a memoized `LikeButton` per item instead of a playlist/song tracker). Whether this repetition is due to a curriculum revision or portal quirk, the core React performance concepts remain identical:

- **List Memoization (`useMemo`):** Covered in `BigList.tsx`, where 1,000 dummy products and search filtering are memoized to avoid expensive recalculations on re-render.
- **Function Memoization (`useCallback` & `React.memo`):** Covered in `PlaylistManager.tsx` and `SongItem.tsx`, demonstrating how reference equality prevents child components from unnecessary re-rendering when unrelated state changes.

The existing implementations in this session fully satisfy the learning objectives and performance optimization requirements of the variation prompt.
