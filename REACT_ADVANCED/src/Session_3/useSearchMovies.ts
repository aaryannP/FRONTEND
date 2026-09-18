import { useEffect, useState } from "react";

export default function useSearchMovies(query: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      setData([]);
      setLoading(false);
      return;
    }

    const fetchSearchedMovies = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`
        );
        const result = await response.json();

        if (result.results) {
          setData(result.results);
        } else {
          setData([]);
          setError(result.status_message || "Failed to fetch movies");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchedMovies();
  }, [query]);

  useEffect(() => {
    console.log("Movie data updated: ", data);
  }, [data]);
  
  return { data, loading, error };
}
