import React from 'react';

/**
 * TASK 1: PlaylistCard Component
 * Generated using GitHub Copilot auto-suggestions in VS Code.
 *
 * Copilot Prompt used:
 * // Create a reusable React functional component called PlaylistCard that accepts
 * // playlistName, creatorName, songCount, coverImage, and isLiked as props.
 * // Render a modern music card with play button, creator details, and song count badge.
 *
 * @param {Object} props
 * @param {string} props.playlistName - Name of the music playlist
 * @param {string} props.creatorName - Name of the playlist creator/curator
 * @param {number} props.songCount - Total number of songs in the playlist
 * @param {string} [props.coverImage] - URL for playlist cover artwork
 * @param {boolean} [props.isLiked] - Whether playlist is marked as favorite
 */
const PlaylistCard = ({
  playlistName = 'Chill Vibes 2026',
  creatorName = 'Spotify Curated',
  songCount = 45,
  coverImage = 'https://via.placeholder.com/300x300?text=Chill+Vibes',
  isLiked = false,
}) => {
  return (
    <div style={styles.card}>
      {/* Playlist Artwork */}
      <div style={styles.imageWrapper}>
        <img src={coverImage} alt={playlistName} style={styles.coverImage} />
        <button style={styles.playButton} title="Play Playlist">
          ▶
        </button>
      </div>

      {/* Playlist Metadata Details */}
      <div style={styles.details}>
        <div style={styles.headerRow}>
          <h3 style={styles.title}>{playlistName}</h3>
          <span style={{ color: isLiked ? '#1db954' : '#b3b3b3', cursor: 'pointer' }}>
            {isLiked ? '❤️' : '🤍'}
          </span>
        </div>

        <p style={styles.creator}>Created by <span style={styles.creatorName}>{creatorName}</span></p>

        <div style={styles.footerRow}>
          <span style={styles.badge}>🎵 {songCount} Songs</span>
          <span style={styles.duration}>~ 2 hrs 15 mins</span>
        </div>
      </div>
    </div>
  );
};

// Inline Styles for Spotify-inspired Dark Mode Music Card
const styles = {
  card: {
    width: '260px',
    backgroundColor: '#181818',
    borderRadius: '8px',
    padding: '16px',
    color: '#ffffff',
    fontFamily: "'CircularStd', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    cursor: 'pointer',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '220px',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '12px',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  playButton: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: '#1db954',
    color: '#000000',
    border: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '16px',
    fontWeight: '700',
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '200px',
  },
  creator: {
    fontSize: '13px',
    color: '#b3b3b3',
    margin: 0,
  },
  creatorName: {
    color: '#ffffff',
    fontWeight: '600',
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px',
    fontSize: '12px',
  },
  badge: {
    backgroundColor: '#282828',
    padding: '4px 8px',
    borderRadius: '12px',
    color: '#1db954',
    fontWeight: '600',
  },
  duration: {
    color: '#b3b3b3',
  },
};

export default PlaylistCard;
