import { createContext } from "react";

const UserContext = createContext({
  username: "Aryan Parmar",
  loggedIn: true,
});

export default UserContext;