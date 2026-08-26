import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Rate Restaurant</h2>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            cursor: "pointer",
            fontSize: "30px",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;