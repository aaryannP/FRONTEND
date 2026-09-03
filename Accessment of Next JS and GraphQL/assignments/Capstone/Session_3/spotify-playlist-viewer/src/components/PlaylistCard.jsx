import React from 'react';

export default function PlaylistCard({ title, creator, songCount, coverImg }) {
  return (
    <div style={styles.card}>
      <img src={coverImg || 'https://via.placeholder.com/200'} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.subtitle}>By {creator}</p>
      <span style={styles.badge}>{songCount} Songs</span>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#181818',
    color: '#ffffff',
    padding: '16px',
    borderRadius: '8px',
    width: '200px',
    fontFamily: 'sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '12px',
  },
  title: {
    fontSize: '16px',
    fontWeight: '700',
    margin: '0 0 4px 0',
  },
  subtitle: {
    fontSize: '13px',
    color: '#b3b3b3',
    margin: '0 0 8px 0',
  },
  badge: {
    fontSize: '11px',
    backgroundColor: '#1db954',
    color: '#000',
    padding: '2px 8px',
    borderRadius: '10px',
    fontWeight: '700',
  },
};
