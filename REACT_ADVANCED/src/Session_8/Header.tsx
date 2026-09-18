import { useTheme } from "./ThemeContext";

export default function Header() {
  const { state, dispatch } = useTheme();

  return (
    <header
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: state.theme === "light" ? "#f0f0f0" : "#333",
        color: state.theme === "light" ? "#333" : "#f0f0f0",
        transition: "all 0.3s ease"
      }}
    >
      <h2>Current Theme: {state.theme.toUpperCase()}</h2>
      <button 
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: state.theme === "light" ? "#333" : "#f0f0f0",
          color: state.theme === "light" ? "#f0f0f0" : "#333",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        Toggle Theme
      </button>
    </header>
  );
}
