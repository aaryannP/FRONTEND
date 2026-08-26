import { useEffect, useState } from "react";

function IPLScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchScores() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (response.status !== 200) {
          throw new Error("Error");
        }

        const data = await response.json();
        setScores(data);
      } catch (err) {
        setError(true);
      }
    }

    fetchScores();
  }, []);

  return (
    <div>
      <h2>IPL Scores</h2>

      {error ? (
        <p>Error loading scores</p>
      ) : (
        <ul>
          {scores.map((team) => (
            <li key={team.id}>{team.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IPLScores;