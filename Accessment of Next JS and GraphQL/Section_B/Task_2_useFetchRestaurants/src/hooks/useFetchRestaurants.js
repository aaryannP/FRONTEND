import { useState, useEffect } from 'react';

/**
 * Task 2: useFetchRestaurants Custom Hook
 * Fetches restaurant data from a mock API endpoint and exposes data, loading, and error states.
 *
 * @returns {{ data: Array|null, loading: boolean, error: string|null }}
 */
export function useFetchRestaurants() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Requirement: Wrap fetch in a try/catch block
    const fetchRestaurants = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error(`Failed to load restaurant data (HTTP Status: ${response.status})`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        // Store user-friendly error message in error state
        setError(err.message || 'An unexpected error occurred while fetching restaurants. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Requirement: Return object with exactly three keys: data, loading, error
  return { data, loading, error };
}

export default useFetchRestaurants;
