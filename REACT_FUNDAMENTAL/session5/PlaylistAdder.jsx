import { useState } from "react";

function PlaylistAdder() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [playlist, setPlaylist] = useState([]);

  function addSong(e) {
    e.preventDefault();

    if (song === "" || artist === "") return;

    setPlaylist([...playlist, { song, artist }]);

    setSong("");
    setArtist("");
  }

  return (
    <div>
      <h2>Playlist Adder</h2>

      <form onSubmit={addSong}>
        <input
          type="text"
          placeholder="Song Name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Song</button>
      </form>

      <ul>
        {playlist.map((item, index) => (
          <li key={index}>
            {item.song} - {item.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistAdder;