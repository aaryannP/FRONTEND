import { useTheme } from './ThemeContext';
import { ToggleThemeButton } from './ToggleThemeButton';

export function Navbar() {
  const { theme } = useTheme();
  
  return (
    <nav style={{ 
      padding: '1rem', 
      borderBottom: '1px solid #ccc', 
      backgroundColor: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>InstaTheme Demo</h2>
      <ToggleThemeButton />
    </nav>
  );
}
