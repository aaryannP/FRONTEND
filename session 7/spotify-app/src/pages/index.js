import Navbar from '../components/Navbar';

export default function HomeIndex() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <h1>Session 7: Next.js Routing & Static Paths Demo</h1>
      <p>Click the navigation links above or select a pre-rendered playlist below:</p>
      <ul>
        <li><a href="/playlists/101" style={{ color: '#a855f7' }}>Playlist #101 (Pre-rendered)</a></li>
        <li><a href="/playlists/202" style={{ color: '#a855f7' }}>Playlist #202 (Pre-rendered)</a></li>
        <li><a href="/playlists/303" style={{ color: '#a855f7' }}>Playlist #303 (Pre-rendered)</a></li>
        <li><a href="/product/P-990" style={{ color: '#22c55e' }}>Flipkart Product P-990 (SSR)</a></li>
      </ul>
    </div>
  );
}
