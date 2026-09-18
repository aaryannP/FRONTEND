import { useEffect, useState } from "react";
import useSearchMovies from "./useSearchMovies";

export default function SearchMovies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const { data, loading, error } = useSearchMovies(debouncedTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      Search:
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Loading movies...</p>}
      
      {error && <p>Error: {error}</p>}

      {!loading && !error && searchTerm &&
        data?.map((movie) => {
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
            </div>
          );
        })
      }
    </div>
  );
}
