import { useState, useEffect } from "react";

function TrendingSongs() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(false);

  const fetchSongs = async () => {
    try {
      setError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      const data = await response.json();
      setSongs(data.slice(0, 3));
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <h2>Trending Songs</h2>

      {error ? (
        <p>Error loading data</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      )}

      <button onClick={fetchSongs}>Reload</button>
    </div>
  );
}

export default TrendingSongs;