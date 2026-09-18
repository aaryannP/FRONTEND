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

export default function CartItem() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <p>Items in Cart: {state}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>Add item</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>Remove item</button>
    </div>
  );
}
