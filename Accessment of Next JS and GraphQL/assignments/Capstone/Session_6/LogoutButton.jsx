import React from 'react';
import { useAuth } from './AuthContext';

/**
 * TASK 5: ChatGPT Generated Logout Button Component
 * Updates Context API state and signs out user from Firebase Auth.
 */
export default function LogoutButton({ onLogoutSuccess }) {
  const { logout, currentUser } = useAuth();

  if (!currentUser) return null;

  const handleLogout = async () => {
    try {
      await logout();
      console.log('🟢 User signed out successfully from Firebase Auth & Context.');
      if (onLogoutSuccess) {
        onLogoutSuccess();
      }
    } catch (error) {
      console.error('🔴 Logout failed:', error);
    }
  };

  return (
    <button onClick={handleLogout} style={styles.logoutBtn} title="Sign Out">
      <span>🚪 Log Out</span>
    </button>
  );
}

const styles = {
  logoutBtn: {
    backgroundColor: '#282828',
    color: '#ffffff',
    border: '1px solid #3e3e3e',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '700',
    fontSize: '13px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.2s ease',
  },
};
