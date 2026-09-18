import { useEffect, useState } from "react";

export function useFetchData(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchApi = async (url) => {
      try {
      const res = await fetch(url);
      const response = await res.json();

      setData(response);
      } catch (error) {
        setError(`Failed to fetch, ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchApi(url);
  }, [url]);

  return { data, loading, error };
}
