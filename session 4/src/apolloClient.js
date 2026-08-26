import { ApolloClient, InMemoryCache, ApolloLink, Observable } from '@apollo/client';

// Initial songs array in mock backend memory
let mockSongs = [
  { __typename: 'Song', id: '1', title: 'Starboy', artist: 'The Weeknd' },
  { __typename: 'Song', id: '2', title: 'Blinding Lights', artist: 'The Weeknd' },
  { __typename: 'Song', id: '3', title: 'Shape of You', artist: 'Ed Sheeran' }
];

// Mock Apollo Link handling queries and mutations
const mockLink = new ApolloLink((operation) => {
  return new Observable((observer) => {
    const { operationName, variables } = operation;

    setTimeout(() => {
      if (operationName === 'GetSongs') {
        observer.next({ data: { songs: [...mockSongs] } });
      } else if (operationName === 'AddSong') {
        const newSong = {
          __typename: 'Song',
          id: String(Date.now()),
          title: variables.title,
          artist: variables.artist
        };
        mockSongs.push(newSong);
        observer.next({ data: { addSong: newSong } });
      } else if (operationName === 'UpdateSong') {
        const songIndex = mockSongs.findIndex(s => s.id === variables.id);
        if (songIndex !== -1) {
          mockSongs[songIndex].title = variables.title;
          observer.next({ data: { updateSong: { ...mockSongs[songIndex] } } });
        }
      } else if (operationName === 'DeleteSong') {
        mockSongs = mockSongs.filter(s => s.id !== variables.id);
        observer.next({ data: { deleteSong: { __typename: 'Song', id: variables.id } } });
      } else {
        observer.next({ data: {} });
      }
      observer.complete();
    }, 200);
  });
});

export const client = new ApolloClient({
  link: mockLink,
  cache: new InMemoryCache()
});
