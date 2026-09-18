const initialState = ["Gym", "Work", "Jogs", "Runs", "Calm"];

export const playlistReducer = (
  state: string[] = initialState,
  action: { type: string, payload?: string | number }
) => {
  switch (action.type) {
    case "ADD_SONG":
      return [ ...state, action.payload ];
    case "REMOVE_SONG":
      return state.filter((song, index) => index !== action.payload)
    default:
      return state;
  }
};
