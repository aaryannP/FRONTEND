import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "./actions";

export default function PlaylistManager() {
  const [songName, setSongName] = useState("");

  const dispatch = useDispatch();

  const playlist = useSelector((state: any) => state.playlist);

  const handleAddSong = () => {
    dispatch(addSong(songName));
    setSongName("");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-900 text-white rounded-lg shadow-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">My Playlist</h2>
      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          value={songName} 
          onChange={(e) => setSongName(e.target.value)} 
          className="flex-1 border border-gray-600 bg-gray-800 p-2 rounded text-white"
          placeholder="Enter a song..."
        />
        <button onClick={handleAddSong} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {playlist.map((song: string, index: number) => (
          <li key={index} className="bg-gray-800 p-3 rounded flex justify-between items-center">
            <span>{song}</span>
            <button
              onClick={() => dispatch(removeSong(index))}
              className="text-red-500 hover:text-red-400"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
