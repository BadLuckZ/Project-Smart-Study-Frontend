"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

const LoginPage = () => {
  const { handleLogin } = useAuth();

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1>Hello, This is Login Page!</h1>
      <Button className="cursor-pointer" onClick={handleLogin}>
        <p>Sign in with Google</p>
      </Button>
    </div>
  );
};

export default LoginPage;
