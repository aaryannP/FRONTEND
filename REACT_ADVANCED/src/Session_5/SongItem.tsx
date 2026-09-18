import { useState } from "react";

export default function SongItem({ song, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState(song);

  const handleEdit = () => {
    if (isEditing) {
      dispatch({ type: "EDIT_SONG", payload: { oldName: song, newName: editedSong } });
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedSong}
          onChange={(e) => setEditedSong(e.target.value)}
        />
      ) : (<p>{song}</p>)}
      <button
        onClick={handleEdit}
      >
        {isEditing ? "Update Song" : "Edit Song"}
      </button>
      <button
        onClick={() => dispatch(
          { type: "REMOVE_SONG", payload: song }
        )}
      >
        Delete Song
      </button>
    </div>
  );
}
