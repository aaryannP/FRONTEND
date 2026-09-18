import { createContext, useContext } from "react";

const UserContext = createContext(null);

export function UserProvider({ children, value }) {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error ("Can only be used inside UserContext Provider");

  return context;
};
