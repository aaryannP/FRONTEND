import React from 'react';
import { useAuth } from './AuthContext';
import LoginForm from './LoginForm';

/**
 * TASK 3: Protected Route Guard Component
 * Renders protected dashboard if authenticated, otherwise redirects to login.
 */
export default function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <span style={styles.spinner}>🟢 Checking Authentication Status...</span>
      </div>
    );
  }

  // TASK 3 Constraint: If not authenticated, redirect to Login form
  if (!currentUser) {
    return (
      <div style={styles.redirectNoticeBox}>
        <div style={styles.bannerNotice}>
          ⚠️ Access Restricted: You must log in to view the Spotify User Dashboard.
        </div>
        <LoginForm />
      </div>
    );
  }

  return children;
}

const styles = {
  loadingContainer: {
    padding: '60px',
    textAlign: 'center',
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
  },
  spinner: {
    fontSize: '18px',
    color: '#1db954',
    fontWeight: '700',
  },
  redirectNoticeBox: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  bannerNotice: {
    backgroundColor: 'rgba(255, 152, 0, 0.15)',
    color: '#ff9800',
    border: '1px solid #ff9800',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '14px',
  },
};
