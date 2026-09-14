import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSong, removeSong } from './actions';

/**
 * TASK 4 & 5: Spotify Playlist Manager Component
 * Consumes Redux store via useSelector and dispatches addSong / removeSong actions.
 */
export default function PlaylistManager() {
  const [inputSong, setInputSong] = useState('');
  
  // TASK 4: Access playlist state from Redux store via useSelector
  const playlist = useSelector((state) => state.playlist || []);
  const dispatch = useDispatch();

  const handleAddSong = (e) => {
    e.preventDefault();
    if (!inputSong.trim()) return;
    
    // Dispatch addSong Redux action
    dispatch(addSong(inputSong.trim()));
    setInputSong('');
  };

  const handleRemoveSong = (songName) => {
    // TASK 5: Dispatch removeSong Redux action when clicking Remove button
    dispatch(removeSong(songName));
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerGroup}>
        <span style={styles.badge}>🟢 SPOTIFY REDUX STORE</span>
        <h2 style={styles.title}>Playlist Track Manager</h2>
      </div>

      {/* Add Song Form */}
      <form onSubmit={handleAddSong} style={styles.formRow}>
        <input
          type="text"
          value={inputSong}
          onChange={(e) => setInputSong(e.target.value)}
          placeholder="Enter new song name (e.g. Believer)"
          style={styles.input}
        />
        <button type="submit" style={styles.addBtn}>
          + Add Track
        </button>
      </form>

      {/* TASK 4: Display List of Songs in Playlist (Auto-updating) */}
      <div style={{ marginTop: '20px' }}>
        <h3 style={styles.subHeading}>Current Playlist Tracks ({playlist.length})</h3>

        {playlist.length === 0 ? (
          <p style={{ color: '#888', fontStyle: 'italic' }}>Your playlist is empty. Add some tracks above!</p>
        ) : (
          <ul style={styles.songList}>
            {playlist.map((song, index) => (
              <li key={index} style={styles.songItem}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={styles.songNum}>{index + 1}.</span>
                  <span style={styles.songTitle}>🎵 {song}</span>
                </div>

                {/* TASK 5: Remove Button dispatching removeSong */}
                <button
                  onClick={() => handleRemoveSong(song)}
                  style={styles.removeBtn}
                  title={`Remove ${song} from playlist`}
                >
                  ✕ Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#181818',
    color: '#ffffff',
    padding: '28px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    maxWidth: '520px',
    margin: '20px auto',
    fontFamily: "'Inter', sans-serif",
    border: '1px solid #282828',
  },
  headerGroup: {
    marginBottom: '16px',
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
    marginTop: '8px',
    margin: '8px 0 0 0',
  },
  formRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '16px',
  },
  input: {
    flex: 1,
    padding: '12px',
    backgroundColor: '#282828',
    border: '1px solid #3e3e3e',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
  },
  addBtn: {
    backgroundColor: '#1db954',
    color: '#000000',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '800',
    fontSize: '14px',
    cursor: 'pointer',
  },
  subHeading: {
    fontSize: '15px',
    color: '#b3b3b3',
    marginBottom: '12px',
  },
  songList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  songItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #333',
  },
  songNum: {
    fontSize: '13px',
    color: '#1db954',
    fontWeight: '700',
  },
  songTitle: {
    fontSize: '14px',
    fontWeight: '600',
  },
  removeBtn: {
    backgroundColor: 'rgba(255, 82, 82, 0.15)',
    color: '#ff5252',
    border: '1px solid #ff5252',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '700',
    cursor: 'pointer',
  },
};
