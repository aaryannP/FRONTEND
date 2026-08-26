// Demo script to test Pokemon GraphQL queries

async function runPokemonQueries() {
  console.log("=== Question 1: Fetching 3 Pokemons ===");
  const res1 = await fetch('https://graphql-pokemon2.vercel.app/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetThreePokemon {
          pokemons(first: 3) {
            name
            image
          }
        }
      `
    })
  });
  const data1 = await res1.json();
  console.log(JSON.stringify(data1, null, 2));

  console.log("\n=== Question 2: Fetching Pikachu Details ===");
  const res2 = await fetch('https://graphql-pokemon2.vercel.app/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetPikachuDetails {
          pokemon(name: "pikachu") {
            name
            types
            maxHP
          }
        }
      `
    })
  });
  const data2 = await res2.json();
  console.log(JSON.stringify(data2, null, 2));
}

runPokemonQueries();
