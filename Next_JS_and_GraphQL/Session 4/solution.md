# Session 4: GraphQL Mutations & Optimistic UI - Solutions

---

### Question 1: `addSong` Mutation & Form Submission
**Task:** Write a GraphQL mutation called `addSong` taking `title` and `artist` as input. Use `useMutation` hook to call this mutation when a user submits a form.

**GraphQL Mutation:**
```graphql
mutation AddSong($title: String!, $artist: String!) {
  addSong(title: $title, artist: $artist) {
    id
    title
    artist
  }
}
```

**React Form Implementation Snippet:**
```jsx
const [addSong] = useMutation(ADD_SONG);

const handleAddSong = (e) => {
  e.preventDefault();
  if (!title || !artist) return;

  addSong({
    variables: { title, artist }
  });

  setTitle('');
  setArtist('');
};
```

---

### Question 2: `updateSong` Mutation & Immediate Title Update
**Task:** Implement an `updateSong` mutation using `useMutation` hook to allow users to edit the title of an existing song.

**GraphQL Mutation:**
```graphql
mutation UpdateSong($id: ID!, $title: String!) {
  updateSong(id: $id, title: $title) {
    id
    title
    artist
  }
}
```

**React Edit Handler:**
```jsx
const [updateSong] = useMutation(UPDATE_SONG);

const handleSaveUpdate = (id) => {
  if (!editTitle) return;
  updateSong({
    variables: { id, title: editTitle }
  });
  setEditingId(null);
};
```

---

### Question 3: `deleteSong` Mutation & Delete Button
**Task:** Add a `deleteSong` mutation connected to a Delete button to remove the song from both backend and UI.

**GraphQL Mutation:**
```graphql
mutation DeleteSong($id: ID!) {
  deleteSong(id: $id) {
    id
  }
}
```

**React Delete Handler & Cache Update:**
```jsx
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

const handleDelete = (id) => {
  deleteSong({ variables: { id } });
};
```

---

### Question 4: Optimistic UI Updates for `addSong`
**Task:** Enable optimistic UI updates for `addSong` mutation so new songs appear instantly in the playlist before server response.

**Optimistic UI Setup:**
```jsx
addSong({
  variables: { title, artist },
  // Optimistic response inserts data instantly into UI cache
  optimisticResponse: {
    addSong: {
      __typename: 'Song',
      id: 'temp-' + Date.now(),
      title: title,
      artist: artist
    }
  }
});
```

---

### Question 5: Dynamic Songs Counter & Auto Re-rendering
**Task:** Show how a mutation modifies the backend and automatically re-renders component by displaying total number of songs in playlist app.

**Header Badge Display Component:**
```jsx
const songs = data?.songs || [];

return (
  <div className="header-bar">
    <h2>My Music Playlist</h2>
    {/* Count automatically re-renders on cache changes */}
    <span className="count-badge">Total Songs: {songs.length}</span>
  </div>
);
```
**Explanation:** When `addSong` or `deleteSong` mutations execute, Apollo Client updates the normalized in-memory cache. Because `useQuery(GET_SONGS)` listens to cache updates, React automatically triggers a re-render, keeping `songs.length` synchronized instantly without full page reloads.

---

### Complete Component Code (`src/PlaylistApp.jsx`)
```jsx
import { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

export const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
      artist
    }
  }
`;

export const ADD_SONG = gql`
  mutation AddSong($title: String!, $artist: String!) {
    addSong(title: $title, artist: $artist) {
      id
      title
      artist
    }
  }
`;

export const UPDATE_SONG = gql`
  mutation UpdateSong($id: ID!, $title: String!) {
    updateSong(id: $id, title: $title) {
      id
      title
      artist
    }
  }
`;

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

  const { loading, error, data } = useQuery(GET_SONGS);

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

  const [updateSong] = useMutation(UPDATE_SONG);

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

  const handleAddSong = (e) => {
    e.preventDefault();
    if (!title || !artist) return;

    addSong({
      variables: { title, artist },
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

  const handleSaveUpdate = (id) => {
    if (!editTitle) return;
    updateSong({
      variables: { id, title: editTitle }
    });
    setEditingId(null);
    setEditTitle('');
  };

  const handleDelete = (id) => {
    deleteSong({ variables: { id } });
  };

  if (loading) return <p className="status-msg">Loading playlist...</p>;
  if (error) return <p className="status-msg error">Error: {error.message}</p>;

  const songs = data?.songs || [];

  return (
    <div className="playlist-container">
      <div className="header-bar">
        <h2>My Music Playlist</h2>
        <span className="count-badge">Total Songs: {songs.length}</span>
      </div>

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
```
