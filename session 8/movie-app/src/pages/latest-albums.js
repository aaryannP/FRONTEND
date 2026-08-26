export default function LatestAlbums({ albums }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#a855f7' }}>Spotify Latest Albums (GraphQL + getStaticProps)</h1>
      <p>Fetched via GraphQL query inside getStaticProps at build time.</p>

      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {albums.map((album) => (
          <li key={album.id} style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <h3 style={{ margin: '0 0 0.25rem 0', color: '#f8fafc' }}>💿 {album.name}</h3>
            <p style={{ margin: 0, color: '#94a3b8' }}>Artist: {album.artist}</p>
            <small style={{ color: '#64748b' }}>Release Year: {album.releaseYear}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

// getStaticProps executing GraphQL Query
export async function getStaticProps() {
  // Querying GraphQL API inside getStaticProps
  const query = `
    query GetLatestAlbums {
      albums {
        id
        name
        artist
        releaseYear
      }
    }
  `;

  // Mock Spotify GraphQL dataset response
  const mockAlbumsData = [
    { id: 'alb-1', name: 'Hit Me Hard and Soft', artist: 'Billie Eilish', releaseYear: 2024 },
    { id: 'alb-2', name: 'The Tortured Poets Department', artist: 'Taylor Swift', releaseYear: 2024 },
    { id: 'alb-3', name: 'Cowboy Carter', artist: 'Beyoncé', releaseYear: 2024 },
    { id: 'alb-4', name: 'Short n Sweet', artist: 'Sabrina Carpenter', releaseYear: 2024 },
    { id: 'alb-5', name: 'Utopia', artist: 'Travis Scott', releaseYear: 2023 }
  ];

  return {
    props: {
      albums: mockAlbumsData
    }
  };
}
