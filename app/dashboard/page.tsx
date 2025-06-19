"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { useState } from "react";

const DashboardPage = () => {
  const [userToken, setUserToken] = useState<string | undefined>();
  const { user, handleSignout, getUserToken } = useAuth();

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-2xl font-bold">
        {`Hello ${user?.displayName} (${user?.email})! This is Dashboard Page`}
      </h1>

      <Button variant={"destructive"} onClick={handleSignout}>
        Sign out
      </Button>

      <Button
        className="cursor-pointer"
        onClick={async () => {
          if (!userToken) {
            const token = await getUserToken();
            setUserToken(token);
          } else {
            setUserToken(undefined);
          }
        }}
      >
        {userToken ? "Hide" : "Show"}
      </Button>

      {userToken && (
        <p
          className="text-wrap cursor-pointer text-blue-500 break-all underline"
          onClick={() => {
            navigator.clipboard.writeText(userToken);
            alert("Token copied to clipboard!");
          }}
        >
          {userToken}
        </p>
      )}
    </div>
  );
};

export default DashboardPage;
