import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext<any>(null);

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: { displayName: "john_doe" } };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    // TODO: Task 4 - Add a case for "UPDATE_DISPLAY_NAME"
    // It should keep `isAuthenticated` the same, but update the user's `displayName` 
    // with `action.payload`.
    case "UPDATE_DISPLAY_NAME":
      return { isAuthenticated: state.isAuthenticated, user: { displayName: action.payload } }
    default:
      return state;
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, dispatch] = useReducer(authReducer, { isAuthenticated: false, user: null });

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
