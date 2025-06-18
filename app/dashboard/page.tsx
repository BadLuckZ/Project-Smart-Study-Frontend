"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";

const DashboardPage = () => {
  const { user, handleSignout } = useAuth();
  return (
    <div className="flex flex-col gap-2 p-4">
      {user ? (
        <>
          <h1 className="text-2xlfont-bold">
            {`Hello ${user.displayName} (${user.email})! This is Dashboard Page`}
          </h1>
          <Button variant={"destructive"} onClick={handleSignout}>
            Sign out
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-2xl text-red-500 font-bold">
            You didn't log in yet!!!
          </h1>
          <Link
            href={"/login"}
            className="border rounded-md px-3 py-1 cursor-pointer bg-gray-500 
          text-white text-center font-bold"
          >
            Click here to login!
          </Link>
        </>
      )}
    </div>
  );
};
export default DashboardPage;
