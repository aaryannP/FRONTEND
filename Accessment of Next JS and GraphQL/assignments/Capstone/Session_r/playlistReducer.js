/**
 * TASK 2 & 5: Spotify Playlist Reducer Function
 * @param {Array<string>} state - Current playlist array of song titles
 * @param {Object} action - Action object with type and payload
 */
const initialPlaylistState = [];

export default function playlistReducer(state = initialPlaylistState, action) {
  switch (action.type) {
    case 'ADD_SONG':
      // Prevent duplicate song names if already present
      if (state.includes(action.payload)) return state;
      return [...state, action.payload];

    case 'REMOVE_SONG':
      // Task 5 Constraint: Use .filter() method to remove song by name
      return state.filter((song) => song !== action.payload);

    default:
      return state;
  }
}

// TASK 2 TEST RUNNER VERIFICATION
export function testPlaylistReducer() {
  console.log('--- TASK 2 REDUCER UNIT TEST ---');
  let testState = [];
  
  // Test ADD_SONG
  testState = playlistReducer(testState, { type: 'ADD_SONG', payload: 'Kesariya' });
  console.log('State after adding Kesariya:', testState); // ['Kesariya']
  
  testState = playlistReducer(testState, { type: 'ADD_SONG', payload: 'Shape of You' });
  console.log('State after adding Shape of You:', testState); // ['Kesariya', 'Shape of You']
  
  // Test REMOVE_SONG
  testState = playlistReducer(testState, { type: 'REMOVE_SONG', payload: 'Kesariya' });
  console.log('State after removing Kesariya:', testState); // ['Shape of You']
  console.log('----------------------------------');
}
