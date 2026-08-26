import UserGreeting from "./UserGreeting";
import UserGreetingClass from "./UserGreetingClass";
import MiniProfile from "./MiniProfile";

function App() {
  return (
    <div>
      <h1>Welcome to React JSX!</h1>

      <UserGreeting username="Aryan Parmar" />

      <UserGreetingClass username="Aryan Parmar" />

      <MiniProfile />
    </div>
  );
}

export default App;