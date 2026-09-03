import React, { useState } from 'react';
import useVideos from './useVideos';

/**
 * TASK 4: YouTubeVideoList Component
 * Refactored using GitHub Copilot auto-suggestions to consume useVideos hook.
 */
export default function YouTubeVideoList() {
  const [searchTerm, setSearchTerm] = useState('React Next.js');
  const { videos, loading, error } = useVideos(searchTerm);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.heading}>▶ YouTube Video Explorer</h2>
        
        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search YouTube videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </header>

      {/* Loading State */}
      {loading && (
        <div style={styles.loadingState}>
          <p>⏳ Loading YouTube video results for "{searchTerm}"...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div style={styles.errorState}>
          <p>⚠️ Error: {error}</p>
        </div>
      )}

      {/* Video Grid */}
      {!loading && !error && (
        <div style={styles.grid}>
          {videos.map((video) => (
            <div key={video.id} style={styles.videoCard}>
              <img src={video.thumbnail} alt={video.title} style={styles.thumbnail} />
              <div style={styles.info}>
                <h4 style={styles.videoTitle}>{video.title}</h4>
                <p style={styles.channelName}>{video.channel}</p>
                <p style={styles.meta}>{video.views} • 2 days ago</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  heading: {
    color: '#ff0000',
    margin: 0,
  },
  searchContainer: {
    width: '300px',
  },
  searchInput: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  loadingState: {
    textAlign: 'center',
    padding: '40px',
    color: '#666',
  },
  errorState: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '12px',
    borderRadius: '8px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '20px',
  },
  videoCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  thumbnail: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
  },
  info: {
    padding: '12px',
  },
  videoTitle: {
    fontSize: '14px',
    margin: '0 0 6px 0',
    lineHeight: '1.3',
  },
  channelName: {
    fontSize: '12px',
    color: '#666',
    margin: '0 0 4px 0',
  },
  meta: {
    fontSize: '11px',
    color: '#888',
    margin: 0,
  },
};
