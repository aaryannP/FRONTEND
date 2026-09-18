import { useState } from "react";
import { useAuth } from "./AuthContext";

export default function InstagramProfile() {
  const { authState, dispatch } = useAuth();
  const [newName, setNewName] = useState("");

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", border: "1px solid #ccc", padding: "20px", textAlign: "left", borderRadius: "8px" }}>
      <h3>InstaProfile App (Task 4)</h3>
      
      {!authState.isAuthenticated ? (
        <button 
          onClick={() => dispatch({ type: "LOGIN" })}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Log In
        </button>
      ) : (
        <div>
          <p>Welcome back, <strong>{authState.user.displayName}</strong>!</p>
          <button 
            onClick={() => dispatch({ type: "LOGOUT" })}
            style={{ padding: "5px 10px", cursor: "pointer", marginBottom: "20px" }}
          >
            Log Out
          </button>

          <div style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
            <h4>Edit Profile</h4>
            <input 
              type="text" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
              placeholder="New display name"
              style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <button 
              onClick={() => {
                if (newName) {
                  // TODO: Dispatch the "UPDATE_DISPLAY_NAME" action here with newName as payload
                  dispatch({ type: "UPDATE_DISPLAY_NAME", payload: newName })
                  setNewName("");
                }
              }}
              style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: "#0095f6", color: "white", border: "none", borderRadius: "4px" }}
            >
              Update Name
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
