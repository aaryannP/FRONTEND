# Session 5: GraphQL Schema Design, Resolvers & Introspection - Solutions

---

### Question 1 & Question 2: GraphQL Schema Definition
**Task:** Define a GraphQL schema in `schema.graphql` for a simple Playlist app with `Playlist` and `Song` types, and a custom query to fetch a playlist by its ID.

**`schema.graphql`:**
```graphql
# Song type with title, artist, and duration
type Song {
  id: ID!
  title: String!
  artist: String!
  duration: Int!
}

# Playlist type containing list of songs
type Playlist {
  id: ID!
  name: String!
  songs: [Song!]!
}

# Root Query type
type Query {
  # Fetch single playlist by ID
  playlist(id: ID!): Playlist
  
  # Fetch all playlists
  playlists: [Playlist!]!
  
  # Fetch all songs with duration
  songs: [Song!]!
}
```

---

### Question 3: Testing Nested Playlist Query
**Task:** Use Apollo Sandbox or GraphiQL to test a nested query that fetches a playlist by id and retrieves playlist name, song titles, and artists.

**GraphQL Query:**
```graphql
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
```

**Tested JSON Response:**
```json
{
  "data": {
    "playlist": {
      "id": "p1",
      "name": "Top Pop Hits 2024",
      "songs": [
        {
          "id": "s1",
          "title": "Starboy",
          "artist": "The Weeknd"
        },
        {
          "id": "s2",
          "title": "Blinding Lights",
          "artist": "The Weeknd"
        },
        {
          "id": "s3",
          "title": "Shape of You",
          "artist": "Ed Sheeran"
        }
      ]
    }
  }
}
```

---

### Question 4: Adding `duration` Field to `Song` Type
**Task:** Add `duration` (`Int!`) to `Song` type, update sample data/resolvers, and test a query fetching title and duration of all songs.

**Updated Resolver Data (`server.js` snippet):**
```javascript
const songsData = [
  { id: 's1', title: 'Starboy', artist: 'The Weeknd', duration: 230 },
  { id: 's2', title: 'Blinding Lights', artist: 'The Weeknd', duration: 200 },
  { id: 's3', title: 'Shape of You', artist: 'Ed Sheeran', duration: 233 },
  { id: 's4', title: 'Levitating', artist: 'Dua Lipa', duration: 203 }
];
```

**GraphQL Query:**
```graphql
query GetAllSongsWithDuration {
  songs {
    title
    duration
  }
}
```

**Tested JSON Response:**
```json
{
  "data": {
    "songs": [
      {
        "title": "Starboy",
        "duration": 230
      },
      {
        "title": "Blinding Lights",
        "duration": 200
      },
      {
        "title": "Shape of You",
        "duration": 233
      },
      {
        "title": "Levitating",
        "duration": 203
      }
    ]
  }
}
```

---

### Question 5: Schema Introspection
**Task:** Use introspection in Apollo Sandbox / GraphiQL to explore the schema and list available types and fields.

**Introspection Query:**
```graphql
query IntrospectSchema {
  __schema {
    types {
      name
      kind
      fields {
        name
        type {
          name
          kind
        }
      }
    }
  }
}
```

**Discovered Schema Structure:**
1. **`Playlist` Object Type:**
   - `id`: `ID!` (Scalar Non-Null)
   - `name`: `String!` (Scalar Non-Null)
   - `songs`: `[Song!]!` (List of Non-Null `Song` objects)
2. **`Song` Object Type:**
   - `id`: `ID!` (Scalar Non-Null)
   - `title`: `String!` (Scalar Non-Null)
   - `artist`: `String!` (Scalar Non-Null)
   - `duration`: `Int!` (Scalar Non-Null integer)
3. **`Query` Root Type:**
   - `playlist(id: ID!)`: returns `Playlist`
   - `playlists`: returns `[Playlist!]!`
   - `songs`: returns `[Song!]!`
