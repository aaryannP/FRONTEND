import { Navigate } from "react-router-dom";
import { type User } from "firebase/auth";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  user: User | null;
  children: ReactNode;
}

export default function ProtectedRoute({ user, children }: ProtectedRouteProps) {
  // If the user is not authenticated, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If they are authenticated, allow them to view the protected component
  return <>{children}</>;
}
