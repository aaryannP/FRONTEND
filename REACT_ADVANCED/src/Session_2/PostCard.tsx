import useLikeButton from "./useLikeButton";

export default function PostCard() {
  const { isLiked, likeCount, toggleLike } = useLikeButton(0);

  return (
    <div className="border-solid p-5 w-75">
      <p>Enjoying the sunset! 🌅</p>

      <button onClick={toggleLike}>
        {isLiked ? "Unlike" : "Like"}
      </button>

      <span> {likeCount} likes</span>
    </div>
  );
}
