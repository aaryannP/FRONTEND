import { useState } from "react";

export default function BasicLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="p-5 border border-gray-300 mb-5">
      <h2 className="text-xl font-bold mb-4">Task 1: Basic Login (useState)</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-75">
        
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
