export function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD_SONG":
      return [ ...state, action.payload ];
    case "REMOVE_SONG":
      return state.filter(song => song !== action.payload);
    case "EDIT_SONG":
      return state.map((song) => {
        if (song === action.payload.oldName)
          return action.payload.newName
        return song;
      });
    default:
      return state;
  }
}
