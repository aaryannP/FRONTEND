import React from 'react';
import { useAuth } from './AuthContext';
import LogoutButton from './LogoutButton';

/**
 * TASK 3: Protected Spotify User Dashboard Page
 * Displays user's email at the top and renders Spotify media playlists.
 */
export default function SpotifyDashboard() {
  const { currentUser } = useAuth();

  const userPlaylists = [
    { id: 1, title: 'Coding Focus Lofi', count: 48, image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=200' },
    { id: 2, title: 'Top Hits 2026', count: 50, image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200' },
    { id: 3, title: 'Synthwave Drive', count: 35, image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200' },
  ];

  return (
    <div style={styles.dashboardContainer}>
      
      {/* TASK 2 Requirement: Top Header Bar displaying User Email */}
      <header style={styles.topHeader}>
        <div style={styles.brandGroup}>
          <span style={styles.logo}>🟢 Spotify</span>
          <span style={styles.badge}>PREMIUM DASHBOARD</span>
        </div>

        <div style={styles.userProfileGroup}>
          <span style={styles.userEmailText}>
            👤 Logged in as: <strong>{currentUser?.email}</strong>
          </span>
          {/* TASK 5 Logout Button */}
          <LogoutButton />
        </div>
      </header>

      {/* Main Dashboard Body */}
      <main style={styles.mainContent}>
        <section style={styles.welcomeBanner}>
          <h1 style={styles.welcomeTitle}>Good Evening, {currentUser?.displayName}!</h1>
          <p style={styles.subText}>Your custom music playlists and recommendations are ready.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeader}>Your Favorite Playlists</h2>
          <div style={styles.playlistGrid}>
            {userPlaylists.map((pl) => (
              <div key={pl.id} style={styles.playlistCard}>
                <img src={pl.image} alt={pl.title} style={styles.cardImg} />
                <h3 style={styles.cardTitle}>{pl.title}</h3>
                <p style={styles.cardCount}>{pl.count} Tracks</p>
                <button style={styles.playBtn}>▶ Play</button>
              </div>
            ))}
          </div>
        </section>

        {/* Player Bar */}
        <div style={styles.playerBar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '24px' }}>🎵</span>
            <div>
              <strong style={{ display: 'block', fontSize: '14px' }}>Blinding Lights</strong>
              <span style={{ fontSize: '12px', color: '#b3b3b3' }}>The Weeknd</span>
            </div>
          </div>
          <div style={{ color: '#1db954', fontWeight: 'bold' }}>
            [ ⏮ ] &nbsp; [ ▶ ] &nbsp; [ ⏭ ] &nbsp; (02:45 / 03:20)
          </div>
        </div>

      </main>
    </div>
  );
}

const styles = {
  dashboardContainer: {
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Inter', sans-serif",
    paddingBottom: '100px',
  },
  topHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#000000',
    borderBottom: '1px solid #282828',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  brandGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logo: {
    fontSize: '22px',
    fontWeight: '900',
    color: '#1db954',
  },
  badge: {
    fontSize: '10px',
    fontWeight: '800',
    backgroundColor: '#282828',
    color: '#1db954',
    padding: '4px 8px',
    borderRadius: '10px',
  },
  userProfileGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  userEmailText: {
    fontSize: '13px',
    color: '#b3b3b3',
  },
  mainContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '32px 24px',
  },
  welcomeBanner: {
    marginBottom: '36px',
    padding: '24px',
    backgroundColor: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    borderRadius: '12px',
  },
  welcomeTitle: {
    fontSize: '2rem',
    fontWeight: '900',
    margin: '0 0 8px 0',
  },
  subText: {
    color: '#b3b3b3',
    margin: 0,
  },
  section: {
    marginBottom: '32px',
  },
  sectionHeader: {
    fontSize: '1.4rem',
    fontWeight: '800',
    marginBottom: '20px',
    color: '#1db954',
  },
  playlistGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  playlistCard: {
    backgroundColor: '#181818',
    padding: '16px',
    borderRadius: '10px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
  },
  cardImg: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '15px',
    fontWeight: '700',
    margin: '0 0 4px 0',
  },
  cardCount: {
    fontSize: '12px',
    color: '#b3b3b3',
    margin: '0 0 12px 0',
  },
  playBtn: {
    width: '100%',
    backgroundColor: '#1db954',
    color: '#000',
    border: 'none',
    padding: '8px',
    borderRadius: '20px',
    fontWeight: '800',
    cursor: 'pointer',
  },
  playerBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#181818',
    borderTop: '1px solid #282828',
    padding: '12px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
