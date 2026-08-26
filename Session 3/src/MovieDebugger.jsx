import { useQuery, gql } from '@apollo/client';

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      title
      releaseYear
    }
  }
`;

// Fixed Next.js / React component for Question 5
export default function MovieDebugger() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  // 1. Loading state condition
  if (loading) return <p className="loading-state">Loading movies...</p>;

  // 2. Error state condition
  if (error) return <p className="error-state">Error: {error.message}</p>;

  // 3. Safe optional data check
  if (!data || !data.movies) return <p className="status-msg">No movies found.</p>;

  return (
    <section className="section-block">
      <h2>Question 5: Debugged Movie List</h2>
      <ul className="movie-list">
        {data.movies.map((movie) => (
          <li key={movie.id || movie.title}>
            🎬 {movie.title} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </section>
  );
}
