import { createContext, useContext, useMemo, useReducer } from "react";

const FavoritesContext = createContext<any>(null);

const favoritesReducer = (state: any[], action: any) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [ ...state, action.payload ]; 
    case "REMOVE_FAVORITE":
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  const contextValue = useMemo(() => {
    return { favorites, dispatch };
  }, [favorites, dispatch]);

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
};
