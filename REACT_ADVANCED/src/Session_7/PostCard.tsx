import { useTheme } from "./ThemeContext";

export function PostCard() {
  const { theme } = useTheme();

  const cardStyle = {
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#444',
    color: theme === 'light' ? '#333' : '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cardStyle}>
      <h3>A Deeply Nested Post</h3>
      <p>This component is nested 3 levels deep, but doesn't need to receive the theme via props!</p>
    </div>
  );
}
