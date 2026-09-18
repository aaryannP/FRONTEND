import useTrendingMovies from "./useTrendingMovies";

export default function Movies() {
  const { data, loading, error } = useTrendingMovies();

  if (loading) return ( <p>Loading movies...</p> );

  if (error) return ( <p>Error: {error}</p> );

  return (
    <ul>
      {data.map((movie) => {
        return (
          <li key={movie.id}>
            {movie.title}
          </li>
        );
      })}
    </ul>
  );
}
