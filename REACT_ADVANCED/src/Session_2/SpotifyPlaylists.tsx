import useFetchData from "./useFetchData";

export default function SpotifyPlaylists() {
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/albums");

  if (loading) return ( <p>Loading data...</p> );

  if (error) return ( <p>Error: {error}</p> );

  return (
    <ul>
      {data.map((album) => {
        return (
          <li key={album.id}>
            {album.title}
          </li>
        );
      })}
    </ul>
  );
}
