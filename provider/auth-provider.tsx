"use client";

import { AuthContext } from "@/context/auth-context";
import { auth, provider } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const handleSignout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      router.replace("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // When users refresh the page, they're still logged in.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, handleSignout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
