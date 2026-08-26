import { useState } from "react";
import axios from "axios";

function AddPlaylist() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name,
        description,
      })
      .then(() => {
        setMessage("Playlist added successfully!");
        setName("");
        setDescription("");
      });
  };

  return (
    <div>
      <h2>Add Playlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Playlist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default AddPlaylist;