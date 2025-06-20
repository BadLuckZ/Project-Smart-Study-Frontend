"use client";

import { AuthContext } from "@/context/auth-context";
import { fetchUserData } from "@/lib/api";
import { auth, provider } from "@/lib/firebase";
import { UserDataType } from "@/utils/type";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isUserLoading, setUserLoading] = useState(true);
  // Boolean สำหรับเช็คว่ากำลังโหลด User Object จาก Firebase อยู่หรือไม่
  const [user, setUser] = useState<User | null>(null);
  // User Object จาก Firebase
  const [isUserDataLoading, setUserDataLoading] = useState(true);
  // Boolean สำหรับเช็คว่ากำลังโหลด User's Data จาก Backend อยู่หรือไม่
  const [userData, setUserData] = useState<UserDataType>({
    uid: "",
    username: "",
    email: "",
    photoUrl: "",
  });
  // User's Data Object จาก Backend

  const router = useRouter();

  // ฟังก์ชันสำหรับออกจากระบบ
  const handleSignout = async () => {
    await signOut(auth); // ออกจากระบบผ่าน Firebase
    setUser(null); // เคลียร์ข้อมูลผู้ใช้
  };

  // ฟังก์ชันสำหรับเข้าสู่ระบบ
  const handleLogin = async () => {
    setUserDataLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // เก็บข้อมูลผู้ใช้จาก Firebase

      const userToken = await getUserToken();
      const userData = await fetchUserData(userToken);
      setUserData(userData);
      setUserDataLoading(false);

      router.replace("/dashboard"); // ไปที่หน้า Dashboard หลังจากล็อกอินสำเร็จ
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // ดึง Firebase ID Token ของผู้ใช้
  const getUserToken = async (): Promise<string> => {
    const user = getAuth().currentUser;
    if (user) {
      const token = await user.getIdToken();
      return token;
    }
    return "";
  };

  // ตรวจสอบสถานะการล็อกอินทุกครั้งที่โหลดหน้าใหม่
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUserDataLoading(true);
      setUser(currentUser);
      setUserLoading(false);

      const userToken = await getUserToken();
      const userData = await fetchUserData(userToken);
      setUserData(userData);
      setUserDataLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ถ้าไม่มีผู้ใช้ล็อกอิน ให้พาไปหน้า Login
  useEffect(() => {
    if (!isUserLoading && !user) {
      router.replace("/login");
    }
  }, [user, isUserLoading]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isUserDataLoading,
        setUser,
        userData,
        handleSignout,
        handleLogin,
        getUserToken,
      }}
    >
      {!isUserLoading && children}
    </AuthContext.Provider>
  );
};
