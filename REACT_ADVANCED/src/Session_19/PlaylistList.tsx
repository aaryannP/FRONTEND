import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSong, type Song } from './playlistSlice';

const PlaylistList: React.FC = () => {
  const songs = useSelector((state: any) => state.playlist);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-slate-900 rounded-xl shadow-lg border border-slate-800 text-white">
      <h2 className="text-xl font-bold mb-4">Your Playlist</h2>
      
      {songs.length === 0 ? (
        <p className="text-slate-400">No songs in your playlist.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {songs.map((song: Song) => (
            <li 
              key={song.id} 
              className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700"
            >
              <div>
                <p className="font-semibold text-white">{song.title}</p>
                <p className="text-sm text-slate-400">{song.artist}</p>
              </div>
              
              <button
                onClick={() => dispatch(deleteSong(song.id))}
                className="px-3 py-1.5 bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-semibold rounded-md shadow transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistList;
