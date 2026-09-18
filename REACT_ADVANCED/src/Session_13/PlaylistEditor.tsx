import { useState } from 'react';
import { db } from './firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

export default function PlaylistEditor({ playlistId }) {
  const [newName, setNewName] = useState('');

  const handleUpdate = async () => {
    const playlistRef = doc(db, 'playlists', playlistId);
    await updateDoc(playlistRef, { name: newName });
    setNewName('');
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this playlist?")) {
      const playlistRef = doc(db, 'playlists', playlistId);
      await deleteDoc(playlistRef);
    }
  };

  return (
    <div>
      <h3>Edit Playlist</h3>
      <input 
        value={newName} 
        onChange={(e) => setNewName(e.target.value)} 
        placeholder="New Playlist Name"
      />
      <button onClick={handleUpdate}>Update Name</button>
      <button onClick={handleDelete}>Delete Playlist</button>
    </div>
  );
}
