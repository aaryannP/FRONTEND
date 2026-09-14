import React from 'react';

/**
 * TASK 1: Netlify React Deployment Test Component
 * Displays "React Deployment Test" on the homepage.
 */
export default function ReactDeploymentTest() {
  return (
    <div style={styles.container}>
      <header style={styles.card}>
        <span style={styles.badge}>🚀 LIVE DEPLOYMENT TEST</span>
        {/* TASK 1 Requirement: Displays 'React Deployment Test' */}
        <h1 style={styles.title}>React Deployment Test</h1>
        <p style={styles.subtitle}>
          This React application has been successfully built and deployed live to Netlify!
        </p>

        <div style={styles.infoBox}>
          <p><strong>Platform:</strong> Netlify / Vercel Web Hosting</p>
          <p><strong>Live URL:</strong> <a href="https://react-deployment-test-2026.netlify.app" target="_blank" rel="noreferrer" style={{ color: '#00c7b7' }}>https://react-deployment-test-2026.netlify.app</a></p>
          <p><strong>Status:</strong> 🟢 Production Build Active (HTTP 200 OK)</p>
        </div>
      </header>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0e1e25',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Inter', sans-serif",
    padding: '20px',
  },
  card: {
    backgroundColor: '#172a34',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
    textAlign: 'center',
    maxWidth: '520px',
    border: '1px solid #00c7b7',
  },
  badge: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#00c7b7',
    backgroundColor: 'rgba(0, 199, 183, 0.15)',
    padding: '4px 12px',
    borderRadius: '12px',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '900',
    marginTop: '16px',
    marginBottom: '8px',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: '1.05rem',
    color: '#a0b3c6',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  infoBox: {
    backgroundColor: '#0e1e25',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'left',
    fontSize: '13px',
    lineHeight: '1.8',
    color: '#e0e0e0',
  },
};
