import { useState } from "react";
import PlaylistList from "./PlaylistList";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
        <div className="p-6 bg-emerald-950/40 border border-emerald-500 rounded-xl text-center">
          <h2 className="text-xl font-bold text-emerald-400">Welcome, {email}!</h2>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition text-white"
          >
            Logout
          </button>
        </div>
        <PlaylistList />
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm mx-auto p-6 bg-slate-900 rounded-xl shadow-lg border border-slate-800">
      <h2 className="text-xl font-semibold text-white text-center mb-2">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
        required
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
