"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

const AccountPage = () => {
  const { handleSignout, userData, isUserDataLoading } = useAuth();

  return (
    <>
      <Navbar />
      {!isUserDataLoading && (
        <div className="flex flex-col gap-2 p-4">
          <h1 className="text-2xl font-bold">Hello! This is Account Page</h1>

          <div className="w-full border-4 rounded-xl p-4 flex flex-col gap-2">
            <img
              src={userData.photoUrl}
              alt="Account's Image"
              className="rounded-full w-10 h-10"
            />
            <div className="w-full flex flex-col sm:flex-row gap-2 px-4 py-2 border-2">
              <p className="text-xl font-medium">Username</p>
              <p className="text-lg">{userData.username}</p>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-2 px-4 py-2 border-2">
              <p className="text-xl font-medium">Email</p>
              <p className="text-lg">{userData.email}</p>
            </div>
          </div>

          <Button
            variant={"destructive"}
            onClick={handleSignout}
            className="cursor-pointer"
          >
            Sign out
          </Button>
        </div>
      )}
    </>
  );
};
export default AccountPage;
