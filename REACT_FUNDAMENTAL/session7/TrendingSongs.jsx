import { useEffect } from "react";

function TrendingSongs() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h2>Trending Songs</h2>
    </div>
  );
}

export default TrendingSongs;