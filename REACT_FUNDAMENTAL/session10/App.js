import { useState } from "react";
import UserContext from "./UserContext";
import Navbar from "./Navbar";
import DeepChild from "./DeepChild";
import NotificationDemo from "./NotificationDemo";

function App() {
  const [theme, setTheme] = useState("light");

  const user = {
    username: "Aryan Parmar",
    loggedIn: true,
    theme: theme,
  };

  return (
    <UserContext.Provider value={user}>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Navbar />

        <button
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          Toggle Theme
        </button>

        <DeepChild />

        <NotificationDemo />
      </div>
    </UserContext.Provider>
  );
}

export default App;