import { useReducer } from "react";

const initialState = 0;

type ActionType = {
  type: "ADD" | "RESET" | "REMOVE";
};

const reducerFunction = (state: number, action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "RESET":
      return 0;
    case "REMOVE":
      if (state === 0) return state;
      return state - 1;
    default:
      return state;
  }
};

export default function PlaylistCounter() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <p>Songs in Playlist: {state}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>Add song</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button
        disabled={state === 0}
        onClick={() => dispatch({ type: "REMOVE" })}
      >Remove song</button>
    </div>
  );
}
