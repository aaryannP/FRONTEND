import { useContext } from "react";
import UserContext from "./UserContext";

function DeepChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Current Theme: {user.theme}</h3>
    </div>
  );
}

export default DeepChild;