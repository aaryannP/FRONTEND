# Session 1: GraphQL & REST Basics - Solutions

---

### Question 1
**Task:** Open the public GraphQL Pokémon API in the GraphiQL Playground and run a query to fetch the name and image of any 3 Pokémon.

**GraphQL Query:**
```graphql
# Fetch name and image of first 3 pokemon
query GetThreePokemon {
  pokemons(first: 3) {
    name
    image
  }
}
```

**JSON Output:**
```json
{
  "data": {
    "pokemons": [
      {
        "name": "Bulbasaur",
        "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
      },
      {
        "name": "Ivysaur",
        "image": "https://img.pokemondb.net/artwork/ivysaur.jpg"
      },
      {
        "name": "Venusaur",
        "image": "https://img.pokemondb.net/artwork/venusaur.jpg"
      }
    ]
  }
}
```

---

### Question 2
**Task:** Write a GraphQL query that fetches the name, types, and maximum HP of a single Pokémon by its name (for example, 'pikachu') using the Pokémon GraphQL API.

**GraphQL Query:**
```graphql
# Fetching single pokemon details by name
query GetPikachuDetails {
  pokemon(name: "pikachu") {
    name
    types
    maxHP
  }
}
```

**JSON Output:**
```json
{
  "data": {
    "pokemon": {
      "name": "Pikachu",
      "types": [
        "Electric"
      ],
      "maxHP": 887
    }
  }
}
```

---

### Question 3
**Task:** Compare GraphQL and REST by listing 3 ways GraphQL allows apps like Zomato or Flipkart to fetch only the data they need, compared to typical REST API responses.

**Answer:**
1. **Prevents Over-fetching:**
   - REST endpoints return a fixed, heavy payload (e.g. `GET /restaurants/123` returns address, ratings, reviews, menu items).
   - GraphQL allows Zomato to ask specifically for `{ name rating }` for a list view, saving bandwidth and battery.

2. **Prevents Under-fetching (Single Request for Related Data):**
   - In REST, Flipkart might need 3 separate API calls (`GET /product/1`, `GET /product/1/reviews`, `GET /user/profile`) to display a product page.
   - GraphQL gets all nested data in one single round trip.

3. **Client-Driven Flexible Queries:**
   - REST requires back-end engineers to create custom endpoints for different client platforms (e.g. mobile vs desktop).
   - GraphQL uses a single endpoint (`/graphql`) where front-end apps request custom shapes without backend changes.

---

### Question 4
**Task:** Given the GraphQL schema:
`type Movie { title: String, rating: Float, poster: String }`
`type Query { movie(title: String): Movie }`
Write a sample query to fetch the title and poster of a movie named 'Inception'.

**GraphQL Query:**
```graphql
# Querying movie details for Inception
query GetMoviePoster {
  movie(title: "Inception") {
    title
    poster
  }
}
```

---

### Question 5
**Task:** Use ChatGPT to generate a GraphQL mutation example for adding a new playlist to a music app (like Spotify). Paste the mutation query and explain what each part does in one line.

**GraphQL Mutation:**
```graphql
# Mutation to add a new playlist
mutation CreatePlaylist {
  addPlaylist(input: { title: "Coding Vibes", description: "Lo-fi beats", isPrivate: false }) {
    id
    title
    createdAt
  }
}
```

**Line-by-Line Explanation:**
1. `mutation CreatePlaylist`: Declares a mutation operation named `CreatePlaylist` to modify backend server data.
2. `addPlaylist(input: { title: "Coding Vibes", description: "Lo-fi beats", isPrivate: false })`: Invokes the `addPlaylist` mutation function with input arguments.
3. `{ id title createdAt }`: Defines the exact fields of the created playlist object to receive back in response.
