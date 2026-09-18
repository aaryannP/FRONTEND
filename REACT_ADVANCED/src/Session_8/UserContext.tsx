import { createContext, useContext } from "react";

// Simple context without a reducer for user info
const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  // Hardcoded user for demonstration
  const user = { id: 1, name: "Hungry Alice" };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
