import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSong } from './playlistSlice';

export default function Playlist() {
  const songs = useSelector((state: any) => state.playlist);
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title || !artist) return;
    
    dispatch(addSong({ id: Date.now(), title, artist }));
    setTitle('');
    setArtist('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Playlist</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginRight: '5px' }} />
        <input placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} style={{ marginRight: '5px' }} />
        <button type="submit">Add Song</button>
      </form>
      
      <ul>
        {songs.map((song: any) => (
          <li key={song.id} style={{ marginBottom: '10px' }}>
            <strong>{song.title}</strong> by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}
