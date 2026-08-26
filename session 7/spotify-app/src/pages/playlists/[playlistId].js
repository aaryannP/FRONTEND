import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function PlaylistDetail({ playlist }) {
  const router = useRouter();

  // Fallback state handling if page isn't pre-rendered yet
  if (router.isFallback) {
    return <p style={{ padding: '2rem', color: 'white' }}>Loading Playlist...</p>;
  }

  const { playlistId } = router.query;

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <h1 style={{ color: '#a855f7' }}>Spotify Playlist View</h1>
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
        <h2>Playlist ID: {playlistId || playlist.id}</h2>
        <h3>Name: {playlist.name}</h3>
        <p>Genre: {playlist.genre}</p>
        <p>Total Tracks: {playlist.trackCount}</p>
      </div>
    </div>
  );
}

// Pre-rendering IDs: 101, 202, 303 at build time
export async function getStaticPaths() {
  const paths = [
    { params: { playlistId: '101' } },
    { params: { playlistId: '202' } },
    { params: { playlistId: '303' } }
  ];

  return {
    paths,
    fallback: false
  };
}

// Fetching props for the static playlist page
export async function getStaticProps({ params }) {
  const mockPlaylists = {
    '101': { id: '101', name: 'Top Pop Hits 2024', genre: 'Pop', trackCount: 50 },
    '202': { id: '202', name: 'Chill Lo-Fi Beats', genre: 'Lo-Fi', trackCount: 35 },
    '303': { id: '303', name: 'Classic Rock Anthems', genre: 'Rock', trackCount: 42 }
  };

  const playlist = mockPlaylists[params.playlistId] || {
    id: params.playlistId,
    name: 'Custom User Playlist',
    genre: 'Mixed',
    trackCount: 20
  };

  return {
    props: {
      playlist
    }
  };
}
