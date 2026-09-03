import React, { useEffect } from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { printZomatoApiConfig, printSpotifyApiConfig } from '../utils/api';

export default function Home() {
  // Task 3: Read NEXT_PUBLIC_SPOTIFY_API_KEY from process.env
  const spotifyKey = process.env.NEXT_PUBLIC_SPOTIFY_API_KEY;
  const mapsKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;

  useEffect(() => {
    // Task 3 Logging
    console.log('=== Task 3: Logged Environment Variables in index.js ===');
    console.log('NEXT_PUBLIC_SPOTIFY_API_KEY:', process.env.NEXT_PUBLIC_SPOTIFY_API_KEY);
    console.log('NEXT_PUBLIC_MAPS_API_KEY:', process.env.NEXT_PUBLIC_MAPS_API_KEY);

    // Task 4 Logging via utils/api.js helper function
    printZomatoApiConfig();
    printSpotifyApiConfig();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh' }}>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ color: '#1db954', fontSize: '2.5rem' }}>🎵 Spotify Playlist Viewer</h1>
        <p style={{ color: '#b3b3b3' }}>Next.js Scalable Architecture with Environment Variable Logging</p>
      </header>

      {/* Env Vars Display Section */}
      <section style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '8px', marginBottom: '32px', borderLeft: '4px solid #1db954' }}>
        <h2 style={{ fontSize: '1.2rem', marginTop: 0 }}>🔑 Loaded Environment Variables:</h2>
        <ul>
          <li><strong>NEXT_PUBLIC_SPOTIFY_API_KEY:</strong> <code>{spotifyKey}</code></li>
          <li><strong>NEXT_PUBLIC_MAPS_API_KEY:</strong> <code>{mapsKey}</code></li>
        </ul>
        <p style={{ fontSize: '12px', color: '#888' }}>
          * Check browser console (F12) to see <code>process.env</code> and <code>utils/api.js</code> logs.
        </p>
      </section>

      {/* Featured Playlist Components Demo */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Featured Playlists</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <PlaylistCard title="Synthwave Essentials" creator="Cyber Beats" songCount={45} />
          <PlaylistCard title="Lofi Coding Chill" creator="Dev Studio" songCount={82} />
          <PlaylistCard title="Top Hits 2026" creator="Spotify Editorial" songCount={50} />
        </div>
      </section>
    </div>
  );
}
