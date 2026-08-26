import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <h1>Home Page - Welcome to Music Portal</h1>
      <p>Discover trending playlists and top artists.</p>
    </div>
  );
}
