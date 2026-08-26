import { useState, useRef } from "react";

function AddToPlaylist() {
  const [song, setSong] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const inputRef = useRef();

  const addSong = () => {
    if (song === "") return;

    setPlaylist([...playlist, song]);
    setSong("");

    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Add To Playlist</h2>

      <input
        type="text"
        placeholder="Song Name"
        value={song}
        ref={inputRef}
        onChange={(e) => setSong(e.target.value)}
      />

      <button onClick={addSong}>Add</button>

      <ul>
        {playlist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddToPlaylist;