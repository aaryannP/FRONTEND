import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Song {
  id: string;
  title: string;
  artist: string;
}

const initialState: Song[] = [
  { id: '1', title: 'Bohemian Rhapsody', artist: 'Queen' },
  { id: '2', title: 'Hotel California', artist: 'Eagles' },
];

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      state.push(action.payload);
    },
    deleteSong: (state, action: PayloadAction<string>) => {
      return state.filter(song => song.id !== action.payload);
    },
    editSong: (state, action: PayloadAction<Song>) => {
      const existingSong = state.find(song => song.id === action.payload.id);
      if (existingSong) {
        existingSong.title = action.payload.title;
        existingSong.artist = action.payload.artist;
      }
    }
  },
});

export const { addSong, deleteSong, editSong } = playlistSlice.actions;
export default playlistSlice.reducer;
