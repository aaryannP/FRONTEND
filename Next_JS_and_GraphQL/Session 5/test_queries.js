async function runTests() {
  const url = 'http://localhost:4000/graphql';

  // 1. Test Query 3: Nested playlist query (Playlist + Songs)
  console.log("=== Question 3: Nested Playlist Query ===");
  const res1 = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetPlaylistDetails {
          playlist(id: "p1") {
            id
            name
            songs {
              id
              title
              artist
            }
          }
        }
      `
    })
  });
  console.log(JSON.stringify(await res1.json(), null, 2));

  // 2. Test Query 4: Songs with Duration field
  console.log("\n=== Question 4: All Songs with Duration ===");
  const res2 = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetAllSongsWithDuration {
          songs {
            title
            duration
          }
        }
      `
    })
  });
  console.log(JSON.stringify(await res2.json(), null, 2));

  // 3. Test Query 5: Introspection query
  console.log("\n=== Question 5: Schema Introspection ===");
  const res3 = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query IntrospectTypes {
          __schema {
            types {
              name
              kind
            }
          }
        }
      `
    })
  });
  const data3 = await res3.json();
  console.log("Discovered Types Count:", data3.data.__schema.types.length);
  console.log("Sample Types:", data3.data.__schema.types.filter(t => !t.name.startsWith('__')).map(t => t.name));
}

runTests();
