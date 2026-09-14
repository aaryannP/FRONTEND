import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import LoginForm from './LoginForm';
import ProtectedRoute from './ProtectedRoute';
import SpotifyDashboard from './SpotifyDashboard';

/**
 * CAPSTONE SESSION 6 MASTER DEMO CONTAINER
 * Unifies AuthProvider, Context State, Protected Spotify Dashboard, and Session Persistence.
 */
function MainApp() {
  const { currentUser } = useAuth();

  return (
    <div>
      {/* If logged in, show protected dashboard. If logged out, render ProtectedRoute guard */}
      {currentUser ? (
        <SpotifyDashboard />
      ) : (
        <ProtectedRoute>
          <SpotifyDashboard />
        </ProtectedRoute>
      )}
    </div>
  );
}

export default function AppDemo() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
