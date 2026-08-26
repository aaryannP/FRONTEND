import Link from 'next/link';

// Simple Navbar component with next/link navigation
export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1.5rem', padding: '1rem 2rem', background: '#1e293b', borderRadius: '8px', marginBottom: '2rem' }}>
      <Link href="/home" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link href="/explore" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>Explore</Link>
      <Link href="/contact" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
      <Link href="/playlists/101" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: 'bold' }}>Playlist #101</Link>
      <Link href="/product/P-990" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: 'bold' }}>Product P-990</Link>
    </nav>
  );
}
