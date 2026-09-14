import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

/**
 * TASK 3: BookMyShow Movie Watchlist Tracker Component
 * Fetches all documents from Firestore 'watchlists' collection and renders movie name & status.
 */
export default function WatchlistTracker() {
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback initial sample data for offline rendering
  const fallbackWatchlist = [
    { id: 'm1', movieName: 'Kalki 2898 AD', status: 'watched', genre: 'Sci-Fi Action' },
    { id: 'm2', movieName: 'Stree 2', status: 'not watched', genre: 'Horror Comedy' },
    { id: 'm3', movieName: 'Pushpa 2: The Rule', status: 'not watched', genre: 'Action Drama' },
    { id: 'm4', movieName: 'Dune: Part Two', status: 'watched', genre: 'Sci-Fi' },
  ];

  // TASK 3 Requirement: Fetch items from Firestore 'watchlists' collection
  useEffect(() => {
    async function loadWatchlist() {
      try {
        const watchlistsCol = collection(db, 'watchlists');
        const snapshot = await getDocs(watchlistsCol);
        
        if (!snapshot.empty) {
          const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setWatchlist(items);
        } else {
          // If Firestore is empty, use fallback items
          setWatchlist(fallbackWatchlist);
        }
      } catch (err) {
        console.warn("⚠️ Firestore load note (using fallback demo list):", err.message);
        setWatchlist(fallbackWatchlist);
      } finally {
        setIsLoading(false);
      }
    }

    loadWatchlist();
  }, []);

  return (
    <div style={styles.card}>
      <div style={styles.headerRow}>
        <h3 style={styles.title}>🎬 Movie Watchlist Tracker (BookMyShow)</h3>
        <span style={styles.badge}>{watchlist.length} Movies</span>
      </div>

      {isLoading ? (
        <p style={{ color: '#888' }}>Loading watchlist from Firestore...</p>
      ) : (
        <ul style={styles.list}>
          {watchlist.map((item) => {
            const isWatched = item.status === 'watched';
            return (
              <li key={item.id} style={styles.listItem}>
                <div>
                  <h4 style={styles.movieName}>{item.movieName}</h4>
                  <span style={styles.genre}>{item.genre || 'Cinema'}</span>
                </div>

                <span
                  style={{
                    ...styles.statusBadge,
                    backgroundColor: isWatched ? '#e8f5e9' : '#fff3e0',
                    color: isWatched ? '#2e7d32' : '#e65100',
                    border: `1px solid ${isWatched ? '#a5d6a7' : '#ffe0b2'}`,
                  }}
                >
                  {isWatched ? '✓ Watched' : '⏳ Not Watched'}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    border: '1px solid #e0e0e0',
    fontFamily: "'Roboto', sans-serif",
    maxWidth: '500px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  title: {
    color: '#f84464', // BookMyShow Pink/Red
    margin: 0,
    fontSize: '18px',
    fontWeight: '800',
  },
  badge: {
    backgroundColor: '#f84464',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '700',
    padding: '4px 10px',
    borderRadius: '12px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 14px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    border: '1px solid #eee',
  },
  movieName: {
    margin: '0 0 2px 0',
    fontSize: '15px',
    fontWeight: '700',
    color: '#212121',
  },
  genre: {
    fontSize: '12px',
    color: '#757575',
  },
  statusBadge: {
    fontSize: '12px',
    fontWeight: '700',
    padding: '4px 10px',
    borderRadius: '12px',
  },
};
