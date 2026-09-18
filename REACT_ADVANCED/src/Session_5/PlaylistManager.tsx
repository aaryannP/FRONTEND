import React, { useReducer, useState } from "react";
import { reducerFunction } from "./playlistReducer";
import SongItem from "./SongItem";

export default function PlaylistManager() {
  const [state, dispatch] = useReducer(reducerFunction, []);

  const [song, setSong] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    dispatch({ type: "ADD_SONG", payload: song });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <button type="submit">Add Song</button>
      </form>

      <div>
        {state.map((song, index) =>
          <SongItem
            key={index}
            song={song}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
}
