import React from 'react';

/**
 * TASK 1: Reusable Food Delivery Navbar Component (Zomato Style)
 * @param {string} activeLink - Current active route ('home' | 'orders' | 'cart' | 'profile')
 * @param {function} onNavigate - Navigation callback function
 */
export default function Navbar({ activeLink = 'home', onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'cart', label: 'Cart', icon: '🛒' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav style={styles.navContainer}>
      <div style={styles.brandGroup}>
        <span style={styles.brandLogo}>Zomato</span>
        <span style={styles.subTag}>Delivery</span>
      </div>

      <ul style={styles.navList}>
        {navItems.map((item) => {
          const isActive = activeLink.toLowerCase() === item.id;
          return (
            <li key={item.id} style={styles.navListItem}>
              <button
                onClick={() => onNavigate && onNavigate(item.id)}
                style={{
                  ...styles.navButton,
                  ...(isActive ? styles.activeNavButton : {}),
                }}
              >
                <span style={styles.icon}>{item.icon}</span>
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const styles = {
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 32px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    borderBottom: '1px solid #e8e8e8',
    fontFamily: "'Roboto', sans-serif",
  },
  brandGroup: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '6px',
  },
  brandLogo: {
    fontSize: '26px',
    fontWeight: '900',
    color: '#e23744', // Zomato Red
    fontStyle: 'italic',
    letterSpacing: '-0.5px',
  },
  subTag: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#828282',
    textTransform: 'uppercase',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '12px',
  },
  navListItem: {
    display: 'inline-block',
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 18px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#363636',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  activeNavButton: {
    color: '#ffffff',
    backgroundColor: '#e23744',
    boxShadow: '0 4px 12px rgba(226, 55, 68, 0.3)',
  },
  icon: {
    fontSize: '16px',
  },
};
