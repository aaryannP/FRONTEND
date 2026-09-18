import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext(null);

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return (
        state.theme === "light"
        ? { theme: "dark" }
        : { theme: "light" }
      );
  
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("Use theme inside theme context provider");

  return context;
};
