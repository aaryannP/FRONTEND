import { type User, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

interface NavbarProps {
  currentUser: User | null;
}

export default function Navbar({ currentUser }: NavbarProps) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center shadow-md">
      <div className="font-bold text-lg">
        {currentUser ? `Welcome, ${currentUser.email}` : "Welcome, Guest"}
      </div>
      
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        
        {currentUser ? (
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-medium transition-colors cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link 
            to="/login" 
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium transition-colors"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
