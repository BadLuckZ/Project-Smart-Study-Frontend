"use client";

import { User } from "firebase/auth";
import { createContext, useContext } from "react";

interface AuthContextProps {
  user: User | null;
  setUser: (user: User) => void;
  handleLogin: () => void;
  handleSignout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth can be used only with components inside AuthProvider"
    );
  }
  return context;
};
