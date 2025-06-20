"use client";

import { UserDataType } from "@/utils/type";
import { User } from "firebase/auth";
import { createContext, useContext } from "react";

interface AuthContextProps {
  user: User | null;
  isUserDataLoading: boolean;
  userData: UserDataType;
  setUser: (user: User) => void;
  handleLogin: () => void;
  handleSignout: () => void;
  getUserToken: () => Promise<string>;
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
