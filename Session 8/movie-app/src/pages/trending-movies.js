export default function TrendingMovies({ movies }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8' }}>Trending Movies (SSG Pre-rendered)</h1>
      <p>Data fetched at build time using getStaticProps.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ background: '#1e293b', borderRadius: '10px', overflow: 'hidden', border: '1px solid #334155' }}>
            <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{movie.title}</h3>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>Rating: ⭐ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// getStaticProps runs at build time to fetch trending movies
export async function getStaticProps() {
  const mockMovies = [
    { id: '1', title: 'Inception', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300', rating: 8.8 },
    { id: '2', title: 'Interstellar', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300', rating: 8.7 },
    { id: '3', title: 'The Dark Knight', poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300', rating: 9.0 },
    { id: '4', title: 'Avatar: The Way of Water', poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300', rating: 7.8 }
  ];

  return {
    props: {
      movies: mockMovies
    }
  };
}
