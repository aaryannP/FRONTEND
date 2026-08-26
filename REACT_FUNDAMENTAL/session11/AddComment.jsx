import { useState } from "react";
import axios from "axios";

function AddComment() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/comments", {
        username,
        comment,
      })
      .then((res) => {
        setResponse(res.data);
      });
  };

  return (
    <div>
      <h2>Add Comment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h3>Response</h3>
          <p>Username: {response.username}</p>
          <p>Comment: {response.comment}</p>
        </div>
      )}
    </div>
  );
}

export default AddComment;