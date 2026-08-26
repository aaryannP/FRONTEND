import { useContext } from "react";
import UserContext from "./UserContext";

function Navbar() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
    </div>
  );
}

export default Navbar;