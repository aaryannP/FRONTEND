import React from 'react';

/**
 * TASK 2: Spotify-Style Playlist Card Component
 * @param {string} playlistName - Name of the playlist
 * @param {string} creatorName - Creator or artist name
 * @param {number} songCount - Number of songs in playlist
 * @param {string} albumImage - Thumbnail image URL
 */
export function PlaylistCard({ playlistName, creatorName, songCount, albumImage }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={albumImage || 'https://via.placeholder.com/200?text=Spotify+Playlist'}
          alt={playlistName}
          style={styles.image}
        />
        <button style={styles.playButton} title="Play Playlist">▶</button>
      </div>

      <div style={styles.details}>
        <h3 style={styles.title}>{playlistName}</h3>
        <p style={styles.creator}>By {creatorName}</p>
        <span style={styles.badge}>{songCount} Songs</span>
      </div>
    </div>
  );
}

/**
 * Demo wrapper rendering 3 different playlists via props
 */
export default function PlaylistSection() {
  const playlists = [
    {
      id: 1,
      playlistName: 'Lofi Beats for Coding',
      creatorName: 'ChilledCow',
      songCount: 84,
      albumImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      playlistName: 'Synthwave Neon Drive 2026',
      creatorName: 'RetroWave Studio',
      songCount: 52,
      albumImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      playlistName: 'Top Acoustic Hits',
      creatorName: 'Spotify Editorial',
      songCount: 65,
      albumImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionHeader}>🟢 Spotify Playlists (Props Demo)</h2>
      <div style={styles.grid}>
        {playlists.map((pl) => (
          <PlaylistCard
            key={pl.id}
            playlistName={pl.playlistName}
            creatorName={pl.creatorName}
            songCount={pl.songCount}
            albumImage={pl.albumImage}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '24px',
    backgroundColor: '#121212',
    color: '#ffffff',
    borderRadius: '12px',
    fontFamily: "'Inter', sans-serif",
  },
  sectionHeader: {
    fontSize: '20px',
    fontWeight: '800',
    marginBottom: '20px',
    color: '#1db954',
  },
  grid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    width: '200px',
    backgroundColor: '#181818',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
    transition: 'transform 0.2s ease',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: '12px',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    display: 'block',
  },
  playButton: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1db954',
    color: '#000000',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  title: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  creator: {
    fontSize: '13px',
    color: '#b3b3b3',
    margin: 0,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: '6px',
    backgroundColor: '#282828',
    color: '#1db954',
    fontSize: '11px',
    fontWeight: '700',
    padding: '3px 8px',
    borderRadius: '10px',
  },
};
