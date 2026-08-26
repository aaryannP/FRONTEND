import { useState } from "react";

function SongVote() {
  const [votes, setVotes] = useState(0);

  return (
    <div>
      <h2>Calm Down</h2>

      <button onClick={() => setVotes(votes + 1)}>⬆️</button>

      <span> {votes} </span>

      <button onClick={() => votes > 0 && setVotes(votes - 1)}>
        ⬇️
      </button>
    </div>
  );
}

export default SongVote;