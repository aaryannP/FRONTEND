function Playlist({ songs }) {
  return (
    <div>
      <h2>Playlist</h2>

      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;