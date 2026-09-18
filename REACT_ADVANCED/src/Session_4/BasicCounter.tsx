// import { useState } from "react";
import { useReducer } from "react";

const initialState = 0;

type ActionType = {
  type: "INCREMENT" | "RESET" | "DECREMENT";
};

const reducerFunction = (state: number, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return 0;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default function BasicCounter() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      {/* <p>Current value: {counter}</p>
      <button onClick={() => setCounter(p => p + 1)}>Increment</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(p => p - 1)}>Decrement</button> */}

      <p>Current value: {state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
