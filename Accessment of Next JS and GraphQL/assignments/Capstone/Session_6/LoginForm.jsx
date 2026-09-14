import React, { useState } from 'react';
import { useAuth } from './AuthContext';

/**
 * TASK 1: Email / Password Login Form Component
 */
export default function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [welcomeMsg, setWelcomeMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setWelcomeMsg('');

    if (!email.trim() || !password.trim()) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await login(email, password);
      // TASK 1 Requirement: Welcome Message on Successful Login
      setWelcomeMsg(`🎉 Welcome back, ${user.email}! Sign in successful.`);
      
      if (onSuccess) {
        onSuccess(user);
      }
    } catch (err) {
      setErrorMsg('Login failed. Please check credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerGroup}>
        <span style={styles.badge}>🔐 SECURE AUTHENTICATION</span>
        <h2 style={styles.title}>Spotify Account Login</h2>
      </div>

      {welcomeMsg && <div style={styles.successBanner}>{welcomeMsg}</div>}
      {errorMsg && <div style={styles.errorBanner}>{errorMsg}</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={styles.input}
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting} style={styles.submitBtn}>
          {isSubmitting ? 'Signing In...' : 'Sign In to Dashboard →'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#181818',
    color: '#ffffff',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    maxWidth: '420px',
    margin: '40px auto',
    fontFamily: "'Inter', sans-serif",
    border: '1px solid #282828',
  },
  headerGroup: {
    marginBottom: '24px',
    textAlign: 'center',
  },
  badge: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#1db954',
    backgroundColor: 'rgba(29, 185, 84, 0.15)',
    padding: '4px 10px',
    borderRadius: '12px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '800',
    marginTop: '10px',
    color: '#ffffff',
  },
  successBanner: {
    backgroundColor: 'rgba(46, 125, 50, 0.2)',
    color: '#81c784',
    border: '1px solid #2e7d32',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '13px',
    marginBottom: '16px',
    textAlign: 'center',
  },
  errorBanner: {
    backgroundColor: 'rgba(198, 40, 40, 0.2)',
    color: '#ef5350',
    border: '1px solid #c62828',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '13px',
    marginBottom: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    color: '#b3b3b3',
    fontWeight: '600',
  },
  input: {
    padding: '12px',
    backgroundColor: '#282828',
    border: '1px solid #3e3e3e',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
  },
  submitBtn: {
    backgroundColor: '#1db954',
    color: '#000000',
    padding: '14px',
    border: 'none',
    borderRadius: '24px',
    fontWeight: '800',
    fontSize: '15px',
    cursor: 'pointer',
    marginTop: '8px',
  },
};
