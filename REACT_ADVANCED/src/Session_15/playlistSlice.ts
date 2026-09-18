import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, title: 'Song 1', artist: 'Artist 1' }];

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addSong } = playlistSlice.actions;
export default playlistSlice.reducer;
