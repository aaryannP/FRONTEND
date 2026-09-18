import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Profile";
import Login from "./Login";

export default function Session11App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="p-10 text-center text-xl">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar currentUser={currentUser} />
        
        <div className="p-8">
          <Routes>
            <Route path="/" element={<h1 className="text-3xl font-bold">Home Page</h1>} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected Route Wrapper */}
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute user={currentUser}>
                  <Profile />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
