export const addSong = (song: string) => {
  return { type: "ADD_SONG", payload: song };
};

export const removeSong = (index: number) => {
  return { type: "REMOVE_SONG", payload: index };
};
