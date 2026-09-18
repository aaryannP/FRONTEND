import { useState } from "react";

export default function useLikeButton(initialLikes: number) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const toggleLike = () => {
    if (isLiked)
      setLikeCount(prev => prev - 1);
    else
      setLikeCount(prev => prev + 1);

    setIsLiked(!isLiked);
  };

  return { isLiked, likeCount, toggleLike };
}
