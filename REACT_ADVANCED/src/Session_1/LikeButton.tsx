import { useState } from "react";

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);

  const handleClick = () => {
    setLikeCount(prev => prev + 1);
  };

  return (
    <div>
      <p>You have clicked the button {likeCount} times</p>
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
