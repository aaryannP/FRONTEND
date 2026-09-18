import { useCallback, useState } from "react";
import SongItem from "./SongItem";

export default function PlaylistManager() {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song A", isFavorite: false },
    { id: 2, title: "Song B", isFavorite: true },
    { id: 3, title: "Song C", isFavorite: false }
  ]);

  const onToggleFavorite = useCallback((id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) => {
        if (song.id === id) {
          return { ...song, isFavorite: !song.isFavorite };
        }
        return song;
      })
    );
  }, []);

  return (
    <div>
      {songs.map((song) =>
        <SongItem
          key={song.id}
          song={song}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </div>
  );
}
