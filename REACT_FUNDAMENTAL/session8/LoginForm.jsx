import { useState, useRef } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userRef = useRef();

  const handleLogin = () => {
    alert(`Username: ${username}\nPassword: ${password}`);

    setUsername("");
    setPassword("");

    userRef.current.focus();
  };

  return (
    <div>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        ref={userRef}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;