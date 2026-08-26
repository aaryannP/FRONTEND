import { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

// GraphQL Query to fetch all songs
export const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
      artist
    }
  }
`;

// GraphQL Mutation to add a new song
export const ADD_SONG = gql`
  mutation AddSong($title: String!, $artist: String!) {
    addSong(title: $title, artist: $artist) {
      id
      title
      artist
    }
  }
`;

// GraphQL Mutation to update an existing song's title
export const UPDATE_SONG = gql`
  mutation UpdateSong($id: ID!, $title: String!) {
    updateSong(id: $id, title: $title) {
      id
      title
      artist
    }
  }
`;

// GraphQL Mutation to delete a song
export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default function PlaylistApp() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  // Fetching songs list
  const { loading, error, data } = useQuery(GET_SONGS);

  // Mutation for adding a song with optimistic UI update
  const [addSong] = useMutation(ADD_SONG, {
    update(cache, { data: { addSong } }) {
      const existing = cache.readQuery({ query: GET_SONGS });
      if (existing) {
        cache.writeQuery({
          query: GET_SONGS,
          data: { songs: [...existing.songs, addSong] }
        });
      }
    }
  });

  // Mutation for updating a song title
  const [updateSong] = useMutation(UPDATE_SONG);

  // Mutation for deleting a song
  const [deleteSong] = useMutation(DELETE_SONG, {
    update(cache, { data: { deleteSong } }) {
      const existing = cache.readQuery({ query: GET_SONGS });
      if (existing) {
        cache.writeQuery({
          query: GET_SONGS,
          data: { songs: existing.songs.filter(s => s.id !== deleteSong.id) }
        });
      }
    }
  });

  // Form submit handler to add new song
  const handleAddSong = (e) => {
    e.preventDefault();
    if (!title || !artist) return;

    addSong({
      variables: { title, artist },
      // Optimistic response makes new song appear immediately
      optimisticResponse: {
        addSong: {
          __typename: 'Song',
          id: 'temp-' + Date.now(),
          title: title,
          artist: artist
        }
      }
    });

    setTitle('');
    setArtist('');
  };

  // Handler to update song title
  const handleSaveUpdate = (id) => {
    if (!editTitle) return;
    updateSong({
      variables: { id, title: editTitle }
    });
    setEditingId(null);
    setEditTitle('');
  };

  // Handler to delete song
  const handleDelete = (id) => {
    deleteSong({
      variables: { id }
    });
  };

  if (loading) return <p className="status-msg">Loading playlist...</p>;
  if (error) return <p className="status-msg error">Error: {error.message}</p>;

  const songs = data?.songs || [];

  return (
    <div className="playlist-container">
      {/* Total songs count header */}
      <div className="header-bar">
        <h2>My Music Playlist</h2>
        <span className="count-badge">Total Songs: {songs.length}</span>
      </div>

      {/* Add song form */}
      <form onSubmit={handleAddSong} className="song-form">
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <button type="submit">Add Song</button>
      </form>

      {/* Songs list */}
      <ul className="song-list">
        {songs.map((song) => (
          <li key={song.id} className="song-item">
            {editingId === song.id ? (
              <div className="edit-box">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={() => handleSaveUpdate(song.id)} className="save-btn">Save</button>
                <button onClick={() => setEditingId(null)} className="cancel-btn">Cancel</button>
              </div>
            ) : (
              <div className="song-info">
                <strong>🎵 {song.title}</strong>
                <span>by {song.artist}</span>
              </div>
            )}

            <div className="actions">
              {editingId !== song.id && (
                <button
                  onClick={() => {
                    setEditingId(song.id);
                    setEditTitle(song.title);
                  }}
                  className="edit-btn"
                >
                  Edit
                </button>
              )}
              <button onClick={() => handleDelete(song.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
