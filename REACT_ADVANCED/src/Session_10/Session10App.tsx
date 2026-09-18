import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Session10App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const handleLogout = async () => {
    try {
      // 2. Call Firebase signOut
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error: any) {
      alert("Error logging out: " + error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-5 border-red-400">
      <h2>--- Session 10: Firebase Auth ---</h2>
      
      <div className="p-2.5 mb-5 text-amber-800">
        {userEmail ? (
          <div>
            <p>Logged in as: {userEmail}</p>
            <button onClick={handleLogout} className="mt-2 p-1 bg-red-200 text-red-800 rounded">
              Logout
            </button>
          </div>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
      <SignUp />
      <hr />
      <Login />
    </div>
  );
}
