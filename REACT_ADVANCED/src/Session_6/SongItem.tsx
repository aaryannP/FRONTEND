import { memo } from "react";

function SongItem({ song, onToggleFavorite }) {
  console.log(`Rendering song: ${song.title}`);

  return (
    <div>
      <span>{song.title} {song.isFavorite ? "❤️" : "🤍"}</span>
      <button onClick={() => onToggleFavorite(song.id)}>Favorite</button>
    </div>
  );
}

export default memo(SongItem);
