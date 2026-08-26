import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Like Button</h2>
      <button onClick={() => setCount(count + 1)}>
        Like ({count})
      </button>
    </div>
  );
}

export default LikeButton;