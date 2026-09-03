import { useState, useEffect } from 'react';

/**
 * TASK 4: Custom Hook - useVideos
 * Refactored using GitHub Copilot auto-suggestions in VS Code.
 *
 * Copilot Prompt used:
 * // Create a custom React hook called useVideos that accepts a searchQuery string.
 * // Manage videos array, loading boolean, and error string states.
 * // Fetch mock YouTube videos array using fetch API with AbortController for cleanup.
 *
 * @param {string} searchQuery - Search term for video titles
 * @returns {{ videos: Array, loading: boolean, error: string|null }}
 */
export function useVideos(searchQuery = 'ReactJS Tutorials') {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AbortController to handle component unmount / query cancellation
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        // Simulating YouTube Data API endpoint fetch
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=8`,
          { signal }
        );

        if (!response.ok) {
          throw new Error(`YouTube API request failed with status ${response.status}`);
        }

        const data = await response.json();
        
        // Map mock response to YouTube video data structure
        const formattedVideos = data.map((item, index) => ({
          id: `yt_${item.id}`,
          title: `${item.title.slice(0, 30)} - ${searchQuery}`,
          channel: `Tech Channel #${index + 1}`,
          views: `${(index + 1) * 45}K views`,
          thumbnail: `https://via.placeholder.com/320x180?text=YouTube+Video+${index + 1}`,
        }));

        setVideos(formattedVideos);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to load YouTube videos');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();

    // Cleanup abort controller on query change or component unmount
    return () => controller.abort();
  }, [searchQuery]);

  return { videos, loading, error };
}

export default useVideos;
