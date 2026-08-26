const { createServer } = require('node:http');
const { createYoga, createSchema } = require('graphql-yoga');
const fs = require('node:fs');
const path = require('node:path');

// Reading schema.graphql file
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

// Sample dataset updated with duration (in seconds)
const songsData = [
  { id: 's1', title: 'Starboy', artist: 'The Weeknd', duration: 230 },
  { id: 's2', title: 'Blinding Lights', artist: 'The Weeknd', duration: 200 },
  { id: 's3', title: 'Shape of You', artist: 'Ed Sheeran', duration: 233 },
  { id: 's4', title: 'Levitating', artist: 'Dua Lipa', duration: 203 }
];

const playlistsData = [
  {
    id: 'p1',
    name: 'Top Pop Hits 2024',
    songIds: ['s1', 's2', 's3']
  },
  {
    id: 'p2',
    name: 'Chill Workout',
    songIds: ['s2', 's4']
  }
];

// Resolvers implementation
const resolvers = {
  Query: {
    playlist: (_, { id }) => {
      const p = playlistsData.find(pl => pl.id === id);
      if (!p) return null;
      return {
        id: p.id,
        name: p.name,
        songs: p.songIds.map(sId => songsData.find(s => s.id === sId))
      };
    },
    playlists: () => {
      return playlistsData.map(p => ({
        id: p.id,
        name: p.name,
        songs: p.songIds.map(sId => songsData.find(s => s.id === sId))
      }));
    },
    songs: () => songsData
  }
};

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers
  })
});

const server = createServer(yoga);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`GraphQL Yoga Server running at http://localhost:${PORT}/graphql`);
});
